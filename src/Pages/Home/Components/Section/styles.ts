import styled from 'styled-components';

export const Wrapper = styled.section`
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
    padding: 10px;

    width: 160px;
    height: 40px;

    background: #284c70;
    border-radius: 5px 20px 20px 5px;

    font-weight: 700;
    font-size: 1rem;
    line-height: 19px;

    color: #ffffff;
  }
  & > h3 {
    background: #de003e;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 5px;
    margin-top: 5px;

    width: 175px;
  }
  img {
    border: 3px solid #dfdfdf;

    width: 98%;
  }
`;
