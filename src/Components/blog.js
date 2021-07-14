

import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch'

const Blog = ({blogs}) => {
    const { id } = useParams ()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }   

    return ( 
        <>
            <h1>Blog Item {id}</h1>
                <div>
                    {error && <span>{error}</span>}
                    {isPending && <div>Loading...</div>}
                    {blog && (
                        <article>
                            <h1>{blog.title}</h1>
                            <p>{ blog.body }</p>
                            <button onClick = {handleClick}>Delete</button>
                        </article>
                    )}
                </div>
        </>
     );
}
 
export default Blog;