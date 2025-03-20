import Day1Board from "./Days/Day-1/Board/Day1Board";
import style from "./App.module.css";
import Board2 from "./Days/Days-2/Board/Board2";
import StackCardContainer from "./Days/Day-3/Board/StackCardContainer";

const App = () => {
  return (
    <>
      <div className={style.container}>
        <Day1Board />
        <Board2 />
        <StackCardContainer />
      </div>
    </>
  );
};

export default App;
