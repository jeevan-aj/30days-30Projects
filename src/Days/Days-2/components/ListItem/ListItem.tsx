import style from "./ListItem.module.css";

const ListItem = ({
  title,
  id,
  onItemClick,
  checked,
}: {
  title: string;
  id: number;
  onItemClick: (id: number) => void;
  checked: boolean;
}) => {
  return (
    <div
      onClick={() => onItemClick(id)}
      className={`${style.listItem}`}
      style={{ backgroundColor: `${checked ? "grey" : ""}` }}
    >
      {title}
    </div>
  );
};

export default ListItem;
