import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Topo>
          <S.Logo />
          <S.DetalheTopo />
        </S.Topo>
        <S.Navegacao>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="brasil.html">Brasil</a>
            </li>
            <li>
              <a href="internacional.html">Internacional</a>
            </li>
            <li>
              <a href="economia.html">Economia</a>
            </li>
            <li>
              <a href="saude.html">Saúde</a>
            </li>
            <li>
              <a href="ciencia.html">Ciência</a>
            </li>
            <li>
              <a href="fotos.html">Fotos</a>
            </li>
          </ul>
        </S.Navegacao>
      </S.Container>
    </S.Wrapper>
  );
};
