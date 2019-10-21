import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (!user.active) {
      Alert.alert('Erro no login', 'Usuário não foi ativado');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, user_name, email, password, avatar_id} = payload;

    Alert.alert(
      'Conta Cadastrada com sucesso!',
      'Acesse a caixa de entrada do seu email e abra o email de confirmação com o assunto "Confirmar Cadastro"',
    );

    yield call(api.post, 'users', {
      name,
      user_name,
      email,
      password,
      avatar_id,
    });
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
