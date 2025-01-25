import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=> {
    return(<nav style= {{
        padding: '10px',
        backgroundColor:'#007bff',
        color:'white'
    }}>
    <Link to ="./register" style={{
        color:'white',
        marginRight:'15px'}}>
    Регистрация</Link>
    <Link to ="./login" style={{
        color:'white',
        marginRight:'15px'}}>
    Вход</Link>
    <Link to ="./statements" style={{
        color:'white',
        marginRight:'15px'}}>
    Заявки</Link>
    <Link to ="./admin" 
    style={{
        color:'white'
    }}>Админ-панель</Link>
</nav>);};
export default Navbar
