import './styles.css'

export const ButtonPage = ({ text, onClick, disabled}) => (
  <div className="buttonPage">
    <button  onClick={onClick} disabled={disabled}>
      {text}
    </button>
  </div>
  );