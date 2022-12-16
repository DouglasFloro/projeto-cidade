import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  & > a {
    display: flex;
    color: #4d4c4c;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    padding: 0 12px;

    span {
      font-size: 1rem;
      background: #de003e;
      color: #fff;
      border-radius: 20px;
      padding: 7px 10px;
    }

    p {
      font-size: 0.9rem;
    }
  }

  img {
    width: 50%;

    border-radius: 8px;
    border: 0px;
  }
`;
