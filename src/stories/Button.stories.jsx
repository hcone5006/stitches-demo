import { Button } from "../Components/Button/Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success'],
      control: {type: 'select'}
    }
  }
}

const handleClick = () => {
  alert('Click happened');
};

 const Template = (args) => (
  <Button {...args} onClick={handleClick} />
 )

 export const Primary = Template.bind({});
 Primary.args = {
   size: 'large',
   variant: 'primary',
   label: 'Button'
 }

 export const Secondary = Template.bind({});
 Secondary.args = {
   size: 'large',
   variant: 'secondary',
   label: 'Button'
 }

 export const Tertiary = Template.bind({});
 Tertiary.args = {
   size: 'large',
   variant: 'tertiary',
   label: 'Button'
 }

 export const Small = Template.bind({});
 Small.args = {
   size: 'small',
   variant: 'primary',
   label: 'Button'
 }

 export const Large = Template.bind({});
 Large.args = {
   size: 'large',
   variant: 'primary',
   label: 'Button'
 }