import styled from 'styled-components/native';

export const UserInfoBox = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 10px;
`;

export const WelcomeText = styled.Text`
  color: #666666;
`;

export const UserName = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const Spacer = styled.View`
  flex: 1;
`;
