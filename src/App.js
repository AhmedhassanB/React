import "./App.css";

const Example = () => {
  const name = "ahmed";
  const age = 12;
  const gender = "Male";
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>my age is {age}</h1>
      <h1>my gender is {gender}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Example />
    </div>
  );
};

export default App;
