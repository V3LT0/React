import { Children, ReactNode, useCallback, useEffect, useState } from "react";

export const UseCallbackParent = () => {
    //memoriza la funcion en si misma
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [setCount]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <UseCallbackChild handleClick={handleClick} />
        </div>
    );
}

interface Props {
    handleClick: () => void;
}

export const UseCallbackChild = ({handleClick}: Props) => {
    useEffect(() => {
        console.log("Rendered");
    }, [handleClick])

    return (
        <div>
             <button onClick={handleClick}>Click me</button>
        </div>
    );
}