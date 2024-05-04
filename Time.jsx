import React, { useState } from "react";
const Time=()=>{
let newtime= new Date().toLocaleTimeString();
const[ctime,setctime]=useState(newtime);
const Updatetime=()=>{
     newtime= new Date().toLocaleTimeString();
    setctime(newtime); 
}

return(
<>
<h1>Time{newtime}</h1>
<button onClick={Updatetime}>Get Time{Updatetime}</button>
</>
);
};
export default Time;