import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  margin: 70px 10px 0;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const Info = styled.View`
  margin: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const SubmitButton = styled(Button)`
  align-self: center;
  width: 300px;
  margin-top: 20px;
  background: #f64c75;
`;
