import "./ChartPage.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container } from "../../Components/Container";
import { NavLink } from "react-router-dom";
import AreaChart from "../../Components/Charts/AreaChart.jsx";
// import { Button } from "../../Components/Button/Button.jsx";
// import { Box } from "../../Components/Box";

function ChartPage() {
  const handleClick = () => {
    alert('Click happened');
  };
  
  return (
    <>
      <Navbar 
      bg="primary" 
      // loginclick={handleClick}
      >
        <nav>
          <NavLink to="/" className="nav-links">Home</NavLink>
          <NavLink to="chart" className="nav-links">Chart</NavLink>
        </nav>
      </Navbar>

      <Container align="center" spacing="large">
        <h1>Charts</h1>
        <AreaChart width={400} height={300} />
      </Container>
    </>
  );
}
export default ChartPage;