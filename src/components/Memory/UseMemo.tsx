import { useEffect, useMemo, useState } from "react";

interface Props {
    num: number;
}

export const UseMemo = ({num}: Props) => {
    const [numberRef, setNumberRef] = useState(0);

    const expensiveCalculation = (num: number) => {
        console.log("Calculating")
        return num * 2;
    };

    useEffect (()=> {
        setTimeout(()=>{
            setNumberRef(2);
        }, 4000);
    },[]);

    const memorizedValue = useMemo(()=> expensiveCalculation(numberRef), [numberRef]) 
    return (
        <div>
            <h2>Result: {memorizedValue}</h2>
        </div>
    );
}