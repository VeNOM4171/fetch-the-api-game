const  router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../utils/validation');


router.post('/register', async (req, res) => {

    //check data before adding user to db
    const {error} = registerValidation( req.body );
    if(error) return res.status(400).send(error.details[0].message);

    //check for duplications
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email exist in DataBase.');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    //check data before adding user to db
    const {error} = loginValidation( req.body );
    if(error) return res.status(400).send(error.details[0].message);
    
    //check if user registered or not
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email incorrect.');
    
    //password is incorrect
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Password incorrect.');

    //create & assign a token
    const token = jwt.sign({_id : user._id}, process.env.JWT_TOKEN);
    res.header('auth-token', token).send(token);
    res.send('Logged in')
})

module.exports = router;