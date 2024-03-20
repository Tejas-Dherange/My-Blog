import React from "react";
import LogoutBtn from "../Header/LogoutBtn"
import Logo from "../Logo"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../Container/Container"; 
const Header = () => {
  const authStatus = useSelector((state) => state.auth.Status);
  const navigate = useNavigate(); // Correct usage of useNavigate() hook
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/AllPost",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/AddPost",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" // Corrected class name
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
               <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
