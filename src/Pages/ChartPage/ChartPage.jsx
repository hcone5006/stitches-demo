import "./ChartPage.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container } from "../../Components/Container";
import { NavLink } from "react-router-dom";
// import { Button } from "../../Components/Button/Button.jsx";
// import { Box } from "../../Components/Box";

function ChartPage() {
  const handleClick = () => {
    alert('Click happened');
  };
  
  return (
    <>
      <Navbar bg="primary" loginOnClick={handleClick}>
        <nav>
          <NavLink to="/" className="nav-links">Home</NavLink>
          <NavLink to="chart" className="nav-links">Chart</NavLink>
        </nav>
      </Navbar>

      <Container align="center" spacing="large">

      </Container>
    </>
  );
}
export default ChartPage;