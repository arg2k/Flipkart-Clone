import { instance } from "../index.js";
import crypto from "crypto";
import { Payment } from "../model/paymentSchema.js";
import Config from "../../server/constants/Items.js";

export const checkout = async (req, res) => {
  console.log(req);
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  console.log(options);
  console.log("coming");
  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `${Config.ip}:3000`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
