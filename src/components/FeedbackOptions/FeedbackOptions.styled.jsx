import styled from 'styled-components';

export const FeedbackOptionsBlock = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackOptionsBtn = styled.button`
  font-size: 20px;
  width: 20%;
  border-radius: 5px;
  :hover {
    box-shadow: 0 0 10px
      ${props => {
        switch (props.children) {
          case 'good':
            return 'green';
          case 'neutral':
            return 'yellow';
          default:
            return 'red';
        }
      }};
  }
`;
