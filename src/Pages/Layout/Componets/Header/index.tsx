import { useState } from 'react';
import { SwitchButton } from './Components/switch-button';
import * as S from './styles';

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const navList: { href: string; name: string }[] = [
    {
      href: 'home.html',
      name: 'Home',
    },

    {
      href: 'brasil.html',
      name: 'Brasil',
    },

    {
      href: 'internacional.html',
      name: 'Internacional',
    },

    {
      href: 'economia.html',
      name: 'Economia',
    },

    {
      href: 'saude.html',
      name: 'Saúde',
    },

    {
      href: 'ciencia.html',
      name: 'Ciência',
    },

    {
      href: 'fotos.html',
      name: 'Fotos',
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Top>
          <S.Logo />
          <S.DetailTop />
        </S.Top>
        <S.Navigation>
          {navList.map((value) => (
            <li key={value.href}>
              <a href={value.href}>{value.name}</a>
            </li>
          ))}
        </S.Navigation>
        <S.Button>
          <SwitchButton
            variant="horizontal"
            isActive={isActive}
            onClick={() => setIsActive((value) => !value)}
          />
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
};
