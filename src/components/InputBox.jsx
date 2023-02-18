import React, { useState } from 'react'
import taskFetch from '../config/axios'
import Checkbox from './Checkbox'

import './InputBox.css'

const InputBox = ({ theme, handleClick, check, text, handleChange }) => {


    const themeStyle = {
        dark: {
            box: {
                backgroundColor: 'hsl(235, 24%, 19%)',
            },
            input: {
                color: 'hsl(236, 9%, 61%)',
                '&:hover': {
                    color: 'hsl(236, 9%, 61%)'

                },

            }
        },
        light: {
            box: {
                backgroundColor: 'white',
            },
            input: {
                color: 'hsl(235, 24%, 19%)',
                '&:hover': {
                    color: 'hsl(235, 24%, 19%)'

                },

            },



        }

    };

    return (
        <div className='input-box' style={themeStyle[theme].box}>
            <Checkbox handleClick={handleClick} value={check} theme={theme} />
            <input type="text" placeholder='Informe uma nova tarefa' style={themeStyle[theme].input} value={text} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default InputBox