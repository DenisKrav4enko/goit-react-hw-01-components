import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  max-width: 250px;
  width: 100%;
  max-height: 330px;
  height: 100%;
  border-radius: 3px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 8px 0 rgba(29, 30, 31, .2);
`;

export const Description = styled.div`
  height: 196px;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #82909E;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #1d1e1f;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #82909E;
  margin-top: 13px;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #82909E;
  margin-top: 13px;
`;

export const Stats = styled.ul`
  width: 100%;
  height: 74px;
  background-color: #F3F6F9;
  border-radius: 0 0 3px 3px;
  list-style-type: none;
  border-top: 1px solid #E4E9F0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  padding-inline-start: 0;
  margin-block-end: 0;
  margin-block-start: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:first-child {
    border-right: 1px solid #E4E9F0;
  }
  
  &:last-child {
    border-left: 1px solid #E4E9F0;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #768696;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #1d1e1f;
`;