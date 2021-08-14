import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Main } from "../../layout/main";
import { CardProfile } from "../../components/CardUser";
import { Button } from "../../components/Button";


export function User() {
  const { user } = useAuth();
  const history = useHistory();

  if (!user) {
    history.push('/login');
  }

  return (
    <Main className="user">
      <CardProfile>
        <div className="boxUser">
          <img src={user?.avatar} alt={user?.name} />
          <h1>{user?.name}</h1>
        </div>

        <div className="shoppingList">
          <ul>
            <li>Plano Professional (anual)</li>
          </ul>
        </div>

        <Button className="user">Acessar plano</Button>
      </CardProfile>
    </Main>
  )
}
