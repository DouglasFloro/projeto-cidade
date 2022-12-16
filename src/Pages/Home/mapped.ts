import doutor from '../../assets/img/doutor.jpg';
import taxi from '../../assets/img/taxi.jpg';
import cidade from '../../assets/img/cidade.jpg';
import { RecentNewsProps } from './Components/types';

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
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}[] = [
  {
    id: 0,
    title: 'Taxistas',
    category: 'Nova Legislação',
    image: taxi,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    link: 'noticiacidade.com/taxi',
  },

  {
    id: 1,
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
 * @param title string
 * @param content { image: string; category: string; description: string }
 * @return
 */
export const recentNews: RecentNewsProps[] = [
  {
    title: 'Noticias Recentes',
    id: 0,
    content: [
      {
        id: 0,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
      {
        id: 1,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
      {
        id: 2,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
      {
        id: 3,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
    ],
  },
  {
    title: 'Taxistas',
    id: 1,
    content: [
      {
        id: 0,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
      {
        id: 1,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },

      {
        id: 2,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
      {
        id: 3,
        image: cidade,
        category: 'Novas Tecnologias',
        description:
          'Loren Ipsum is simply dummy text of the printing Loren Ipsum is simply dummy text of the printingLoren Ipsum is simply.',
      },
    ],
  },
];
