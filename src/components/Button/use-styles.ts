import { Interpolation } from '@emotion/react';
import { ColorName, EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { ButtonProps } from './Button.types';

type Keys = RequiredKeys<ButtonProps, 'variant' | 'color'>;
type Styles = Record<
'containerStyles' | 'stateLayerStyles' | 'labelStyles',
Interpolation<EnvieTheme>
>;
type Fn = (props: Keys) => Styles;

const elevatedButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    return {
      '&:enabled': {
        background: theme.fn.surface(1, theme.sys.color[props.color]),
        color: theme.sys.color[props.color].hex,
        boxShadow: theme.fn.elevation(1),
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        boxShadow: theme.fn.elevation(2),
        '--button-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[props.color]),
      },
      '&:enabled:focus': {
        '--button-state-layer': theme.fn.stateLayer('focused', theme.sys.color[props.color]),
      },
      '&:enabled:active': {
        boxShadow: theme.fn.elevation(1),
        '--button-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[props.color]),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const filledButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    const onColor = `on${props.color.charAt(0).toUpperCase()}`
    + `${props.color.substring(1)}` as ColorName;
    return {
      '&:enabled': {
        background: theme.sys.color[props.color].hex,
        color: theme.sys.color[onColor].hex,
        boxShadow: 'none',
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        boxShadow: theme.fn.elevation(1),
        '--button-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[onColor]),
      },
      '&:enabled:focus': {
        '--button-state-layer': theme.fn.stateLayer('focused', theme.sys.color[onColor]),
      },
      '&:enabled:active': {
        boxShadow: 'none',
        '--button-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[onColor]),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const tonalButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    const color = `${props.color}Container` as ColorName;
    const onColor = `on${color.charAt(0).toUpperCase()}${color.substring(1)}` as ColorName;
    return {
      '&:enabled': {
        background: theme.sys.color[color].hex,
        color: theme.sys.color[onColor].hex,
        boxShadow: 'none',
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        boxShadow: theme.fn.elevation(1),
        '--button-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[onColor]),
      },
      '&:enabled:focus': {
        '--button-state-layer': theme.fn.stateLayer('focused', theme.sys.color[onColor]),
      },
      '&:enabled:active': {
        boxShadow: 'none',
        '--button-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[onColor]),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const outlinedButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    return {
      borderWidth: 1,
      borderStyle: 'solid',
      background: 'transparent',
      '&:enabled': {
        borderColor: theme.sys.color.outline.hex,
        color: theme.sys.color[props.color].hex,
      },
      '&:disabled': {
        borderColor: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--button-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[props.color]),
      },
      '&:enabled:focus': {
        borderColor: theme.sys.color[props.color].hex,
        '--button-state-layer': theme.fn.stateLayer('focused', theme.sys.color[props.color]),
      },
      '&:enabled:active': {
        '--button-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[props.color]),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const textButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    return {
      background: 'transparent',
      '&:enabled': {
        color: theme.sys.color[props.color].hex,
      },
      '&:disabled': {
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--button-state-layer': theme.fn.stateLayer('hovered', theme.sys.color[props.color]),
      },
      '&:enabled:focus': {
        '--button-state-layer': theme.fn.stateLayer('focused', theme.sys.color[props.color]),
      },
      '&:enabled:active': {
        '--button-state-layer': theme.fn.stateLayer('pressed', theme.sys.color[props.color]),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

export const useStyles: Fn = (props: Keys): Styles => {
  const defaultStyles: Styles = {
    containerStyles: [(theme) => {
      return {
        position: 'relative',
        borderRadius: theme.sys.shape.full,
        border: 'none',
        outlineWidth: 3,
        outlineStyle: 'solid',
        outlineColor: 'transparent',
        outlineOffset: 3,
        height: '2.5rem',
        paddingLeft: (() => {
          if (props.variant === 'text') {
            if (!props.startIcon && props.endIcon) {
              return '1rem';
            }
            return '0.75rem';
          }
          if (props.startIcon) return '1rem';
          return '1.5rem';
        })(),
        paddingRight: (() => {
          if (props.variant === 'text') {
            if (!props.endIcon && props.startIcon) {
              return '1rem';
            }
            return '0.75rem';
          }
          if (props.endIcon) return '1rem';
          return '1.5rem';
        })(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background, color, outline, box-shadow',
        transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
        transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
        zIndex: 1,
        '--button-state-layer': 'transparent',
        '&:enabled': {
          cursor: 'pointer',
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
      };
    }],
    stateLayerStyles: (theme) => {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: theme.sys.shape.full,
        background: 'var(--button-state-layer)',
        transitionProperty: 'background',
        transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
        transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
        zIndex: -1,
      };
    },
    labelStyles: () => {
      return {
        marginLeft: props.startIcon ? '0.5rem' : undefined,
        marginRight: props.endIcon ? '0.5rem' : undefined,
      };
    },
  };
  switch (props.variant) {
    case 'elevated': {
      (defaultStyles.containerStyles as unknown[])
        .push(elevatedButtonStyles(props));
      break;
    }
    case 'filled': {
      (defaultStyles.containerStyles as unknown[])
        .push(filledButtonStyles(props));
      break;
    }
    case 'tonal': {
      (defaultStyles.containerStyles as unknown[])
        .push(tonalButtonStyles(props));
      break;
    }
    case 'outlined': {
      (defaultStyles.containerStyles as unknown[])
        .push(outlinedButtonStyles(props));
      break;
    }
    case 'text': {
      (defaultStyles.containerStyles as unknown[])
        .push(textButtonStyles(props));
      break;
    }
    default: return defaultStyles;
  }
  return defaultStyles;
};
