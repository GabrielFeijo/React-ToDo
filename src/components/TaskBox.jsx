import React, { useState } from 'react'
import taskFetch from '../config/axios'
import Checkbox from './Checkbox'
import './TaskBox.css'

const TaskBox = ({ text, id, theme, completed, code }) => {
  const [checked, setChecked] = useState(completed)

  const saveToDo = (value) => {
    taskFetch.put('/updateTask', {
      id: id,
      code: code,
      task: text,
      completed: true
    })
      .then((data) => {
        setChecked(true)

      })
      .catch((erro) => {
        console.log(erro);
      });

  }
  const themeStyle = {
    dark: {
      box: {
        backgroundColor: 'hsl(235, 24%, 19%)',
        color: 'hsl(236, 9%, 61%)'
      }
    },
    light: {
      box: {
        backgroundColor: 'white',
        color: 'hsl(235, 24%, 19%)'
      }
    }

  };



  return (
    <div className='task-box' style={themeStyle[theme].box}>
      <Checkbox handleClick={saveToDo} value={checked} id={id} name={id} theme={theme} />
      {checked ?
        <label htmlFor={id}><s>{text}</s></label>
        :
        <label htmlFor={id} >{text} </label>
      }

    </div>
  )
}

export default TaskBox