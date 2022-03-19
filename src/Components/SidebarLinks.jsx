import React from 'react'

const SidebarLinks = ({text, isActive, links}) => {

    const onClick = () => {
        let t = [];
        links.get.forEach(element => {
            if (element.text === text){
                t.push({...element, isActive: true})
            }else{
                t.push({...element, isActive: false})
            }
        });
        links.set(t);
    }

    return (
        <div 
            className={isActive === true? "sideBarLinkSelected" : "sideBarLink"} 
            onClick={onClick}
        >
            {text}
        </div>
    )
} 

export default SidebarLinks
