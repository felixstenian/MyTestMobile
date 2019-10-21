import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Left, Avatar, Info, Text, SubmitButton} from './styles';

import Background from '../../components/Background';

import {signOut} from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit() {
    dispatch(signOut());
  }
  return (
    <Background>
      <Container>
        <Left>
          <Avatar
            source={{uri: profile.avatar.url}}
            style={{width: 140, height: 140, borderRadius: 80}}
          />
          <Info>
            <Text>{profile.name}</Text>
            <Text>{profile.user_name}</Text>
            <Text>{profile.email}</Text>
          </Info>
        </Left>
      </Container>
      <SubmitButton onPress={handleSubmit}>Sair</SubmitButton>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
