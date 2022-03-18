import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function List(props) {
    const navigate=useNavigate();
    const { listId } = useParams();
    
  const addTask = () => {
   navigate(`/addTasks/${listId}/0`)
  };
  const onEdit = (eachTask) => {
    console.log(eachTask);
    //setPage('task');
    //setSelectedTask(eachTask);
  };
  return (
    <>
      <div>ListDetails</div>
      <ul>
        {console.log("props.mockList",props.mockList)}
        {props.mockList.filter((list)=>list.id===parseInt(listId))[0].tasks.map((eachTask,index) => (
          <div key={index+3}>
            <li key={index}>
              {' '}
              {eachTask.title}
            </li>
            <button key={index+1} onClick={(task) => onEdit({ title: eachTask.title, id: eachTask.id })}>edit</button>
          </div>

        ))}
        <button onClick={() => addTask()}>Add Task</button>
      </ul>
    </>

  );
}
