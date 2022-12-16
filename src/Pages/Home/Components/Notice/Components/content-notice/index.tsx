import * as S from './styles';
type Props = {
  image?: string;
  category: string;
  description: string;
};

export const ContentNotice: React.FC<Props> = ({
  image,
  category,
  description,
}: Props) => {
  return (
    <S.Wrapper>
      <a href="">
        <img src={image} />
        <div>
          <span>{category}</span>

          <p>{description}</p>
        </div>
      </a>
    </S.Wrapper>
  );
};
