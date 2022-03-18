import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Lists(props) {

    const navigate = useNavigate();
    const viewTasks = (eachList) => {
        //setPage('tasks');
        navigate(`/viewTasks/${eachList.id}`)
        //console.log("mock",props.mockList);
        //props.setmockList(eachList);
    };
    const onAdd = () => {
        //setPage('addList');
        navigate('/addList')
      };
  return (
    <div>
      <ul>
        {props.mockList.map((eachList,index) => (
          <div key={index}>
            <li key={index+1}>{eachList.list}</li>
            <button key={index+2} onClick={() => viewTasks(eachList)}>View Tasks</button>
          </div>
        ))}
      </ul>
      <button onClick={onAdd}>Add Lists</button>
    </div>

  );
}
