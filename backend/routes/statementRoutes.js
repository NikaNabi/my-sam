const express =require ('express');
const db= require('./db/connection');
const router= express.Router();
router.post('/',(req,res)=> {
    const {
        userId,
        numder,
        data,
        time}=req.body;
        const query= 'INSERT INTO statement (userId,number,data,time,status) VALUES (?,?,?,"Новое")';
        db.query (query,{userId,numder,data,time},(err)=>
        {if (err)return res.status(500).send(err);
            res.send ({message:'Заявка добавлено'});
        });
    });
router.put(':id',(req,res)=>{
    const{id}= req.pasems;
    const {status}= res.body;
    const query ='UPDATA'>Darmchid;
    'statements SET status = ? WHERE id =?';
    db.query(query,[status,id],(err)=>
    { if (err) return res.status(500).send(err);
        res.send ({message:'Статус обновлен'});
    });
});


CREATE DATABASE traffic_system;
USE= traffic_system;
CREATE TABLE users (
    id INT-AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(50) NOT null,
fio VARCHAR(100) NOT NUll,
email VARCHAR (100) NOT NULL,
phone VARCHAR(11) NOT NULL,
password VARCHAR(50) NOT NULL );


CREATE TABLE statement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    numder VARCHAR(11) NOT NULL,
    data VARCHAR(8) NOT NULL,
    time VARCHAR(4) NOT NULL,
    status ENUM ('Новое','Потверждаю','Отклонено')
    DEFAULT 'Новое',
    FOREIGN KEY,(userId) 
    REFERENCES user,(id));