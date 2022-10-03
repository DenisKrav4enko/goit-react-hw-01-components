import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 250px;
  height: 123px;
  border-radius: 3px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 0 8px 0 rgba(29, 30, 31, .2);
  margin-top: 14px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: #1d1e1f;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatList = styled.ul`
  width: 100%;
  height: 58px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 0;
  border-radius:  0 0 3px 3px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 14px;
  
  &:first-child {
    border-radius: 0 0 0 3px;
  }
  
  &:last-child {
    border-radius: 0 0 3px 0;
  }
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
`;