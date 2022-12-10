import {
  contentList,
  highlights,
  lastInterview,
  recentNews,
} from '../../mapped';

import taxi from '../../../../assets/img/taxi.jpg';
import doutor from '../../../../assets/img/doutor.jpg';
import tecnologia from '../../../../assets/img/tecnologia.jpg';
import cidade from '../../../../assets/img/cidade.jpg';
import { Section } from '../Section';
import * as S from './styles';

export const Content: React.FC = () => {
  return (
    <S.Wrapper>
      <Section
        title="Destaques"
        content={
          <>
            {highlights.map((value) => (
              <>
                {/* <Highlit img={} text={} to={} /> */}
                <img src={taxi} />
                <p>{value.description}</p>
                <a href="">{value.name}</a>
              </>
            ))}
          </>
        }
      />

      <Section
        title="Mundo"
        content={
          <>
            {contentList.map((value) => (
              <ul>
                <li>
                  <a href="">
                    <img src={tecnologia} />
                    <h3>{value.name}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              </ul>
            ))}
          </>
        }
      />

      <Section
        title="Notícias Recentes"
        category="Novas Tecnologias"
        content={
          <>
            {lastInterview.map((value) => (
              <>
                <img src={doutor} />
                <p>{value.text}</p>
                <a href="">{value.link}</a>
              </>
            ))}
          </>
        }
      />

      <Section
        title="Notícias Recentes"
        category="Novas Tecnologias"
        content={
          <>
            {recentNews.map((value) => (
              <ul>
                <li>
                  <a href="">
                    <img src={cidade} />
                    <p>{value.description}</p>
                  </a>
                </li>
              </ul>
            ))}{' '}
          </>
        }
      />
    </S.Wrapper>
  );
};
