import * as S from './styles';

type Props = {
  image?: string;
  description: string;
  link: string;
};

export const ContentHighlight: React.FC<Props> = ({
  image,
  description,
  link,
}: Props) => {
  return (
    <S.Wrapper>
      <img src={image} />
      <p>{description}</p>
      <a href={link}>Leia Mais</a>
    </S.Wrapper>
  );
};
