import React, { useState } from 'react';

import {
  Container,
  Form,
  Label,
  TextInput,
  Button,
  AppTitle,
  LinkNewAccount
} from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post('auth/login', { email, password });
      localStorage.setItem('@bills/user', JSON.stringify(response.data));
      history.push('/home');
    } catch (err) {
      if (err.response) toast.error(err.response.data.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <AppTitle>
          <h1>
            Bem-vindo ao <br />
            <strong>Bills</strong>
          </h1>
        </AppTitle>
        <Label>E-mail</Label>
        <TextInput
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Label>Senha</Label>
        <TextInput
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <LinkNewAccount>
          <Link to="/new-account">Crie uma nova conta!</Link>
        </LinkNewAccount>
      </Form>
    </Container>
  );
}
