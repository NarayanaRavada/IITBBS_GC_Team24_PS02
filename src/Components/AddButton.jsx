import { Add } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router'

import '../CSS/AddButton.css'

const AddButton = () => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate("/AddDiscussion")
    }

    return (
        <button className="addBtn" onClick={onClick}>
            <Add style={{color: 'white'}} />
        </button>
    )
}

export default AddButton
