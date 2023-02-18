import React, { useState } from 'react'

import './Checkbox.css'

const Checkbox = ({ name, handleClick, value, theme }) => {
    return (
        <div className={`check-container check-${theme}`}>
            <input type='checkbox' name={name} id={name} onChange={handleClick} checked={value} />
            <span className="checkmark"></span>
        </div>
    )
}

export default Checkbox


