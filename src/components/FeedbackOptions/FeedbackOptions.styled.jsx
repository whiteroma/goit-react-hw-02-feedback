import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
padding: 5px;
font-size: 16px;
  border-radius: 10%;
    border-style:none;
  cursor: pointer;
    color: #0400ff;
    font-weight: bold;

  :hover {
    /* background-color: #0e1df0; */
    box-shadow: 0px 0px 4px 3px ${p => p.hoverColor}
  }
`;
