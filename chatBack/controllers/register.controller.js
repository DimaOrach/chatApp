import multer from "multer";
import UserModel from "../models/user.js";
import path from 'path';
import bcrypt from 'bcrypt';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }    
});

export const upload = multer({
    storage : storage
});


async function Register(req, res) {
    try{
        const {username, password} = req.body;
        const file = req.file.filename;

        const userExist = await UserModel.findOne({username});
        if(userExist) {
            return res.status(400).json({msg: 'Useralready exist'});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username,
            password: hashPassword,
            image: file
        });

        await newUser.save();

        return res.status(200).json({msg: 'Success!'});

    } catch(error) {
        console.log(error);
        return res.status(500).json({msg: 'Error' + error});
    }
}

export default Register;