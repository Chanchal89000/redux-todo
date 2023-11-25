import React from 'react'
import Listitem from './Listitem'
import { useSelector } from 'react-redux'

const ListGroup = () => {


  const {allTodos} = useSelector((state) => state.todos)


  return (
    <ul id='task-ul'>

     {allTodos.map((todo)=>(
      <Listitem key={todo._id} todo={todo}/>
     ))}
   
    </ul>
  )
}

export default ListGroup