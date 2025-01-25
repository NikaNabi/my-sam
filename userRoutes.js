const express = require('express');
const jwt = require('jsonwedtoken'); const db = require('../db/connection');
const router =express.Router();
const SECRET_KEY = 'password';
router.post('/register',(req,res)=>{
    const{ username,fio,email,phone,password}=req.body;
    const query='INSERT INTO users (username,fio,email,phone,password) VALUES(?,?,?,?,?)';
    db.query(query,{username,fio,email,phone,password},(err)=>{if (err) return res.status(500), send(err);
        res.send({message:'Пользователь зарегистрирован'});
    });
});
router.post('/login',(req,res)=>{
    const query = 'SELECT *FROM users WHERE username=? AND-password =?';
    db.query(query,{username,password},(err, results) => {
        if (err) return res.status(500),send(err); if (results.lengh>0) 
            {const token =jwt.sing({ id: results [0],id}, SECRET_KEY,
                {expiresIn:'I h'});
                res.send ({ message:'Авторизация успешна',token});}
            else {res.status(401).send ({message:'Неверный логин или пароль'});};}
        );});
            module.exports = router;


   