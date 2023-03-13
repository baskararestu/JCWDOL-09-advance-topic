import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";

function App() {
  // const Button = (props) => <button style={props.style}>click me</button>;
  // const Text = (props) => <p style={props.style}>Testing</p>;
  // const StyleButton = LearnHOC(Button);
  // const StyleText = LearnHOC(Text);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
