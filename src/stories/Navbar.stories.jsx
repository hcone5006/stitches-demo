import { Navbar } from '../Components/Navbar/Navbar.jsx';
import { Logo } from '../Components/Logo.jsx';
import '../Pages/Home/Home.css';

export default {
  title: 'Navbar',
  component: Navbar,
  subcomponent: { Logo },
}

const handleClick = () => {
  alert('Click happened');
};

const Template = (args) => (
  <Navbar {...args} loginOnClick={handleClick} />
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
