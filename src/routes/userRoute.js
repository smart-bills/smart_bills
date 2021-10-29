const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.route("/").post((req, res) => {
    const newID = req.body.newID;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const newUser = new User({
        newID,
        email,
        name,
        password
    });

    newUser.save();
});

module.export = router;
