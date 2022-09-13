import { Navbar } from '../Components/Navbar/Navbar.jsx';
import { Logo } from '../Components/Logo.jsx';
import { Button } from '../Components/Button/Button.jsx';
import LogoPath from "../logo.svg";

export default {
  title: 'Navbar',
  component: Navbar,
  subcomponent: { Logo },
}

const handleClick = () => {
  alert('Click happened');
};

const Template = (args) => (
  <Navbar {...args}>
    <Logo src={LogoPath} alt="app logo" size="small" />
    <h1>My App</h1>
    <Button size="small" variant="primary" label="Login" onClick={handleClick} />
  </Navbar>
)

export const Primary = Template.bind({});
Primary.args = {
  bg: 'primary', 
}

export const Light = Template.bind({});
Light.args = {
  bg: 'light', 
}

export const Dark = Template.bind({});
Dark.args = {
  bg: 'dark', 
}
