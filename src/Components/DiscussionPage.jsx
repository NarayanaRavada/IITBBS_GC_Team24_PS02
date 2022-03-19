
import React from 'react'
import Disscussion from '../Discussion'
import AddButton from './AddButton'

import '../CSS/DiscussionPage.css'

const DiscussionPage = () => {


    return (
        <div className="discussionContainer" >
            <Disscussion />
            <Disscussion />
            <Disscussion />
            <Disscussion />

            <AddButton />

        </div>
    )
}

export default DiscussionPage
