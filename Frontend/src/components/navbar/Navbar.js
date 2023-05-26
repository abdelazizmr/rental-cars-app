import { Container } from "@chakra-ui/react";
import NavbarTogglerButton from "./navbar-toggler-button";
import NavbarLinks from "./NavbarLinks";
import { useLocation } from "react-router-dom"
import DashboardNav from "./DashboardNav";
import { Link } from "react-router-dom";


const Navbar = ({ children }) => {

  const location = useLocation();

  if (location.pathname.startsWith("/admin"))  
  return (
    <Container maxWidth="1720px" px={[12, 8, 8]}>
    <Link to="/" mt={5}>Go Back</Link>
    </Container>
  )


  if (location.pathname.startsWith("/dashboard")) return <DashboardNav />;
  

  return (

    <Container maxWidth="1720px" px={[12, 8, 8]}>
     
        <nav className="navbar navbar-expand-lg my-3">
          <NavbarTogglerButton />
          <NavbarLinks />
          {children}
        </nav>
          
    </Container>

  );
};

export default Navbar;
