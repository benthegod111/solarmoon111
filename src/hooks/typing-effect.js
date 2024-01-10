import { useEffect, useState } from "react";

export function  useTypingEffect(text,duration) {
    const [current,setCurrent] = useState(1);

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setCurrent((value) => value + 1);
        },duration);
        return () => {
            clearInterval(intervalId);
        }
    },[duration]);
    return text.substring(0,current);
}