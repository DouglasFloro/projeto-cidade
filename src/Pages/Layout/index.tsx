import { Header } from '../../Componets/Header';
import { Home } from '../Home';
import * as S from './styles';

export const Layout: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Home />
    </S.Wrapper>
  );
};
