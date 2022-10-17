import { Link } from "react-router-dom";
import './Header.scss';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN';

    return (
        <div className='header-c'>
            <div className='container header'>
                <h1>{props.title}</h1>
                {isAdmin
                ? <Link className='btn' to='/'>Powrót</Link>
                : <Link className='btn' to='/admin'>Panel admina</Link>}
            </div>
        </div>
    )
}

export default Header;