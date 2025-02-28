import "./App.css";
import UppercaseColoredParagraph from "./components/UppercaseColoredParagraph/UppercaseColoredParagraph";
import Button from "./components/Button/Button";

function App() {
  const text =
    "Hey, I'm a text transformed, colored, and rendered using REACT, VITE and JSX.";
  const color = "#7a01c7";
  const label = "DevQuest / Aluno: João V. A. Lima";

  return (
    <>
      <Button label={label} />
      <UppercaseColoredParagraph paragraph={text} color={color} />
    </>
  );
}

export default App;
