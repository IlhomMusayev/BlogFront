import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
        
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            history.push('/')
        })
    }

    return ( 
        <>
            <h1>Create  new blogs</h1>
            <form onSubmit = {handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type = 'text'
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                ></input>

                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>    

                <label>Blog author:</label>
                <select
                     value = {author}
                     onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value = 'Ilhom'>Ilhom</option>    
                    <option value = 'Hasan'>Hasan</option>    
                </select>    

                <button type = 'submit'>
                    Add blog
                </button> 

                <p>{title} {body} {author}</p>
            </form>
        </>
     );
}
 
export default Create;