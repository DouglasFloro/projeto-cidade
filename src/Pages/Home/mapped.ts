import doutor from '../../assets/img/doutor.jpg';
import taxi from '../../assets/img/taxi.jpg';

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
  image: string;
  description: string;
  link: string;
}[] = [
  {
    title: 'Taxistas',
    category: 'Nova Legislação',
    image: taxi,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    link: 'noticiacidade.com/taxi',
  },

  {
    title: 'Os Médicos',
    category: 'Entrevista com Dr Gabas',
    image: doutor,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    link: 'noticiacidade.com/doutor',
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
