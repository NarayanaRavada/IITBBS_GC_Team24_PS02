import React, { useState } from 'react'
import SidebarLinks from './SidebarLinks'
import TagButton from './TagButton'

import '../CSS/Sidebar.css'

const Sidebar = () => {

    const [links, setLinks] = useState([
        {
            text: 'Test1',
            isActive: true
        },
        {
            text: 'Test2',
            isActive: false
        },
    ])

    const [tags, setTags] = useState([
        {
            text: 'Tag1',
            isActive: true
        },
        {
            text: 'Tag2',
            isActive: false
        },
        {
            text: 'Tag3',
            isActive: false
        },
        {
            text: 'Tag4',
            isActive: false
        },
    ])

    const linkComponents = []
    const tagComponents = []

    
    links.forEach(element => {
        linkComponents.push(<SidebarLinks text={element.text} isActive={element.isActive} links={{get: links, set: setLinks}}/>)
    });

    tags.forEach(element => {
        tagComponents.push(<TagButton text={element.text} isActive={element.isActive} tags={{get: tags, set: setTags}}/>)
    });

    return (
        <div className="sideBar" style={{position:"fixed"}}>
            <div>
                {linkComponents}
            </div>
            <div className="divider"></div>
            <div>
                <div className="tags">Tags :</div>
                <div className="tagButtonHolder">
                    {tagComponents}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
