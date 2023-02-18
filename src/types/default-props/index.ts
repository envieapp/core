import { EnvieTheme } from '@envie/theme';
import { Interpolation } from '@emotion/react';
import { SX } from '../sx';

export type DefaultProps = {
  sx?: SX | SX[],
  css?: Interpolation<EnvieTheme>
};
