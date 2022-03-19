import React from 'react'
import { CSSTransition } from 'react-transition-group'

const TagButton = ({text, isActive, tags}) => {

    const onClick = () => {
        let t = [];
        tags.get.forEach(element => {
            if (element.text === text){
                t.push({...element, isActive: !element.isActive});
            }else{
                t.push(element)
            }
        });
        tags.set(t);
    }

    return (
        <button 
            className={ isActive === true? "tagBtnSelected" : "tagBtn"}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default TagButton
