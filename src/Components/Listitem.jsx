import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../features/todo/todoSlice'

const Listitem = ({todo}) => {

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(remove(id))
    }

    const handleEdit = (todo) => {
      dispatch(edit(todo))
    } 

  return (
             <li id='task-li'>
            <h5 id='list-head' >{todo.text}</h5>
            <span>
            <button id='btn-edit' onClick={()=> handleEdit(todo)} >Edit</button>
            <button id='btn-delete'  onClick={() => handleDelete(todo._id)} >delete</button>
            </span>
        </li>
  )
}

export default Listitem