import styled from 'styled-components';

import BoxTop from '@/assets/images/general/box-top.gif';
import BoxBottom from '@/assets/images/general/box-bottom.gif';

import Chain from '@/assets/images/borders/chain.gif';
import LoginBoxBackground from '@/assets/images/loginbox/loginbox-background.gif';
import { FondamentoTitle } from '../shared/Typography';

export const BoxPlayWrapper = styled.div`
  display: grid;
  grid-template-rows: 12px max-content 12px;
`;

type BoxPlayBorderProps = {
  bottom?: boolean;
};

export const BoxPlayBorder = styled.div<BoxPlayBorderProps>`
  background-image: ${({ bottom }) =>
    `url(${bottom ? BoxBottom.src : BoxTop.src})`};
`;

export const BoxPlayContent = styled.div`
  height: max-content;
  background-image: ${`url(${LoginBoxBackground.src})`};
  background-repeat: repeat;
  margin: 0 5px 0;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

interface BoxPlayContentBorderProps {
  right?: boolean;
}

export const BoxPlayContentBorder = styled.div<BoxPlayContentBorderProps>`
  background: ${`url(${Chain.src})`};
  width: 7px;
  position: absolute;
  height: 100%;
  right: ${({ right }) => (right ? 0 : null)};
  left: ${({ right }) => (!right ? 0 : null)};
  background-repeat: repeat-y;
`;

export const BoxPlayContentText = styled(FondamentoTitle)`
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  user-select: none;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  cursor: pointer;

  transition: all 30ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;
