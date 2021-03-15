const express = require('express');
const config = require('../config')
const firebase = require('firebase');
const db = firebase.initializeApp(config.firebaseConfig);
const User = require('../models/user');
const firestore = db.firestore();

const router = express.Router();

router.get('/user', async function(req,res,next){
    try{
        const users = await firestore.collection('users');
        const data = await users.get();
        const usersArray = [];
        if(data.empty){
            res.status(404).send("No User Record Found");
        }else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().email,
                    doc.data().phoneNumber,
                    doc.data().location,
                    doc.data().password,
                    doc.data().confPassword,
                );
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    } catch(error){
        res.status(400).send(error.message);
    }
});
// router.get('/',getAllUsers);
// router.get('/user/:id',getUser);
// router.put('/user/:id',updateUser);
// router.delete('/user/:id',deleteUser);

module.exports = router;
