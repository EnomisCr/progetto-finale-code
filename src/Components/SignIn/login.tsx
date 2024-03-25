import Form from '../Form/form';
import Input from '../Input/input';
import {Button} from '../Button/button';

export const LoginForm = () => {
  return (
    <Form onSubmit={() => console.log("Form submitted")}>
      <Input name="email" type="email" label="Email" />
      <Input name="password" type="password" label="Password" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};