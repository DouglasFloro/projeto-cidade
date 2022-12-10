import * as S from './styles';

import { Sidebar } from './Components/Sidebar';
import { Content } from './Components/Content';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Sidebar />
        <Content />
      </S.Container>
    </S.Wrapper>
  );
};
