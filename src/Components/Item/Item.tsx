import { FC } from "react";
import { Item } from "../../types";
import Folder from "../Folder/Folder";
import FileComponent from "../File/File";
import './Item.scss';

interface Props {
  item: Item;
}
const ItemComponent: FC<Props> = ({ item }) => {
  return (
    <div className="item">
      {item.children ? (
        <Folder item={item} />
      ) : (
        <FileComponent name={item.name} />
      )}
    </div>
  );
};

export default ItemComponent;
