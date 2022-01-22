import {useEffect} from "react";
import {useReactiveVar} from "@apollo/client";
import {Button} from "./Button";
import {Title} from "./Title";
import {showTitle} from "./store";

export const App = () => {
    useEffect(() => {
        console.log('Render App')
    }, []);

    const isShown = useReactiveVar(showTitle);

    return (
      <div>
          <Button />
          {isShown ? <Title /> : null}
      </div>
    );
}
