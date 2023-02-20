import { Interpolation } from '@emotion/react';
import { ColorName, EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { IconButtonProps } from './IconButton.types';

type Keys = RequiredKeys<IconButtonProps, 'variant' | 'color' | 'selected'>;

type Fn = (props: Keys) => Interpolation<EnvieTheme>;

const standardIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    return {
      '&:enabled': {
        background: 'none',
        color: props.selected
          ? theme.sys.color[props.color].hex
          : theme.sys.color.onSurfaceVariant.hex,
      },
      '&:disabled': {
        background: 'none',
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          props.selected
            ? theme.sys.color[props.color]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          props.selected
            ? theme.sys.color[props.color]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          props.selected
            ? theme.sys.color[props.color]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const filledIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    const onColor = `on${props.color.charAt(0).toUpperCase()}`
    + `${props.color.substring(1)}` as ColorName;
    return {
      '&:enabled': {
        color: props.selected
          ? theme.sys.color[onColor].hex
          : theme.sys.color[props.color].hex,
        background: props.selected
          ? theme.sys.color[props.color].hex
          : theme.sys.color.surfaceVariant.hex,
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          props.selected
            ? theme.sys.color[onColor]
            : theme.sys.color[props.color],
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          props.selected
            ? theme.sys.color[onColor]
            : theme.sys.color[props.color],
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          props.selected
            ? theme.sys.color[onColor]
            : theme.sys.color[props.color],
        ),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const tonalIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    const colorContainer = `${props.color}Container` as ColorName;
    const onColorContainer = `on${colorContainer.charAt(0).toUpperCase()}`
    + `${colorContainer.substring(1)}` as ColorName;
    return {
      '&:enabled': {
        color: props.selected
          ? theme.sys.color[onColorContainer].hex
          : theme.sys.color.onSurfaceVariant.hex,
        background: props.selected
          ? theme.sys.color[colorContainer].hex
          : theme.sys.color.surfaceVariant.hex,
      },
      '&:disabled': {
        background: theme.fn.opacity(theme.sys.color.onSurface, 0.12),
        color: theme.fn.opacity(theme.sys.color.onSurface, 0.38),
      },
      '&:enabled:hover': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'hovered',
          props.selected
            ? theme.sys.color[onColorContainer]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          props.selected
            ? theme.sys.color[onColorContainer]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          props.selected
            ? theme.sys.color[onColorContainer]
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color[props.color], 0.18),
      },
    };
  };
};

const outlinedIconButtonStyles: (props: Keys) => Interpolation<EnvieTheme> = (props) => {
  return (theme) => {
    return {
      background: 'none',
      borderWidth: props.selected ? 0 : 1,
      borderStyle: 'solid',
      '&:enabled': {
        color: props.selected
          ? theme.sys.color.inverseOnSurface.hex
          : theme.sys.color.onSurfaceVariant.hex,
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
          props.selected
            ? theme.sys.color.inverseOnSurface
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:focus': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'focused',
          props.selected
            ? theme.sys.color.inverseOnSurface
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:enabled:active': {
        '--icon-button-state-layer': theme.fn.stateLayer(
          'pressed',
          props.selected
            ? theme.sys.color.inverseOnSurface
            : theme.sys.color.onSurfaceVariant,
        ),
      },
      '&:focus-visible': {
        outlineColor: theme.fn.opacity(theme.sys.color.outline, 0.18),
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
