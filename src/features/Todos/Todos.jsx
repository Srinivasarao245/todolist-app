import React from 'react';
import { useGetallTodosQuery } from '../../services/TodosAPi';
function Todos() {
    var{isLoading,data}=useGetallTodosQuery();
    console.log(isLoading);
    console.log(data);
  return (
    <div>
      { isLoading && <h1>Loading......</h1> }
      { !isLoading && data.map((s)=>{
        return <div><h1>{s.name}</h1>
                    <h2>{s.age}</h2>
        </div>
      }) }
    </div>
  ) };
export default Todos;