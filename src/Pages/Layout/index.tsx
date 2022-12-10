import { Header } from '../Layout/Componets/Header';
import { Home } from '../Home';
import * as S from './styles';
import { Rodape } from './Componets/Rodape';

export const Layout: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Home />
      <Rodape />
    </S.Wrapper>
  );
};
