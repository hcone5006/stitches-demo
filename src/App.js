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
          <Button size="lg" bg="primary">
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
