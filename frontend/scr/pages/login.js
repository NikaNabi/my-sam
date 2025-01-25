import React,{useState} from "react";
import axios from 'axios';
const Login =()=>{
    const[formData,setFormData]=
    useState({username:'',fio:'',email:'',phone:'',password:''});
const handleChange=(e)=>
{setFormData({
    ...formData,
        [e.target.name]:
        e.target.value});};
consthandleSublet=async(e)=>{
    e.presentDefault();
    try{
        const res= await axios.post('http://localhost:5000/api/users/login',
            formData);
        alert(res.data.messange);}
    catch (err)
    {console.error(err);
        alert('Ошибка при регистрации');}
};
return (<form onSublit={handleSublit}>
    <h2>Регистрация</h2>
    <input type="text" name="username"
    placeholder="Логин" onChange={handleChange}
    required/>
    <input type="password" name="password"
    placeholder="Пароль" onChange={handleChange}
    required/>
    <button type="submit">Войти</button>
    </form>);
};
export default Login;