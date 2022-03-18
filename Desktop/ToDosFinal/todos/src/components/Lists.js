import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_AGENTS_ENDPOINT, GET_MATCH_ENDPOINT } from '../constants/apiEndpoint';
import makeRequest from './utils/makeRequest/makeRequest'
export function Lists(props) {
  const [responseData,setResponseData]=useState(null);
    const [isInitialised,setIsInitialised]=useState(false)
    useEffect(()=>
    {
      if(!isInitialised)
      {
        setIsInitialised(true)
        makeRequest(GET_AGENTS_ENDPOINT).then((response)=>console.log(response))
        // makeRequest(GET_MATCH_ENDPOINT('12c3se4')).then((response)=>{
        //   console.log(response)
        // })
        makeRequest(GET_MATCH_ENDPOINT('12c3se4')).then((response)=>{
          setResponseData(response)
          console.log(response)
        })
      }
      
    },[]) 
    useEffect(()=>{//this effect will run only when response data changes 
      //if(!isInitialised){
        console.log('ResponseData',responseData)
     // }
    },[responseData])
    
    const navigate = useNavigate();
    const viewTasks = (eachList) => {
        navigate(`/viewTasks/${eachList.id}`)
    };
    const onAdd = () => {
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
