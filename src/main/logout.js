import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginStatus } from "../redux/actions";

function Logout(){
    const data = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();
    const handleClick = () => {
      if (data) {
        localStorage.removeItem('isLogin');
        dispatch(setLoginStatus(false));
      }
    };
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav >
                <Link to='/' onClick={handleClick} className="nav-link">
                {(data)? 'Logout' : 'Login' }
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
}export default Logout;