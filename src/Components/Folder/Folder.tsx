import React, { FC, useState } from "react";
import { Item } from "../../types";
import ItemComponent from "../Item/Item";
import './Folder.scss';

interface Props {
  item: Item;
}

const FolderComponent: FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <p className="name" onClick={handleClick}>{isOpen ? `▼ ${item.name}` : `▶ ${item.name}`}</p>
      {isOpen && item.children && (
        <div>
          {item.children.map(
            (child) => <ItemComponent item={child} />
          )}
        </div>
      )}
    </div>
  );
};

export default FolderComponent;
