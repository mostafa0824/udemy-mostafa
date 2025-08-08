import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timerButtonHome = setInterval(()=>{
      setTimer((timer)=>{
        if(timer>=10){
         clearInterval(timerButtonHome)
         return timer
        }
        return timer +1
      })
    },1000)
        
    return () => clearInterval(timerButtonHome);
  }, []);

  const spinnerStyle = css`
    display: block;
    border-width: 4px;
  `;

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm transition-opacity duration-300">
      <div className="text-center">
        <ClipLoader
          color="#6366f1"
          css={spinnerStyle}
          size={70}
          speedMultiplier={0.8}
        />
        <p className="mt-6 text-lg font-medium text-indigo-600 animate-pulse">
          Loading...
        </p>
        <button
          disabled={timer<10}
          onClick={() => navigate("/")}
          className="disabled:text-purple-200 disabled:ring-purple-300 ring-1 ring-purple-700 rounded-lg text-purple-700 hover:bg-purple-100 w-25 h-10 text-nowrap flex items-center justify-center flex-col font-bold cursor-pointer mt-5">
         <p>Home page</p> <span className="text-[10px]">{timer}</span>
        </button>
      </div>
    </div>
  );
};

export default Loading;
