import { CSSObject } from '@emotion/react';
import { EnvieTheme } from '@envie/theme';

export type SX = CSSObject | ((theme: EnvieTheme) => CSSObject);
