import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddLists(props) {
    
  const [list, setList] = useState('');
  const onUpadateList = (event) => {
    setList(event.target.value);
  };
  const onSave = (lists) => {
    console.log(lists);
    const updateMockList = {
      id: props.mockList.length + 1,
      list: lists,
      tasks: [],
    };
    props.setmockList(()=>[...props.mockList, updateMockList]);
    console.log(props.mockList);
    //setPage('lists');
    
  };
  const navigate = useNavigate();
  return (
    <>
      <label>Add list</label>
      <input onChange={onUpadateList} />
      <button onClick={() => {
          onSave(list); 
            navigate('/')
        }}>
        Submit
      </button>
    </>
  );
}
