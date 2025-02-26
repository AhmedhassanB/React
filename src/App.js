import "./App.css";
import { useState } from "react";
// const Example = (props) => {
//   const name = props.name;
//   const age = props.age;
//   const gender = props.gender;
//   return (
//     <div>
//       <h1>my name is {name}</h1>
//       <h1>my age is {age}</h1>
//       <h1>my gender is {gender}</h1>
//     </div>
//   );
// };

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Example name="ahmed" age="20" gender="Male" /> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
