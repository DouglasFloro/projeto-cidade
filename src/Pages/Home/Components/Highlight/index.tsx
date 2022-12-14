import { Article } from '../Article';
import { ContentHighlight } from './Components/content-highlight';

type Props = {
  title: string;
  category: string;
  image?: string;
  description: string;
  link: string;
};

/** Conteudo Principal
 * @param title string
 * @param category string
 * @param image string
 * @param description string
 * @param link string
 * @returns
 */

export const Highlight: React.FC<Props> = ({
  title,
  category,
  image,
  description,
  link,
}: Props) => {
  return (
    <Article
      title={title}
      category={category}
      content={
        <ContentHighlight image={image} description={description} link={link} />
      }
    />
  );
};
