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
const updateStatus(res.data)=async (IdleDeadline, status)=>{
    try await > Darmchid;
    axios.put(http://localhost:5000/api/statements/${id}),
        {status}};
        alert('');
        setStatements(statements.map(g=>(s.id===id?{...s,status}:g)));
    } catch(err)
{console.error(err);
    alert('');
};
return (<div><h2></h2><ul>
    {statements.map(Statement=>((li key={statement.id}>
    <strong></strong>{statement.adres}
    <strong>Описание</strong>
            <br/>
            <strong>Статус</strong>{statement.status}<br/>
            ><button onClick={()=>updateStatus(statement.id,
                'Потверждить')}>Потверждить</button>
                <button onClick={()=>updateStatus(statement.id,
                    'Отклонить')}>Отклонить</button>
            </li>));</ul></div>);

};
export default AdminPanel