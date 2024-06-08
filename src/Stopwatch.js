import React,{useState,useEffect} from 'react';

const Stopwatch=()=>{
   const[minutes,setMinutes]=useState(0);
   const[seconds,setSeconds]=useState(0);
   const[running,setRunning]=useState(false);


   useEffect(()=>{

    let timer;
    if (running){
        timer=setInterval(() => {
            setSeconds(prevSeconds=>{
            if (prevSeconds === 59) {
              setMinutes(prevMinutes => prevMinutes + 1);
              return 0;
            }
            return prevSeconds + 1;

        })
        }, 1000);
    }else 
        {
            clearInterval(timer);
        }

        return ()=>clearInterval(timer);

   },[running,minutes,seconds]);

   const resetTime=()=>{
    setMinutes(0);
    setSeconds(0);
    setRunning(false);
    

   }


    return(
        <>
       <h1>Stopwatch</h1>
      <p>Time: {String(minutes).padStart(1, '0')}:{String(seconds).padStart(2, '0')}</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={resetTime}>Reset</button>
        
        </>
    )
}

export default Stopwatch;