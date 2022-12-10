import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;

  width: 750px;
  max-width: 1140px;
`;

export const SideMenu = styled.ul`
  margin: 10px 0;

  width: 180px;
  /* height: 390px; */

  h2 {
    padding: 5px;
    font-size: 1em;
    background: #294c71;
    color: #fff;
  }

  form {
    margin-top: 10px;

    input {
      font-size: 0.9em;
      background: #fff;
      border: 1px solid;
      padding: 3px;
      margin-top: 3px;

      &[type='submit'] {
        color: #fff;
        background-color: #b10333;
        border: 2px solid #870529;

        width: 80px;
      }
    }
  }
`;

export const PrimaryContent = styled.div`
  margin: 10px 15px;

  width: 270px;

  & > h3 {
    background: #b10333;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 5px;
    margin-top: 5px;

    width: 140px;
  }
`;

export const TidingsPrimary = styled.div`
  h2 {
    padding: 5px;
    font-size: 1em;
    background: #294c71;
    color: #fff;
  }

  img {
    width: 80px;
    position: absolute;
  }

  li {
    padding: 2px;
    &:hover {
      background: #eee;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
  }

  li a {
    h3 {
      font-size: 0.8em;
      color: #3e7ab9;
    }
    p {
      font-size: 0.7em;
    }
  }

  li a h3,
  p {
    padding-left: 90px;
  }
`;

export const SecundaryContent = styled.div`
  margin-top: 10px;

  width: 270px;

  h2 {
    padding: 5px;
    font-size: 1em;
    background: #294c71;
    color: #fff;
  }

  img {
    border: 3px solid #dfdfdf;

    width: 98%;
  }
`;

export const SecundaryTidings = styled.div`
  h2 {
    padding: 5px;
    font-size: 1em;
    background: #294c71;
    color: #fff;
  }

  img {
    width: 80px;
    position: absolute;
  }

  li {
    padding: 2px;
  }
  li:hover {
    background: #eee;
    cursor: pointer;
  }

  li a {
    text-decoration: none;
  }

  li a h3 {
    font-size: 0.8em;
    color: #3e7ab9;
  }

  li a p {
    font-size: 0.7em;
  }

  li a h3,
  p {
    padding-left: 90px;
  }
`;
