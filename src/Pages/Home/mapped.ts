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

/**
 * Conteudo Principal
 * @param title string
 * @param category string
 * @param description string
 * @param name string
 * @return
 */
export const highlights: {
  title: string;
  category: string;
  description: string;
  name: string;
}[] = [
  {
    title: 'Destaques',
    category: 'Nova Legislação',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    name: 'Leia mais',
  },
];

/**
 * Noticias Recentes
 * @param category string
 * @param description string
 * @return
 */
export const recentNews: { category: string; description: string }[] = [
  {
    category: 'Novas Tecnologias ',
    description: 'Loren Ipsum is simply dummy text of the printing...',
  },
  {
    category: 'Novas Tecnologias',
    description: 'Loren Ipsum is simply dummy text of the printing...',
  },
  {
    category: 'Novas Tecnologias',
    description: 'Loren Ipsum is simply dummy text of the printing...',
  },
  {
    category: 'Novas Tecnologias',
    description: 'Loren Ipsum is simply dummy text of the printing...',
  },
];
