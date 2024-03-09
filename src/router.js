const express = require('express');
const router = express.Router();
const fs = require('fs');

const aboutMeData = JSON.parse(fs.readFileSync('../Data/AboutMe.json'));


router.get('/',(req,res)=>{
    console.log(`HOME PAGE REQUESTED FROM ${req.ip}`);
    res.render('index',aboutMeData);
    res.end();
});

router.get('/aboutMe',(req,res)=>{
    console.log(`ABOUT ME PAGE REQUESTED FROM ${req.ip}`);
    res.render('aboutMe',aboutMeData);
    res.end();
} );

router.get('/skills',(req,res)=>{
    console.log(`SKILLS PAGE REQUESTED FROM ${req.ip}`);
    res.render('skills',aboutMeData);
    res.end();
});

router.get('/portfolio',(req,res)=>{    
    console.log(`PORTFOLIO PAGE REQUESTED FROM ${req.ip}`);
    res.render('portfolio',aboutMeData);
    res.end();
});

module.exports = router;