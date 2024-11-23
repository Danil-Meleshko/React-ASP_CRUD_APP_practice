import { useState, useEffect } from "react";
import React from "react";
import Header from '../Elements/Header';

function CountInitial(){
    console.log("Initial count: 0");
    return 0;
}

export default function Training(){
    const [count, setCount] = useState(() => CountInitial());

    function IncrementCount(){
        setCount(prevCount => prevCount + 1);
    }
    
    function DecrementCount(){
        setCount(prevCount => prevCount - 1);
    }

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
                <div className="App mt-4">
                <h1>Training Page</h1>

                    <div className="mt-4">
                        <input type="text" name="name" className="dataName m-1" placeholder="write name"/>
                        <input type="text" name="lastname" className="dataLastname m-1" placeholder="write lastbane"/>
                        <input type="text" name="age" className="dataAge m-1" placeholder="write age"/>
                        <input type="text" name="hobby" className="dataHobby m-1" placeholder="write hobby"/>

                        <div className="mt-2 d-flex justify-content-center align-items-center" style={{ height: "80px"}} >
                            <button style={{width: "100px"}} onClick={handledata}>Send data</button>
                        </div>
                    </div>
                    
                    <div className="mt-2 d-flex flex-column justify-content-center align-items-center" style={{width: "220px"}}>
                        <h2>Data Received:</h2>
                        <p>Name: {someData.name}</p>
                        <p>Lastname: {someData.lastname}</p>
                        <p>Age: {someData.age}</p>
                        <p>Hobby: {someData.hobby}</p>

                        <h2> State practice</h2>
                        <span> {count} </span><br/>
                        <div className="d-flex justify-content-between align-items-center" style={{width: "100%"}}>
                            <button className="p-2" style={{width: "100px"}} onClick={IncrementCount}>Increment</button>
                            <button className="p-2" style={{width: "100px"}} onClick={DecrementCount}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}