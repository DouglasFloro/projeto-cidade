import { highlights } from '../../mapped';
import taxi from '../../../../assets/img/taxi.jpg';
import doutor from '../../../../assets/img/doutor.jpg';
import { Section } from '../Section';
import * as S from './styles';

export const Highlight: React.FC = () => {
  return (
    <S.Wrapper>
      <Section
        title="Os Taxistas"
        category="Nova Legislação"
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
        title="Dia do Médido"
        category="Entrevista Com Gabas"
        content={
          <>
            {highlights.map((value) => (
              <>
                {/* <Highlit img={} text={} to={} /> */}
                <img src={doutor} />
                <p>{value.description}</p>
                <a href="">{value.name}</a>
              </>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
