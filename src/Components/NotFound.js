import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className = 'notfound'>
            <h1>404</h1>
            <p>That page cannot be found</p>
            <Link to = '/'>Back home</Link>
        </div>
     );
}
 
export default NotFound;