import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    font-size: 0.9em;
    padding: 5px;
    line-height: 30px;
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #f3f3f3;

    & > svg {
      opacity: 0;
    }

    &:hover {
      color: #000;
      & > svg {
        opacity: 1;
        font-weight: bold;
      }
    }
  }
`;
