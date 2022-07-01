import Link from 'next/link';
import { FC } from 'react';
import * as S from './styles';
import Artwork from '@/assets/images/general/tibia-logo-artwork.gif';
import { otConfigs } from '@/misior';
import Image from 'next/image';

interface BoxPlayProps {
  showLogo?: boolean;
}

export const BoxPlay: FC<BoxPlayProps> = ({ children, showLogo }) => {
  return (
    <S.BoxPlayWrapper>
      {showLogo && (
        <Link href="/">
          <S.LogoArtworkWrapper>
            <Image src={Artwork} alt={`logo ${otConfigs.server.worldName}`} />
          </S.LogoArtworkWrapper>
        </Link>
      )}
      <S.BoxPlayBorder />
      <S.BoxPlayContent>
        <S.BoxPlayContentBorder />
        {children}
        <S.BoxPlayContentBorder right />
      </S.BoxPlayContent>
      <S.BoxPlayBorder bottom />
    </S.BoxPlayWrapper>
  );
};

export default BoxPlay;
