import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  AvatarInput,
} from './styles';

import Background from '../../components/Background';

import {updateProfileRequest} from '../../store/modules/user/actions';

export default function EditProfile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const user_nameRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [user_name, setUser_Name] = useState(profile.user_name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        user_name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Editar Perfil</Title>
        <AvatarInput name="avatar_id">
          <Image
            source={{uri: profile.avatar.url}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        </AvatarInput>

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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua nova senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Atualizar Perfil
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

EditProfile.navigationOptions = {
  tabBarLabel: 'Editar Perfil',
  tabBarIcon: ({tintColor}) => <Icon name="edit" size={20} color={tintColor} />,
};
