import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { json2Array } from '../util/utilityFunctions'
import allItems from '../tftJson/items.json'

export const ItemDispatch = createContext(null);

const Items = ({ children }) => {
  const parseData = json2Array(allItems);
  const [items, dispatch] = useReducer(ItemReducer, parseData)

  return (
    <ItemDispatch.Provider value={dispatch}>
      {React.cloneElement(children, { items: items })}
    </ItemDispatch.Provider>
  );
};

export default Items;