import "./uppercaseColoredParagraph.css";

const UppercaseColoredParagraph = (props) => {
  return (
    <p style={{ color: props.color, textTransform: "uppercase" }}>
      {props.paragraph}
    </p>
  );
};

export default UppercaseColoredParagraph;
