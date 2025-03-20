import StackCard from "../components/card/stackCard/StackCard";
import style from './StackCardContainer.module.css'

const StackCardContainer = () => {
  return (
    <div className={`${style.stackCardContainer}`}>
      <StackCard />
    </div>
  );
};

export default StackCardContainer;
