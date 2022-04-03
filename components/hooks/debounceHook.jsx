import React, { useEffect, useState } from 'react'

function useDebounce(value,timeout,callback) {
    const [timer,setTimer] = useState(null);

    const clearTimer = () => {
        if(timer) 
        clearTimeout(timer)
    }

    useEffect( () => {
        clearTimer();
        if(value && callback) {
            const newTimer= setTimeout(callback, timeout);
            console.log("newTimer", newTimer)
            setTimer(newTimer);
        }

    },[value])

  return (
    <div>useDebounce</div>
  )
}

export default useDebounce