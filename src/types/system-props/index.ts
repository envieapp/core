import { CSSObject } from '@emotion/react';

export type SystemProps = {
  m?: CSSObject['margin']
  my?: CSSObject['margin']
  mx?: CSSObject['margin']
  mt?: CSSObject['marginTop']
  mb?: CSSObject['marginBottom']
  mr?: CSSObject['marginRight']
  ml?: CSSObject['marginLeft']
  p?: CSSObject['padding']
  py?: CSSObject['margin']
  px?: CSSObject['margin']
  pt?: CSSObject['paddingTop']
  pb?: CSSObject['paddingBottom']
  pr?: CSSObject['paddingRight']
  pl?: CSSObject['paddingLeft']
  bg?: CSSObject['background']
  c?: CSSObject['color']
  opacity?: CSSObject['opacity']
  ff?: CSSObject['fontFamily'];
  fz?: CSSObject['fontSize'];
  fw?: CSSObject['fontWeight'];
  lts?: CSSObject['letterSpacing'];
  ta?: CSSObject['textAlign'];
  lh?: CSSObject['lineHeight'];
  fs?: CSSObject['fontStyle'];
  tt?: CSSObject['textTransform'];
  td?: CSSObject['textDecoration'];
  w?: CSSObject['width'];
  miw?: CSSObject['minWidth'];
  maw?: CSSObject['maxWidth'];
  h?: CSSObject['height'];
  mih?: CSSObject['minHeight'];
  mah?: CSSObject['maxHeight'];
  bgsz?: CSSObject['backgroundSize'];
  bgp?: CSSObject['backgroundPosition'];
  bgr?: CSSObject['backgroundRepeat'];
  bga?: CSSObject['backgroundAttachment'];
  pos?: CSSObject['position'];
  top?: CSSObject['top'];
  left?: CSSObject['left'];
  bottom?: CSSObject['bottom'];
  right?: CSSObject['right'];
  inset?: CSSObject['inset'];
  display?: CSSObject['display'];
};
