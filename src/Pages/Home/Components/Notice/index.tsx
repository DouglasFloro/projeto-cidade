import * as S from './styles';
import { Article } from '../Article';
import { ContentNotice } from './Components/content-notice';
import { RecentNewsProps } from '../types';
export const Notice: React.FC<RecentNewsProps> = ({
  title,
  content,
}: RecentNewsProps) => {
  return (
    <Article
      title={title}
      content={
        <>
          {content.map((value) => (
            <ContentNotice
              key={value.id}
              image={value.image}
              category={value.category}
              description={value.description}
            />
          ))}
        </>
      }
    />
  );
};
