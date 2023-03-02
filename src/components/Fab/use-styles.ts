import { RequiredKeys } from '@envie/utilities';
import { Interpolation } from '@emotion/react';
import { ColorName, EnvieTheme } from '@envie/theme';
import { FabProps } from './Fab.types';

type Keys = RequiredKeys<FabProps, 'size' | 'color' | 'lowered'>;

type Fn = (props: Keys) => Interpolation<EnvieTheme>;

const useColors = (color: Keys['color']): { foreground: ColorName, background: ColorName } => {
  switch (color) {
    case 'surface': return {
      foreground: 'primary',
      background: 'surface',
    };
    case 'primary': return {
      foreground: 'onPrimaryContainer',
      background: 'primaryContainer',
    };
    case 'secondary': return {
      foreground: 'onSecondaryContainer',
      background: 'secondaryContainer',
    };
    case 'tertiary': return {
      foreground: 'onTertiaryContainer',
      background: 'tertiaryContainer',
    };
    case 'success': return {
      foreground: 'onSuccessContainer',
      background: 'successContainer',
    };
    case 'warning': return {
      foreground: 'onWarningContainer',
      background: 'warningContainer',
    };
    case 'error': return {
      foreground: 'onErrorContainer',
      background: 'errorContainer',
    };
    case 'info': return {
      foreground: 'onInfoContainer',
      background: 'infoContainer',
    };
    default: throw new Error('invalid color');
  }
};
const useElevation = (lowered: Keys['lowered']): {
  default: 1 | 3,
  hovered: 2 | 4
} => {
  return { default: lowered ? 1 : 3, hovered: lowered ? 2 : 4 };
};

export const useStyles: Fn = (props: Keys): Interpolation<EnvieTheme> => {
  const { foreground, background } = useColors(props.color);
  const elevation = useElevation(props.lowered);

  return (theme) => {
    const size = () => {
      if (props.size === 'small') {
        return '2.5rem';
      }
      if (props.size === 'medium') {
        return '3.5rem';
      }
      return '6rem';
    };

    const shape = () => {
      if (props.size === 'small') {
        return theme.sys.shape.medium;
      }
      if (props.size === 'medium') {
        return theme.sys.shape.large;
      }
      return theme.sys.shape.extraLarge;
    };

    return {
      borderRadius: shape(),
      width: size(),
      height: size(),
      position: 'relative',
      border: 'none',
      outlineWidth: 3,
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineOffset: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionProperty: 'background, color, outline, box-shadow',
      transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
      transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
      zIndex: 1,
      boxShadow: theme.fn.elevation(elevation.default),
      background: props.color === 'surface'
        ? theme.fn.surface(elevation.default)
        : theme.sys.color[background].hex,
      color: theme.sys.color[foreground].hex,
      '--fab-state-layer': 'transparent',
      '&:enabled': {
        cursor: 'pointer',
      },
      '&:enabled:hover': {
        background: props.color === 'surface'
          ? theme.fn.surface(elevation.hovered)
          : undefined,
        boxShadow: theme.fn.elevation(elevation.hovered),
        '--fab-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[foreground]),
      },
      '&:enabled:focus': {
        '--fab-state-layer': theme.fn.stateLayer('focused', theme.sys.color[foreground]),
      },
      '&:enabled:active': {
        background: props.color === 'surface'
          ? theme.fn.surface(props.lowered ? 1 : 3)
          : theme.sys.color[background].hex,
        boxShadow: theme.fn.elevation(elevation.default),
        '--fab-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[foreground]),
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: shape(),
        background: 'var(--fab-state-layer)',
        transitionProperty: 'background',
        transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
        transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
        zIndex: -1,
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(props.color === 'surface'
          ? theme.sys.color.primary
          : theme.sys.color[props.color], 0.5),
      },
    };
  };
};
