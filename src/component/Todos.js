/* eslint-disable array-callback-return */
import React from 'react'
import Todo from './Todo'

export default function Todos({ TodosList}) {
    
    const a =  TodosList.map(TodoList => <Todo  TodoListing = {TodoList.name} key = {TodoList.id}/>)
   
  return (
       <div className="todos">
          {a}           
       </div>
  )
}
