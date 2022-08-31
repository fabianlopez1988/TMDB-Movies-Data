// import React from "react";
import styles from "./NavBar.module.css";
import LogoRed from "../images/LogoViolet.png";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { userLogout } from "../store/user";
import { useDispatch } from "react-redux";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     dispatch(userLogout())
//       .then(() => {
//         localStorage.removeItem("user");
//       })
//       .then(() => navigate("/"));
//   };

//   return (
//     <div className="navbar" id={styles.navbar}>
//       <div className="navbar-container">
//         <div className={styles.navbarLogo}>
//           <img
//             src={LogoRed}
//             alt="logo"
//             id={styles.logo}
//             onClick={() => navigate("/")}
//           />
//           {user ? (

//             <Link style={{color: '#FFF'}} to={`/favorites/${user?.id}`}><span className={styles.span}>My List </span></Link>

//           ): null}
//         </div>
//       </div>
//       {user ? (
//         <div className={styles.right} onClick={handleLogout}>
//           <FiLogOut />
//           Logout
//           <span></span>
//         </div>
//       ) : (
//         <div className={styles.right} onClick={() => navigate("/login")}>
//           <FiLogIn />
//           Login
//           <span></span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
    dispatch(userLogout())
      .then(() => {
        localStorage.removeItem("user");
      })
      .then(() => navigate("/"));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <div className={styles.navbarLogo}>
            <img
              src={LogoRed}
              alt="logo"
              id={styles.logo}
              onClick={() => navigate("/")}
            />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <Nav.Link
                as={Link}
                style={{ color: "#000" }}
                to={`/favorites/${user?.id}`}
              >
                <span>My Favorites </span>
              </Nav.Link>
            ) : null}
          </Nav>
          <Nav className="navbar-text"> 
          {/* navbar-text = alinea a la derecha */}
            {user ? (
              <div className={styles.right} onClick={handleLogout}>
                <FiLogOut />
                Logout
                <span></span>
              </div>
            ) : (
              <div className={styles.right} onClick={() => navigate("/login")}>
                <FiLogIn />
                Login
                <span></span>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
