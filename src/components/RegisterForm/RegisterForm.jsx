import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {Form, Label,Input, Button} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
   
     if (
       form.elements.name.value.trim() === '' ||
       form.elements.email.value.trim() === '' ||
       form.elements.password.value.trim() === ''
     ) {
       return alert(`Input all fields is required`);
     }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <Input type="text" name="name" />
      </Label>
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label >
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
