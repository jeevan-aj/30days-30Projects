import  { useEffect, useState } from "react";
import { data } from "../data/data";
import ListItem from "../components/ListItem/ListItem";
import boardStyle from "./Board.module.css";

type TData = {
  title: string;
  id: number;
  checked: boolean;
};

const Board2 = () => {
  const [list1Data, setList1Data] = useState<TData[] | []>([]);
  const [list2Data, setList2Data] = useState<TData[] | []>([]);

  useEffect(() => {
    setList1Data(data);
  }, []);

  function handleList1ItemsClicked(id: number) {
    const transformedArray = list1Data.map((cur) => {
      if (cur?.id == id) {
        const newValue = (cur.checked = !cur.checked);
        return { ...cur, newValue };
      } else {
        return cur;
      }
    });

    setList1Data(transformedArray);
  }

  function handleList2ItemsClicked(id: number) {
    const transformedArray = list2Data.map((cur) => {
      if (cur?.id == id) {
        const newValue = (cur.checked = !cur.checked);
        return { ...cur, newValue };
      } else {
        return cur;
      }
    });

    setList2Data(transformedArray);
  }

  function handleRightButtonClicked() {
    const filteredArray = list1Data.filter((cur) => {
      if (!cur.checked) {
        return cur;
      } else {
        setList2Data((prev) => [...prev, { ...cur, checked: !cur.checked }]);
      }
    });

    setList1Data(filteredArray);
  }

  function handleLeftButtonClicked() {
    const filteredArray = list2Data.filter((cur) => {
      if (!cur.checked) {
        return cur;
      } else {
        setList1Data((prev) => [...prev, { ...cur, checked: !cur.checked }]);
      }
    });

    setList2Data(filteredArray);
  }
  return (
  

    
    <div className={`${boardStyle.container}`}>
      <div className={`${boardStyle.ListContainer}`}>
       
        <div className={`${boardStyle.List}`}>
          {/* list 1 */}
          {list1Data?.map((cur) => {
            return (
              <ListItem
                id={cur?.id}
                key={cur?.id}
                title={cur?.title}
                onItemClick={handleList1ItemsClicked}
                checked={cur?.checked}
              />
            );
          })}
        </div>

        <div className={`${boardStyle.ButtonContainer}`}>
          <div>
            <button
              onClick={handleLeftButtonClicked}
              className="p-2 border 1px solid black rounded-sm hover:bg-gray-300 cursor-pointer"
            >{`<-`}</button>
          </div>

          <div>
            <button
              onClick={handleRightButtonClicked}
              className="p-2 border 1px solid black rounded-sm hover:bg-gray-300 cursor-pointer"
            >{`->`}</button>
          </div>
        </div>
        <div className={`${boardStyle.List}`}>
          {/* list2 */}
          {list2Data?.map((cur) => {
            return (
              <ListItem
                id={cur?.id}
                key={cur?.id}
                title={cur?.title}
                onItemClick={handleList2ItemsClicked}
                checked={cur?.checked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board2;
