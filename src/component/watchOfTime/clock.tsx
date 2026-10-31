"use client"
import {useState,useEffect} from 'react'
const Clock = () => {
    const [date,setData] =useState('')

        useEffect(()=>{
            const upDateTime=()=>{
            const today = new Date().toLocaleString("bn-BD", {
                dateStyle:'full',
            });
    
            setData(today);
            };
            upDateTime()
    
            // up-to-date to time
             const interval= setInterval(upDateTime,1000);
             return ()=> clearInterval(interval);
    
    
    
        },[]);
    return (
         <h2>{date}</h2>
    );
};

export default Clock;