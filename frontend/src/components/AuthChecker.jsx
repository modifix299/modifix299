import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';
import AuthCheckLoginModal from "./auth/AuthCheckLoginModal";

const AuthChecker = () => {
    const { user } = useSelector((state) => state.auth);


    let content
    if(user){
        content = (
            <Outlet/>
        )
    } else {
        content = (
            <AuthCheckLoginModal isShow={true}/>
        )
    }

  return content;
}

export default AuthChecker