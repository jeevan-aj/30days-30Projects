import Folder from '../components/Folder/Folder';
import {ReactNode} from 'react';
import { File } from '../data/data';
import boardStyle from './Day1Board.module.css'


const Day1Board = () => {
  return (
    <div className={boardStyle.container}>
      {File?.children?.map((cur): ReactNode => {
        return <Folder name={cur?.name} children={cur?.children} />;
      })}
    </div>
  );
}

export default Day1Board