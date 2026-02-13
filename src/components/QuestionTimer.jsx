import { useEffect,useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut,mode }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        console.log("setting timeout for question timer");
        const timer=setTimeout(onTimeOut, timeOut);

        return()=>{
            clearTimeout(timer);
        }
    }, [timeOut,onTimeOut]);
    useEffect(() => {
        console.log("setting interval for question timer");
        const interval=setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
       <progress id="question-time" max={timeOut} value={remainingTime} className={mode}></progress>
    );
}