const { User, sequelize } = require('../models');
const bcrypt = require('bcryptjs');
const gravatarUrl = require('gravatar-url');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;

    try {
        // tao avatar mac dinh
        const avatarUrl = gravatarUrl(email);

        // tao ra 1 chuoi ngau nhien 10 ki tu
        const salt = bcrypt.genSaltSync(10);
        // ma hoa salt + password
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({ name, email, password: hashPassword, numberPhone, avatar: avatarUrl });

        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where:{
            email,
        },
    });

    if(user){
        const isAuth =  bcrypt.compareSync(password, user.password);
        console.log("isAuth: ", isAuth);
    
        if(isAuth){
            const token = jwt.sign({ email: user.email, type: user.type }, "huykaiser97", { expiresIn: 60*60 });

            res.status(200).send({ message: 'Login successful', token});
        }else{
            res.status(500).send({ message: 'Login failed! Check again the email or password'});
        }
    }else{
        res.status(404).send({ message: 'User unfound!'});
    }
};

const uploadAvatar = async (req, res) => {
    const { file } = req;
    const urlImage = `http://localhost:3000/${file.path}`;
    const { user } = req;

    const userFound = await User.findOne({
        email: user.email
    });

    userFound.avatar = urlImage;
    await userFound.save();

    res.send(userFound);
};

const getAllTrip = async (req, res) => {
    try {
        const [ result ] = await sequelize.query(
            `SELECT users.name as user_name, fromSta.name as fromStation, toSta.name as toStation FROM users
            inner join tickets 
            on users.id = tickets.user_id
            inner join trips 
            on trips.id = tickets.trip_id
            inner join stations as fromSta
            on fromSta.id = trips.fromStation
            inner join stations as toSta
            on toSta.id = trips.toStation`
        )
        res.send(result)   
    } catch (error) {
        res.status(500).send(error)    
    }
};

module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTrip
};

