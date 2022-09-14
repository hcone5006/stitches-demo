// import logo from './logo.svg';
import "./Home.css";
import { Button } from "../../Components/Button/Button.jsx";
import { Input } from "../../Components/Input";
import { Avatar } from "../../Components/Avatar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container } from "../../Components/Container";
import { Paragraph } from "../../Components/Paragraph";
import { Box } from "../../Components/Box";
import { NavLink } from "react-router-dom";

function Home() {
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
        <Box border="solid" direction="col" space="small">
          <Avatar
            align="center"
            size="large"
            src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
          ></Avatar>
          <Paragraph size="large" align="center">
            LOGIN HERE
          </Paragraph>
          <Input size="large" placeholder="Email"/>
          <Input size="large" placeholder="Password"/>
          <Button size="large" variant="primary" label="Login" onClick={handleClick} />
        </Box>
      </Container>

      <Container size="small" spacing="large" css={{ paddingTop: 0 }}>
        <Box border="solid" direction="col" space="small">
          <Paragraph size="small" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus, orci sed faucibus luctus, nibh leo luctus quam, et pulvinar ex diam ac nisi. Vivamus quis interdum nisi. Ut posuere gravida turpis, a congue dui dictum in. Maecenas iaculis elit in enim rhoncus interdum. Fusce porttitor ornare tellus sed commodo. Aliquam erat volutpat. Phasellus elementum enim justo, quis maximus enim rutrum id. Sed tristique diam quis diam luctus, aliquam faucibus sapien accumsan. Nullam imperdiet nunc nulla, ac dapibus tellus mattis non. Cras quis enim massa. Vestibulum at tempus orci, non hendrerit turpis. Nulla metus sapien, suscipit vel metus eu, vulputate mollis dolor. Proin mauris lectus, pulvinar nec egestas id, auctor nec magna. Mauris sapien diam, pellentesque ut aliquet ac, hendrerit nec dolor. 
          </Paragraph>
          <Paragraph size="small" align="right">
            In hac habitasse platea dictumst. Praesent et mollis turpis, in blandit nunc. Cras vulputate vulputate nulla, sit amet porttitor neque egestas non. Sed nec tellus aliquam, feugiat purus a, ornare lorem. Aliquam erat volutpat. Phasellus elementum enim justo, quis maximus enim rutrum id. Sed tristique diam quis diam luctus, aliquam faucibus sapien accumsan. Nullam imperdiet nunc nulla, ac dapibus tellus mattis non. Cras quis enim massa. Vestibulum at tempus orci, non hendrerit turpis. Nulla metus sapien, suscipit vel metus eu, vulputate mollis dolor. Proin mauris lectus, pulvinar nec egestas id, auctor nec magna. Mauris sapien diam, pellentesque ut aliquet ac, hendrerit nec dolor.
          </Paragraph>
        </Box>
      </Container>
    </>
  );
}

export default Home;
