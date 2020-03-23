import React, { useState, useEffect } from 'react';

import { Container, NavBar, User, Item, AppTitle } from './styles';
import { Link, useHistory } from 'react-router-dom';

interface LoggedUser {
  user: {
    name?: string;
  };
}

export default function Header() {
  const history = useHistory();
  const active = history.location.pathname;
  const [loggedUser, setLoggedUser] = useState<LoggedUser>();

  useEffect(() => {
    let fromStorage = localStorage.getItem('@bills/user');
    if (fromStorage) {
      const loggedUser: LoggedUser = JSON.parse(fromStorage);
      setLoggedUser(loggedUser);
    }
  }, []);

  const handleLogout = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    localStorage.removeItem('@bills/user');
    history.push('/');
  };

  return (
    <Container>
      <AppTitle>Bills</AppTitle>
      <NavBar>
        <Link to="/home">
          <Item isActive={active === '/home'}>HOME</Item>
        </Link>
        <Link to="/record">
          <Item isActive={active === '/record'}>LANÇAMENTOS</Item>
        </Link>
      </NavBar>
      <User>
        <strong>{loggedUser?.user.name}</strong>
        <span onClick={handleLogout}>sair do sistema</span>
      </User>
    </Container>
  );
}
