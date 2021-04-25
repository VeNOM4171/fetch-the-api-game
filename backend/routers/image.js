const  router = require('express').Router();
const User = require('../models/User');

router.put('/image', async (req, res) => {
    const {id} = req.body;
    try {
        const user = await User.findById(id);
        user.entries = user.entries+1;
        const result = await user.save();        
        res.send(result);
    } catch (error) {
        res.status(404).send(error);
    }

})

module.exports = router;