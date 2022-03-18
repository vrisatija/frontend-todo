import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export function Task(props) {
    const { listId ,taskId} = useParams();
    const navigate=useNavigate()
    const list=props.mockList.filter((list)=>list.id===parseInt(listId));
    // const [list,setList]=useState(lists)
    
    const selectTask=()=>{
        
        console.log(list)
        if(parseInt(taskId)===0)
        return ''
        return list[0].filter((task)=>task.id===parseInt(taskId))[0].title;
    }
    const [task, setTask] = useState(selectTask());
  const onUpdateTask = (event) => {
    setTask(event.target.value);
  };
  const newObj = () => {
    let obj={
      title: task,
      id: parseInt(taskId)===0? list[0].tasks.length + 1 :  parseInt(taskId ),
    };
    console.log("obj",obj)
    return obj;
  };
  const onSave = (taskItem) => {  
    console.log("LIST[0].name",list);
    let f = 0;
    const updateTask=list[0].tasks.map((eachTask)=>{
      if(eachTask.id===parseInt(taskId))
      {
        f=1;
        return taskItem;
      }
      return eachTask;
    })
    if (f === 0) { updateTask.push(taskItem); }
    
    const updateList = {
      id: list[0].id,
      list: list[0].list,
      tasks: updateTask
    };
    const updatedMockList= props.mockList.map((eachList)=>{
      if(eachList.id===parseInt(listId)){
        return updateList
      }
      return eachList
    })
    console.log("array array",updatedMockList)
     props.setmockList([...updatedMockList]);
    
    navigate(`/viewTasks/${listId}`)
  };
  return (
    <div>
      <input value={task} onChange={onUpdateTask} />
      <button onClick={() =>{
          onSave(newObj())
        }}>Save</button>
    </div>
  );
}
