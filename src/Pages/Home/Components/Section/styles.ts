import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  h2 {
    padding: 5px;
    font-size: 1em;
    background: #294c71;
    color: #fff;

    width: 100%;
  }
  & > h3 {
    background: #de003e;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 5px;
    margin-top: 5px;

    width: 175px;
  }
  img {
    border: 3px solid #dfdfdf;

    width: 98%;
  }
`;
