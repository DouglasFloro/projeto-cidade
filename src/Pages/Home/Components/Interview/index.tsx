import { Check } from 'phosphor-react';
import * as S from './styles';
type Props = {
  name: string;
};

/**
 * Item da lista de entrevista
 * @param name string
 */
export const Interview: React.FC<Props> = ({ name }: Props) => {
  return (
    <S.Wrapper>
      <a href="">
        <Check />
        {name}
      </a>
    </S.Wrapper>
  );
};
