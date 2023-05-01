import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, useNavigate } from "react-router-dom";
import LoginModal from './auth/LoginModal';

const Authenticated = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { user } = useSelector(
        (state) => state.auth
    )

    
    //logout 
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    let content
    if(user){
        content = (
            <li>
                <Link className="shopping-cart">{user.firstname} {user.lastname}</Link>
                <ul className="sub-menu">
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                </ul>
            </li>
        )
    } else {
        content = (
            <>
                <LoginModal isShow={false} />
            </>
        )
    }

    return content;
}

export default Authenticated