const  router = require('express').Router();
const User = require('../models/User');

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        res.send(user);        
    } catch (error) {
        res.status(404).send(error);
    }

})

module.exports = router;