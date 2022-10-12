import { useState } from "react";
import "./app.css";
function App() {
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);
  const [enpty, setEnpty] = useState(false);

  const hantleSetValue = (e) => {
    setValue(e.target.value);
    setSend(false);
    setEnpty(false);
  };

  const hantleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    setValue("");
    setSend(true);
  };

  const hantleBlur = (e) => {
    if (!value) {
      setEnpty(true);
      setSend(false);
    }
  };

  return (
    <header>
      <form onSubmit={hantleSubmit}>
        <input
          type="text"
          placeholder="Введите текст..."
          value={value}
          onChange={hantleSetValue}
          onBlur={hantleBlur}
        />
        <button type="submit" disabled={!value}>
          Добавить
        </button>
      </form>
      {send && <div className="true">Сообщение успешно отправлено !</div>}
      {enpty && <div className="false">Поле ввода не должно быть пустым !</div>}
    </header>
  );
}

export default App;
