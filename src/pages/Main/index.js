import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import logo from '../../assets/logoTemp.png';

import Background from '../../components/Background';

import {Container, SubmitButton} from './styles';

export default function Main({navigation}) {
  const loading = useSelector(state => state.auth.loading);

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <SubmitButton
          loading={loading}
          onPress={() => navigation.navigate('SignIn')}>
          Login
        </SubmitButton>
        <SubmitButton
          loading={loading}
          onPress={() => navigation.navigate('SignUp')}>
          Cadastrar Conta
        </SubmitButton>
      </Container>
    </Background>
  );
}
