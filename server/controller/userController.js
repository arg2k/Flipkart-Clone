import User from "../model/userSchema.js";


export const userSignup = async(request, response) => {
    try
    {
        const present = await User.findOne({mobileNumber: request.body.mobileNumber});
        if(present)
        {
            console.log(present);
            return response.status(400).json('you are already registered!');
        }
        const user= request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json('Signup is done!');
    }
    catch(err)
    {
        console.log('err: ',err.message);
    }

    //return "hello";
}
export const userLogin = async(request, response) => {
    try
    {
        const present = await User.findOne({mobileNumber: request.body.mobileNumber, password: request.body.password});
        if(present)
        {
            console.log(present);
            return response.status(200).json(`Hello,${request.body.mobileNumber} login done`);
        }
        else
        {
            return response.status(401).json(`Wrong login credentials`);
        }
    }
    catch(err)
    {
        console.log('err: ',err.message);
    }

}