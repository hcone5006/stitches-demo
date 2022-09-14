import "./ChartPage.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container } from "../../Components/Container";
// import { Button } from "../../Components/Button/Button.jsx";
// import { Box } from "../../Components/Box";

function ChartPage() {
  const handleClick = () => {
    alert('Click happened');
  };
  
  return (
    <>
      <Navbar bg="primary" loginOnClick={handleClick} />

      <Container align="center" spacing="large">

      </Container>
    </>
  );
}
export default ChartPage;