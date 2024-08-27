import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';

const VerifyUser = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("Authorization Header:", authHeader); // Логування заголовка

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ msg: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        console.log("Received Token:", token); // Логування токена

        if (!token) {
            return res.status(401).json({ msg: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded Token:", decoded); // Логування декодованого токена

        if (!decoded) {
            return res.status(401).json({ msg: 'Invalid token' });
        }

        const user = await UserModel.findOne({ _id: decoded.id }).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ msg: 'Invalid token' });
    }
}


export default VerifyUser;