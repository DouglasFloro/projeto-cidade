import { interviewList } from '../../mapped';
import { Interview } from '../Interview';
import { Section } from '../Section';
import * as S from './styles';
export const Sidebar: React.FC = () => {
  return (
    <S.Wrapper>
      <Section
        title="Entrevistas"
        content={
          <>
            {interviewList.map((value) => (
              <Interview name={value.name} />
            ))}
          </>
        }
      />
      <Section
        title="News"
        content={
          <form>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        }
      />
    </S.Wrapper>
  );
};
