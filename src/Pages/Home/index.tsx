import * as S from './styles';

import { Sidebar } from './Components/Sidebar';
import { Highlight } from './Components/Highlight';
import { Notice } from './Components/Notice';
import taxi from '../../assets/img/taxi.jpg';
import { highlights } from './mapped';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Sidebar />
        <S.Content>
          {highlights.map((value) => {
            return (
              <Highlight
                title={value.title}
                category={value.category}
                image={value.image}
                description={value.description}
                link={value.link}
              />
            );
          })}
          <Notice />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
