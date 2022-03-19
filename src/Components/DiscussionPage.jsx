import { Fab } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Disscussion from '../Discussion'



const DiscussionPage = () => {
    return (
        <div className="discussionContainer" >
            <Disscussion />
            <Disscussion />
            <Disscussion />
            <Disscussion />

            <Fab aria-label="add"/>
        </div>
    )
}

export default DiscussionPage
