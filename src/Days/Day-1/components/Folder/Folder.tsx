import { ReactNode, useState } from "react";
import { TFile } from "../../data/data";
import style from "./Folder.module.css";

const Folder = ({ name, children }: TFile) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <button onClick={()=> setIsOpen(!isOpen)} className={style.parent}>
        {children && (isOpen ? "- " : "+ ")}
        {name}
      </button>
      {isOpen ? (
        <div className={style.child}>
          {children &&
            children?.map((cur: TFile): ReactNode => {
              return <Folder name={cur.name} children={cur?.children} />;
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Folder;
