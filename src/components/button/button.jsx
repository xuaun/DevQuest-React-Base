import "./button.css";

const Button = ({ label }) => {
  return (
    <button onClick={() => alert(`A label desse botão é ${label}.`)}>
      <img
        src="https://pages.greatpages.com.br/evento.devemdobro.com-matriculas-abertas/1738150248/imagens/desktop/389257-d87072869328c12d232af3402ff0c636.png"
        alt="DevQuest logo"
        className="logo"
      ></img>
    </button>
  );
};

export default Button;
