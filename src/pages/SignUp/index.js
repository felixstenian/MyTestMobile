import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../assets/logoTemp.png';

import Background from '../../components/Background';
import {signUpRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUn({navigation}) {
  const dispatch = useDispatch();

  const user_nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState();
  const [user_name, setUser_Name] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, user_name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => user_nameRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome de usuário"
            ref={user_nameRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={user_name}
            onChangeText={setUser_Name}
          />

          <FormInput
            icon="mail-outline"
            keyboardTypr="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
