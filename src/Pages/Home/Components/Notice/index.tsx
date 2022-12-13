import * as S from './styles';
import tecnologia from '../../../../assets/img/tecnologia.jpg';
import cidade from '../../../../assets/img/cidade.jpg';
import { Section } from '../Section';
import { recentNews } from '../../mapped';

export const Notice: React.FC = () => {
  return (
    <S.Wrapper>
      <Section
        title="Notícias Recentes"
        category="Novas Tecnologias"
        content={
          <>
            {recentNews.map((value) => (
              <a href="">
                <img src={tecnologia} />
                <h3>{value.category}</h3>
                <p>{value.description}</p>
              </a>
            ))}{' '}
          </>
        }
      />

      <Section
        title="Notícias Recentes"
        category="Novas Tecnologias"
        content={
          <>
            {recentNews.map((value) => (
              <a href="">
                <img src={cidade} />
                <h3>{value.category}</h3>

                <p>{value.description}</p>
              </a>
            ))}{' '}
          </>
        }
      />
    </S.Wrapper>
  );
};
