import React from "react";

import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

import BgImageTop from '../../assets/images/bg-top.svg';
import BgImageBottom from '../../assets/images/bg-bottom.svg';

import { Main } from "../../layout/main";
import { Image } from '../../components/Image';
import { Button } from "../../components/Button";

export function Login() {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory()

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/')
  }

  return (
    <Main className="login">
      <Image src={BgImageTop} alt="Background image Top" />

      <Button type="button" className="login" onClick={handleLogin}>Entrar com o Google</Button>
    
      <Image src={BgImageTop} alt="Background image Top" />
    </Main>
  )
}
