import * as S from './styles';
import taxi from '../../assets/img/taxi.jpg';
import doutor from '../../assets/img/doutor.jpg';
import tecnologia from '../../assets/img/tecnologia.jpg';
import cidade from '../../assets/img/cidade.jpg';
import { Interview } from './Components/Interview';
import { interviewList } from './mapped';
import { Section } from './Components/Section';

export const Home: React.FC = () => {
  // React.ReactNode

  // const list: { image: React.ReactNode; title: string; description: string }[] = [
  //   {
  //     image: tecnologia,
  //     title: ' huheuhau',
  //     description: 'aeuhahua',
  //   },
  // ];

  const highlights: {
    title: string;
    subtitle: string;
    description: string;
    name: string;
  }[] = [
    {
      title: 'Destaques',
      subtitle: 'Nova Legislação',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
      name: 'Leia mais',
    },
  ];

  const contentList: { name: string; description: string }[] = [
    {
      name: 'Tecnologia',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettin',
    },
    {
      name: 'Tecnologia',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettin',
    },
    {
      name: 'Tecnologia',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettin',
    },
    {
      name: 'Tecnologia',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettin',
    },
  ];

  const lastInterview: {
    title: string;
    subtitle: string;
    image: React.ReactNode;
    text: string;
    link: string;
  }[] = [
    {
      title: 'Notícias Recentes',
      subtitle: 'Novas Tecnologias',
      image: tecnologia,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
      link: 'Leia mais',
    },
  ];

  const recentNews: { subtitle: string; description: string }[] = [
    {
      subtitle: 'Novas Tecnologias',
      description: 'Loren Ipsum is simply dummy text of the printing...',
    },
    {
      subtitle: 'Novas Tecnologias',
      description: 'Loren Ipsum is simply dummy text of the printing...',
    },
    {
      subtitle: 'Novas Tecnologias',
      description: 'Loren Ipsum is simply dummy text of the printing...',
    },
    {
      subtitle: 'Novas Tecnologias',
      description: 'Loren Ipsum is simply dummy text of the printing...',
    },
  ];

  return (
    <>
      <>
        <S.Wrapper>
          <S.Container>
            <S.SideMenu>
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
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                    />
                    <input type="submit" value="Cadastrar" />
                  </form>
                }
              />
            </S.SideMenu>
            <S.Content>
              <Section
                title="Destaques"
                content={
                  <>
                    {highlights.map((value) => (
                      <>
                        <h3>{value.subtitle}</h3>
                        <img src={taxi} />
                        <p>{value.description}</p>
                        <a href="">{value.name}</a>
                      </>
                    ))}
                  </>
                }
              />

              <S.TidingsPrimary>
                <h2>Mundo</h2>
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
              </S.TidingsPrimary>

              <S.SecundaryContent>
                {lastInterview.map((value) => (
                  <>
                    <h2>{value.title}</h2>
                    <h3>{value.subtitle}</h3>
                    <img src={doutor} />
                    <p>{value.text}</p>
                    <a href="">{value.link}</a>
                  </>
                ))}

                <S.SecundaryTidings>
                  <h2>Noticias Recentes</h2>

                  {recentNews.map((value) => (
                    <ul>
                      <li>
                        <a href="">
                          <img src={cidade} />
                          <h3>{value.subtitle}</h3>
                          <p>{value.description}</p>
                        </a>
                      </li>
                    </ul>
                  ))}
                </S.SecundaryTidings>
              </S.SecundaryContent>
            </S.Content>
          </S.Container>
        </S.Wrapper>
      </>
    </>
  );
};
