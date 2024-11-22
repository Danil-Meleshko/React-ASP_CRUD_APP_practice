import { useState, useEffect } from "react";
import React from "react";
import Header from '../Elements/Header';

export default function Training(){
    const [someData, setSomeData] = useState({
        name: "",
        lastname: "",
        age: 0,
        hobby: "",
    });

    useEffect(() => {
        console.log(someData);
    },[someData]);

    function handledata(){
        setSomeData(() => {
            return {
                name: document.querySelector(".dataName").value,
                lastname: document.querySelector(".dataLastname").value,
                age: Number(document.querySelector(".dataAge").value),
                hobby: document.querySelector(".dataHobby").value
            }
        });
    }

    return(
        <>
            <Header/>
            <div className='Body'>
                <div className="App">
                <h1>Training Page</h1>

                <div>
                <input type="text" name="name" className="dataName" placeholder="write name"/>
                <input type="text" name="lastname" className="dataLastname" placeholder="write lastbane"/>
                <input type="text" name="age" className="dataAge" placeholder="write age"/>
                <input type="text" name="hobby" className="dataHobby" placeholder="write hobby"/>

                <button onClick={handledata}>Send data</button>
                </div>
                    
                </div>
            </div>
        </>
    )
}