import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './auth/LoginModal';

const Authenticated = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [onlineStatus, setOnlineStatus] = useState(true); // Default online status is set to true
  
  const { user } = useSelector((state) => state.auth);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  let content;
  if (user) {
    content = (
      <li>
        <Link className="shopping-cart customer">
          <div className={`profile-icon ${onlineStatus ? 'online' : 'offline'}`}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span className="customer-name"></span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </li>
    );
  } else {
    content = (
      <>
        <LoginModal isShow={false} />
      </>
    );
  }

  return content;
};

export default Authenticated;
