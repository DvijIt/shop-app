import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label``;

const EmailInput = styled.input``;

const PasswordInput = styled.input``;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const postData = { email, password };

    try {
      const response = await axios.post(`${process.env.SERVER_URL}/auth/login`, postData);

      console.log(response);

      return response;
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <PageWrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <InputLabel>Email</InputLabel>
        <EmailInput
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <InputLabel>Password</InputLabel>
        <PasswordInput
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Sign In</button>
      </Form>
    </PageWrapper>
  );
}

export default Login;
