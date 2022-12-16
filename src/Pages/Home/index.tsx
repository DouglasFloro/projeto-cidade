import * as S from './styles';

import { Sidebar } from './Components/Sidebar';
import { Highlight } from './Components/Highlight';
import { Notice } from './Components/Notice';
import taxi from '../../assets/img/taxi.jpg';
import { highlights, recentNews } from './mapped';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Sidebar />
        <S.Content>
          {highlights.map((value) => {
            return (
              <Highlight
                key={value.id}
                title={value.title}
                category={value.category}
                image={value.image}
                description={value.description}
                link={value.link}
              />
            );
          })}

          {recentNews.map((value) => {
            return (
              <Notice
                key={value.id}
                title={value.title}
                content={value.content}
              />
            );
          })}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
