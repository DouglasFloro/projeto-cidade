import tecnologia from '../../assets/img/tecnologia.jpg';

/**
 * Lista de entrevista
 * @returns Array name:string
 */
export const interviewList: { name: string }[] = [
  {
    name: 'José Almeida',
  },

  {
    name: 'Felipe Silva',
  },

  {
    name: 'Renato Rodrigues',
  },

  {
    name: 'Aberlado Rodrigues',
  },

  {
    name: 'André Carlos',
  },

  {
    name: 'Marcia Mello',
  },

  {
    name: 'João Pedro',
  },

  {
    name: 'Carlos Almeida',
  },
];

export const highlights: {
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

export const contentList: { name: string; description: string }[] = [
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

export const lastInterview: {
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

export const recentNews: { subtitle: string; description: string }[] = [
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
