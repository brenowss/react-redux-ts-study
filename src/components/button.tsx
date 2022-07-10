import './styles.css';

interface ButtonProps {
  title: string;
  callback: () => void;
}

function Button({ title, callback }: ButtonProps) {
  return (
    <button className="customButton" type="button" onClick={callback}>
      {title}
    </button>
  );
}

export default Button;
