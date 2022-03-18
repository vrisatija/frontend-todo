import './App.css';
import { Lists } from './components/Lists';
import { AddLists } from './components/AddLists';
import { useState } from 'react';
import { List } from './components/List';
import { Task } from './components/Task';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  
  const mockListTemp = [
    {
      id: 1,
      list: 'Self Learning',
      tasks: [{
        id: 1,
        title: 'learn',
      }, {
        id: 2,
        title: 'eat',
      },{
        id:3,
        title: 'Walk',
      }, ],
    },
    {
      id: 2,
      list: 'Laundry',
      tasks: [{
        id: 1,
        title: 'learn2',
      }, {
        id: 2,
        title: 'eat2',
      },{
        id:3,
        title: 'Walk2',
      },],
    },
  ];
  const [mockList, setmockList] = useState((mockListTemp));
  

  return (
    <div className="App">
      {/* {page === 'lists' ? <Lists mockList={mockList} onAdd={onAdd} viewTasks={viewTasks} />
        : page === 'addList' ? <AddLists onSave={onSave} />
          : page === 'tasks' ? <List listData={mockList} onClick={onEdit} addList={onAddList} />
            : <Task selectedTask={selectedTask} onSave={onSaveTasks} page={page} listData={mockList} />} */}
            <Router>
              <Routes>
                <Route path="/" element={    <Lists mockList={mockList} setmockList={setmockList}/>   } ></Route>
                <Route path="addList" element={    <AddLists mockList={mockList} setmockList={setmockList} />  } ></Route>
                <Route path="viewTasks/:listId" element={    <List mockList={mockList} setmockList={setmockList} />   } ></Route>
                <Route path="addTasks/:listId/:taskId" element={    <Task mockList={mockList} setmockList={setmockList} />  } ></Route>
              </Routes>
            </Router>
    </div>
  );
}

export default App;
