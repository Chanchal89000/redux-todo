import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update } from '../features/todo/todoSlice'


const Form = () => {



  const {edit} = useSelector(state => state.todos)


   const dispatch = useDispatch()

  const [text , setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      dispatch(update({
        _id : edit.todo._id,
        text,
      }))


    }else{
      dispatch(add({
        _id : crypto.randomUUID(),
        text, 
      }))
    }

    setText("")
  }

  useEffect(() => {
    setText(edit.todo.text)
  },[edit])



  return (
    <form id='form-box' onSubmit={handleSubmit} >
        <input id='inp' type="text" placeholder='Enter Your Task' value={text}  onChange={(e) => setText(e.target.value)} />
        <button id='btn-save'>Save</button>
    </form>
  )
}

export default Form