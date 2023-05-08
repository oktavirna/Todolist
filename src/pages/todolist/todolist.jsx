import "./todolist.css";
import { useState } from "react";
import List from "./list";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);
  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now }]);
    setCurrentItem("");
  };

  return (
    <div className="todolist">
      <div className="todolistWrapper">
        <div className="todo-app">
          <h2 className="To-Do-List">To Do List!</h2>
          <div className="row">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemList}>Add</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
          <ul className="list-container">
            {/* <li className="checked">Task 1</li>*/}
            {/* <li>Task 2</li> */}
            {/* <li>Task 3</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
