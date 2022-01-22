import {useEffect} from "react";

export const Title = () => {
    useEffect(() => {
        console.log('Render Title');

        return (() => console.log('Unmount Title'));
    }, []);

    return (
        <h1>Reactive Var</h1>
    );
}
