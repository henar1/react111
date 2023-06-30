import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    // making two variables totle and setTitle
    // using useState and initialState = empty
    const [title, setTtile] = useState("");
    // making two variables desc and setDesc
    const [desc, setDesc] = useState("");
    // submit method followed by arrow function
    const submit = (e) => {
        // e.preventDefault() this would prvent page htmlFor reloading
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }
        // props.addTodo will add the new Todo in the list
        else {
            addTodo(title, desc);
            setTtile("");
            setDesc("");
        }

    }
    return (
        <div classNameName="container my-3">
            {/* my-3 means marging y 3 */}
            <h3>Add a Todo</h3>
            {/* making {submit} method here htmlFor adding the todo in a todo list by cliking on Submit button */}
            <htmlForm onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label">Todo Title</label>
                    {/* Using onChange method after declaring value so that we can add any value tn the todo List. */}
                    {/* This OnChange method is followed by arrow function and pass an event and define setTitle including event's target value */}
                    <input type="text" value={title} onChange={(e) => { setTtile(e.target.value) }}
                        className="htmlForm-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="htmlForm-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }}
                        className="htmlForm-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                {/* btn-sm: it will reduce the size of Submit button
                            btn-success: It will turn the button green */}

            </htmlForm>

        </div>
    )
}

export default AddTodo
