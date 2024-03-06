import { useState } from "react";
import "./Dictionary.css";
import Data from "../Data/Data"
import imglogo from "./Untitled design (13).png";


export const Dictionary = () => {
    const [userInput, setUserInput] = useState("");
    const [data, setData] = useState([]);

    async function getApiData() {
        const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`);
        const jsonData = await response.json();
        setData(jsonData);
        localStorage.setItem("dataKey", JSON.stringify(jsonData));
    }

    function getData(e) {
        e.preventDefault();
        getApiData();
    }


    return(
        <div className="maindiv">
            <div className="logodiv">
               <img src={imglogo} alt="logo"></img> 
               <p className="p1">FindIt.com</p> 
            </div>
           
            <h1 className="p2">Online Dictionary</h1>
            <div className="formcon">
               <form>
                    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type a word" className="search"></input>  
                </form>
                <button className="but1" onClick={getData}>Search</button> 

                
            </div>
            <Data data={data} />
        </div>
    )
}