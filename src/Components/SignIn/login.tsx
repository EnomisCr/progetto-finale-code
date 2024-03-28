import Form from '../Form/form';
import Input from '../Input/input';
import { Button } from '../Button/button';
import './login.css';
import { LoginButton } from 'Components/LoginButton/LoginButton';

export const LoginForm = () => {
  return (


      <div className="loginCard">
        <Form onSubmit={() => console.log("Form submitted")}>
          <Input name="email" type="email" label="Email:" />
          <Input name="password" type="password" label="Password:" />
          <LoginButton type="submit">Submit</LoginButton>
        </Form>
      </div>
 

  );
};