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

export default function NewAccount() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As senhas digitadas não correspondem!');
    } else {
      try {
        await api.post('auth/register', {
          name,
          email,
          password
        });
        toast.success('Conta criada com sucesso! Realize o login!');
        history.push('/');
      } catch (err) {
        if (err.response) toast.error(err.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <AppTitle>
          <h1>Nova conta</h1>
        </AppTitle>
        <Label>Nome</Label>
        <TextInput
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
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
        <Label>Confirmação de senha</Label>
        <TextInput
          type="password"
          placeholder="Digite sua confirmação de senha"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <LinkNewAccount>
          <Link to="/">Já tenho uma conta!</Link>
        </LinkNewAccount>
      </Form>
    </Container>
  );
}
