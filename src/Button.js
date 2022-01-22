import {useEffect} from "react";
import {useReactiveVar} from "@apollo/client";
import {showTitle} from "./cache";

export const Button = () => {
    useEffect(() => {
        console.log('Render Button')
    }, []);

    const isShown = useReactiveVar(showTitle);

    return (
        <button onClick={() => showTitle(!isShown)}>Toggle title</button>
    );
}
