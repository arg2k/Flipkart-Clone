import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from "../index.js";
import formidable from "formidable";
import https from "https";

export const addPaymentGateway = async (req, res) => {
  let paytmChecksum = await paytmchecksum.generateSignature(
    paytmParams,
    paytmMerchantKey
  );
  try {
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmChecksum,
    };
    res.json(params);
  } catch (error) {
    console.log(error);
  }
};

export const paymentResponse = (request, response) => {
  const form = new formidable.IncomingForm();
  let paytmChecksum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;
  var isSignatureVerified = paytmchecksum.verifySignature(
    request.body,
    "o8VL9aK@iONxqwG8",
    paytmChecksum
  );
  if (isSignatureVerified) {
    var paytmParams = {};
    (paytmParams["MID"] = request.body.MID),
      (paytmParams["ORDERID"] = request.body.ORDERID),
      paytmchecksum
        .generateSignature(paytmParams, "o8VL9aK@iONxqwG8")
        .then(function (checksum) {
          paytmParams["CHECKSUMHASH"] = checksum;
          var post_data = JSON.stringify(paytmParams);
          var options = {
            hostname: "securegw-stage.paytm.in",
            port: 443,
            path: "/order/status",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": post_data.length,
            },
          };
          let res = "";
          let post_req = https.request(options, function (post_res) {
            post_res.on("data", function (chunk) {
              res += chunk;
            });
            post_res.on("end", function () {
              let result = JSON.parse(res);
              response.redirect("http://localhost:3000/");
            });
          });
          post_req.write(post_data);
          post_req.end();
        });
  } else {
    console.log("checksum mismathced!");
  }
};
