import { useState } from "react";
import Async from "./Async";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It 's good to see you</p>}
      {changedText && <p>Ahihi</p>}

      <button onClick={() => setChangedText(!changedText)}>Click me!!</button>
      <Async />
    </div>
  );
};

export default Greeting;
