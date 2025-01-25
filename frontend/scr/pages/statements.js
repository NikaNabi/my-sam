import React,{useEffect, useState} from "react";
import axios from 'axios';
const Statements =()=>
{const [Statements,setStatements]= useState([]);
    useEffect(()=> {try {
        const res=awaitaxios.post('http://localhost:5000/api/statements');
        setStatements(res.data);}
    catch(err)
{console.error(err);} });
fetchStatements();[];
return (<div>
    <h2>Список заявок</h2>
    <ul>
        {statements.map(statement=>
            (<li key={statement.id}><strong>Адрес</strong>
            {statement.adres}
            <br/>
            <strong>Описание</strong>
            <br/>
            <strong>Статус</strong>{statement.status};
            </li>)
        )}
    </ul>

</div>);
}

export default Statements

