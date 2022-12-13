import * as S from './styles';

import { Sidebar } from './Components/Sidebar';
import { Highlight } from './Components/Highlight';
import { Notice } from './Components/Notice';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Sidebar />
        <S.Content>
          <Highlight />
          <Notice />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
