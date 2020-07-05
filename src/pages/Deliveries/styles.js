import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 14px;
  background-color: #fff;
`;

export const UserInfoBox = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
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

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 0px;
`;

export const Title = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 22px;
`;

export const FilterText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 0px 0px 0px 10px;
  color: ${(props) => (props.selected ? '#7D40E7' : '#999999')};

  ${(props) =>
    props.selected &&
    css`
      text-decoration: underline;
    `}
`;

export const DeliveryCard = styled.View`
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2;
  overflow: hidden;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const DeliveryName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const CardContent = styled.View`
  padding: 16px 10px;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  min-height: 75px;
`;

export const CardFooter = styled.View`
  background-color: #f8f9fd;
  padding: 18px;
  flex-direction: row;
`;

export const FooterBlock = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BlockLabel = styled.Text`
  font-size: 10px;
  color: #999999;
`;

export const BlockValue = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;

export const FooterLink = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  text-align: right;
`;

export const Timeline = styled.View`
  width: 70%;
  height: 2px;
  background-color: #7d40e7;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TimelinePoint = styled.View`
  background-color: #fff;
  border: 2px solid #7d40e7;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-top: -4px;
  overflow: visible;
  position: relative;
`;

export const TimelineText = styled.Text`
  height: 40px;
  position: absolute;
  top: 10px;
  text-align: center;
  width: 100px;
  left: -50px;
  text-align-vertical: center;
  font-size: 12px;
  color: #999999;
`;
