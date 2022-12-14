import * as S from './styles';
import tecnologia from '../../../../assets/img/tecnologia.jpg';
import cidade from '../../../../assets/img/cidade.jpg';
import { Article } from '../Article';
import { recentNews } from '../../mapped';

export const Notice: React.FC = () => {
  return (
    <>
      <Article
        title="Notícias Recentes"
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
      <Article
        title="Notícias Recentes"
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
    </>
  );
};
