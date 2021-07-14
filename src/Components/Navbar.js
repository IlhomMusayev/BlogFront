import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
            <nav className = 'container navbar'>
                <div className = 'logo'>
                    <h1>Logo</h1>
                </div>
                <ul className = 'nav-lists'>
                    <li className = 'nav-list'>
                        <Link to = '/' className = 'nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-list'>
                        <Link to = '/create' className = 'nav-link'>
                            New Blog
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
     );
}
 
export default Navbar;