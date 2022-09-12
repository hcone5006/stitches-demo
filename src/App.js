// import logo from './logo.svg';
import './App.css';
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Avatar } from "./Components/Avatar";
import { Navbar } from "./Components/Navbar";
import { Container } from "./Components/Container";
import { Paragraph } from "./Components/Paragraph";
import { Box } from "./Components/Box";

function App() {
  const handleClick = () => {
    alert('Click happened');
  };
  
  return (
    <>
      <Container>
        <Navbar bg="primary">
          <Paragraph size="lg">App-Demo</Paragraph>
          <Paragraph size="sm">LOGIN</Paragraph>
        </Navbar>
      </Container>

      <Container align="center">
        <Box border="solid">
          <Avatar
            align="center"
            size="lg"
            src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
          ></Avatar>
          <Paragraph size="lg" align="center">
            LOGIN HERE
          </Paragraph>
          <Input size="lg" placeholder="Email"/>
          <Input size="lg" placeholder="Password"/>
          <Button size="lg" bg="primary" onClick={handleClick}>
            Login
          </Button>
        </Box>
      </Container>

      <Container size="sm">
        <Box border="solid">
          <Paragraph size="sm" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus, orci sed faucibus luctus, nibh leo luctus quam, et pulvinar ex diam ac nisi. Vivamus quis interdum nisi. Ut posuere gravida turpis, a congue dui dictum in. Maecenas iaculis elit in enim rhoncus interdum. Fusce porttitor ornare tellus sed commodo. Aliquam erat volutpat. Phasellus elementum enim justo, quis maximus enim rutrum id. Sed tristique diam quis diam luctus, aliquam faucibus sapien accumsan. Nullam imperdiet nunc nulla, ac dapibus tellus mattis non. Cras quis enim massa. Vestibulum at tempus orci, non hendrerit turpis. Nulla metus sapien, suscipit vel metus eu, vulputate mollis dolor. Proin mauris lectus, pulvinar nec egestas id, auctor nec magna. Mauris sapien diam, pellentesque ut aliquet ac, hendrerit nec dolor. 
          </Paragraph>
          <Paragraph size="sm" align="right">
            In hac habitasse platea dictumst. Praesent et mollis turpis, in blandit nunc. Cras vulputate vulputate nulla, sit amet porttitor neque egestas non. Sed nec tellus aliquam, feugiat purus a, ornare lorem. Aliquam erat volutpat. Phasellus elementum enim justo, quis maximus enim rutrum id. Sed tristique diam quis diam luctus, aliquam faucibus sapien accumsan. Nullam imperdiet nunc nulla, ac dapibus tellus mattis non. Cras quis enim massa. Vestibulum at tempus orci, non hendrerit turpis. Nulla metus sapien, suscipit vel metus eu, vulputate mollis dolor. Proin mauris lectus, pulvinar nec egestas id, auctor nec magna. Mauris sapien diam, pellentesque ut aliquet ac, hendrerit nec dolor.
          </Paragraph>
        </Box>
      </Container>
    </>
  );
}

export default App;
