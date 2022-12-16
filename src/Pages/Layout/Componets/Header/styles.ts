import styled from 'styled-components';
import Fundo from '../../../../assets/img/fundo.png';
import LogoTopo from '../../../../assets/img/logo.png';
import DetalheTopo from '../../../../assets/img/detalhe-topo.png';

export const Wrapper = styled.header`
  background: url(${Fundo}) repeat-x;

  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;

  width: 750px;
  height: 225px;

  position: relative;
`;

export const Top = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  width: 750px;
`;

export const Logo = styled.div`
  background: url(${LogoTopo}) no-repeat;
  margin-top: 25px;

  width: 152px;
  height: 66px;
`;

export const DetailTop = styled.div`
  background: url(${DetalheTopo}) no-repeat;

  width: 166px;
  height: 175px;
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  top: 125px;
  li {
    background: #b10333;
    padding: 0.5em 1.3rem;

    a {
      font-size: 0.9rem;
      line-height: 2.1rem;
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #69001d;
      }
    }
  }
`;

export const Button = styled.div`
  width: auto;
  height: auto;

  position: absolute;
  right: 74px;
  bottom: 50px;
`;
