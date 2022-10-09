import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  border-radius: 10%;
  cursor: pointer;

  :hover {
    background-color: #0e1df0;
    color: #fff;
  }
`;
