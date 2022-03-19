import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import '../CSS/AddDiscussionPage.css'
import TagButton from './TagButton'

const AddDiscussionPage = () => {

    const navigate = useNavigate()

    const [tags, setTags] = useState([
        {
            text: 'Tag1',
            isActive: false
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

    useEffect(() => {
        let t=[];
        tags.forEach(element => {
            if (element.isActive === true){
                t.push(element.text)
            }
        });

        setFormDetails({...formDetails, tags: t})
    }, [tags])

    const [formDetails, setFormDetails] = useState({title: "", description: "", tags: []})

    const tagComponents = []

    tags.forEach(element => {
        tagComponents.push(<TagButton text={element.text} isActive={element.isActive} tags={{get: tags, set: setTags}}/>)
    });

    const onSubmit = e => {
        e.preventDefault()

        console.log(formDetails.tags);
    }

    const onCancel = () => {
        navigate("/")
    }

    return (
        <div className="addDiscussionContainer">
            <form className="addDiscussionForm" onSubmit={onSubmit}>
                <h1>Create a new discussion</h1>
                <label htmlFor="title">Title</label>
                <textarea name="title" cols="30" rows="2" value={formDetails.title} onChange={e=>setFormDetails({...formDetails, title: e.target.value})}></textarea>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" value={formDetails.description} onChange={e=>setFormDetails({...formDetails, description: e.target.value})}></textarea>
                <label >Tags:</label>
                <div className="formTagButtonHolder">
                    {tagComponents}
                </div>
                <div className="formBtnHolder">
                    <button className="formBtn cancel" type="button" onClick={onCancel}>Cancel</button>
                    <button className="formBtn submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddDiscussionPage
