import { Navbar } from '../Components/Navbar/Navbar.jsx';

export default {
  title: 'Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  bg: 'primary',
}