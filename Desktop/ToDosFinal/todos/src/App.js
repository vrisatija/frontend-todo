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
  const [page, setPage] = useState('lists');
  const onAdd = () => {
    setPage('addList');
  };
  const onSave = (list) => {
    console.log(list);
    const updateMockList = {
      id: mockList.length + 1,
      list,
      tasks: [],
    };
    setmockList([...mockList, updateMockList]);
    console.log(mockList);
    setPage('lists');
  };
  const viewTasks = (eachList) => {
    setPage('tasks');
    setmockList(eachList);
  };
  // const [listData, setListData]=useState((mockList))
  const [selectedTask, setSelectedTask] = useState();

  const onEdit = (eachTask) => {
    console.log(eachTask);
    setPage('task');
    setSelectedTask(eachTask);
  };
  const onAddList = () => {
    setPage('task2');
    setSelectedTask('');
  };
  const onSaveTasks = (taskItem) => {
    console.log(taskItem.title);
    let f = 0;
    const updateMockList = {
      name: mockList.name,
      tasks: mockList.tasks.map((eachTask, index) => {
        if (eachTask.id === taskItem.id) {
          f = 1;
          return taskItem;
        }
        return eachTask;
      }),
    };
    if (f === 0) { updateMockList.tasks.push(taskItem); }
    setmockList(updateMockList);
    setPage('tasks');
  };
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
