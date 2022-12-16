import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  gap: 15px;

  width: 100%;

  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    height: 40px;

    background: #284c70;
    border-radius: 5px 20px;

    font-weight: 700;
    font-size: 1rem;
    line-height: 19px;

    color: #ffffff;
  }
  & > h3 {
    background: #de003e;
    color: #fff;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 10px;
    margin-top: 5px;
  }
`;
