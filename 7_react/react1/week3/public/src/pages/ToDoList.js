import { List } from "../components/List";
import React from 'react';


export function ToDoList() {
  return (
    <div>
      <h1>ToDoList</h1>
   <List fetchUrl="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"/>
  </div>
  );
}