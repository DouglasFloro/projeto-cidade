import styled from 'styled-components';
import fundo from '../../img/fundo.png';
import detalhetopo from '../../img/detalhe-topo.png';
import logo from '../../img/logo.png';

export const Wrapper = styled.header`
  width: 100%;
  zoom: 1.3;

  background: url(${fundo}) repeat-x;
`;

export const Container = styled.div`
  margin: 0 auto;

  width: 750px;
  height: 225px;
`;

export const Topo = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  width: 750px;
`;

export const Logo = styled.div`
  background: url(${logo}) no-repeat;
  margin-top: 25px;

  width: 152px;
  height: 66px;
`;

export const DetalheTopo = styled.div`
  background: url(${detalhetopo}) no-repeat;

  width: 166px;
  height: 175px;
`;

export const Navegacao = styled.div`
  ul {
    display: flex;
    margin-top: -50px;
    list-style: none;
  }
  ul li {
    background: #b10333;
    padding: 0.5em 1.3em;
  }

  ul a {
    font-size: 0.9em;
    line-height: 2.1em;
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #69001d;
  }
`;
