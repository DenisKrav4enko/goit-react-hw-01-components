import styled from 'styled-components';

export const Item = styled.li`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(29, 30, 31, .2);
  margin-top: 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #1d1e1f;
  margin-left: 10px;
`;