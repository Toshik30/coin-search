import React from 'react'
import './Navbar.css'

const InputFiltered = ({handleChangeList}) => {
    const filteredList = (value) => {
        handleChangeList(value.toLowerCase())
    }
    return (
        <input
            onChange={(e) => filteredList(e.target.value)}
            type='text'
            placeholder='Searching...'
        />
    )
}

export default InputFiltered