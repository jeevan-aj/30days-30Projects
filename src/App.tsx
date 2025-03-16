import Day1Board from "./Days/Day-1/Board/Day1Board";
import style from './App.module.css'



const App = () => {
  return (
    <div className={style.container}>
      <Day1Board/>
      <Day1Board/>
      <Day1Board/>
    </div>
  );
};

export default App;
