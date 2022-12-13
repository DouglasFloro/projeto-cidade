import * as S from './styles';

type Props = {
  title: string;
  category?: string;
  content: React.ReactNode;
  children?: React.ReactNode;
};
/**
 * Seção com conteudos
 * @param title string
 * @param category? string
 * @param content React.ReactNode
 * @param? children React.ReactNode
 * @return
 */
export const Section: React.FC<Props> = ({
  title,
  category,
  content,
  children,
}: Props) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      {category && <h3>{category}</h3>}
      {content}
      {children && children}
    </S.Wrapper>
  );
};
