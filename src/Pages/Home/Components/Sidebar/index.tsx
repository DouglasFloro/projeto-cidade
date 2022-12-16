import { interviewList } from '../../mapped';
import { Interview } from '../Interview';
import { Article } from '../Article';
import * as S from './styles';
export const Sidebar: React.FC = () => {
  return (
    <S.Wrapper>
      <Article
        title="Entrevistas"
        content={
          <>
            {interviewList.map((value) => (
              <Interview key={value.name} name={value.name} />
            ))}
          </>
        }
      />
      <Article
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
