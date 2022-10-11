import {Link} from "react-router-dom";
import './Header.scss'

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN'


    return (
        <div className={'header-c'}>
            <div className={'header container'}>
                <h1>{props.title}</h1>
                {isAdmin
                    ? <Link className={'btn'} to={'/'}> Back </Link>
                    : <Link className={'btn'} to={'/admin'}> Admin Panel </Link>}
            </div>
        </div>
    )
}

export default Header;