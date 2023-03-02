import { Interpolation } from '@emotion/react';
import { EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { IconButtonProps } from './IconButton.types';

type Keys = RequiredKeys<IconButtonProps, 'variant' | 'color' | 'selected'>;

type Fn = (props: Keys) => Interpolation<EnvieTheme>;

const standardIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  const foreground = props.selected ? props.color : 'onSurfaceVariant';

  return (theme) => {
    return {
      '&:enabled': {
        background: 'none',
        color: theme.sys.color[foreground].hex,
      },
      '&:disabled': {
        background: 'none',
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          theme.sys.color[foreground],
        ),
      },
    };
  };
};

const filledIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  const foreground = props.selected
    ? (() => {
      switch (props.color) {
        case 'primary': return 'onPrimary';
        case 'secondary': return 'onSecondary';
        case 'tertiary': return 'onTertiary';
        case 'success': return 'onSuccess';
        case 'warning': return 'onWarning';
        case 'error': return 'onError';
        case 'info': return 'onInfo';
        default: throw new Error('invalid color');
      }
    })() : props.color;
  const background = props.selected ? props.color : 'surfaceVariant';

  return (theme) => {
    return {
      '&:enabled': {
        color: theme.sys.color[foreground].hex,
        background: theme.sys.color[background].hex,
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          theme.sys.color[foreground],
        ),
      },
    };
  };
};

const tonalIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  const foreground = props.selected
    ? (() => {
      switch (props.color) {
        case 'primary': return 'onPrimaryContainer';
        case 'secondary': return 'onSecondaryContainer';
        case 'tertiary': return 'onTertiaryContainer';
        case 'success': return 'onSuccessContainer';
        case 'warning': return 'onWarningContainer';
        case 'error': return 'onErrorContainer';
        case 'info': return 'onInfoContainer';
        default: throw new Error('invalid color');
      }
    })() : 'onSurfaceVariant';
  const background = props.selected ? (() => {
    switch (props.color) {
      case 'primary': return 'primaryContainer';
      case 'secondary': return 'secondaryContainer';
      case 'tertiary': return 'tertiaryContainer';
      case 'success': return 'successContainer';
      case 'warning': return 'warningContainer';
      case 'error': return 'errorContainer';
      case 'info': return 'infoContainer';
      default: throw new Error('invalid color');
    }
  })() : 'surfaceVariant';

  return (theme) => {
    return {
      '&:enabled': {
        color: theme.sys.color[foreground].hex,
        background: theme.sys.color[background].hex,
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          theme.sys.color[foreground],
        ),
      },
    };
  };
};

const outlinedIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  const borderWidth = props.selected ? 0 : 1;
  const foreground = props.selected ? 'inverseOnSurface' : 'onSurfaceVariant';

  return (theme) => {
    return {
      background: 'none',
      borderWidth,
      borderStyle: 'solid',
      '&:enabled': {
        color: theme.sys.color[foreground].hex,
        borderColor: theme.sys.color.outline.hex,
        background: props.selected ? theme.sys.color.inverseSurface.hex : undefined,
      },
      '&:disabled': {
        borderColor: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
        background: props.selected ? theme.fn.opacity(theme.sys.color.onSurface, 0.12) : undefined,
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          theme.sys.color[foreground],
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          theme.sys.color[foreground],
        ),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color.outline, 0.5),
      },
    };
  };
};

export const useStyles: Fn = (props: Keys): Interpolation<EnvieTheme> => {
  const defaultStyles: Interpolation<EnvieTheme> = [(theme) => {
    return {
      position: 'relative',
      borderRadius: theme.sys.shape.full,
      border: 'none',
      outlineWidth: 3,
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineOffset: 3,
      width: '2.5rem',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionProperty: 'background, color, outline, box-shadow',
      transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
      transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
      zIndex: 1,
      '--icon-button-state-layer': 'transparent',
      '&:enabled': {
        cursor: 'pointer',
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
        borderRadius: theme.sys.shape.full,
        background: 'var(--icon-button-state-layer)',
        transitionProperty: 'background',
        transitionTimingFunction: `cubic-bezier(${theme.sys.motion.easing.standard})`,
        transitionDuration: `${theme.sys.motion.duration.medium2}ms`,
        zIndex: -1,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '-0.25rem',
        left: '-0.25rem',
        bottom: '-0.25rem',
        right: '-0.25rem',
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.5),
      },
    };
  }];
  switch (props.variant) {
    case 'standard': {
      (defaultStyles as unknown[]).push(standardIconButtonStyles(props));
      break;
    }
    case 'filled': {
      (defaultStyles as unknown[]).push(filledIconButtonStyles(props));
      break;
    }
    case 'tonal': {
      (defaultStyles as unknown[]).push(tonalIconButtonStyles(props));
      break;
    }
    case 'outlined': {
      (defaultStyles as unknown[]).push(outlinedIconButtonStyles(props));
      break;
    }
    default: return defaultStyles;
  }
  return defaultStyles;
};
