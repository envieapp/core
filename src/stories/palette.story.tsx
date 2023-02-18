/* eslint-disable import/no-extraneous-dependencies */
import { Interpolation } from '@emotion/react';
import { EnvieTheme, generateTheme, useEnvieSetTheme } from '@envie/theme';
import { Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Settings/Palette',
  argTypes: {
    source: { control: 'color' },
    success: { control: 'color' },
    warning: { control: 'color' },
    error: { control: 'color' },
    info: { control: 'color' },
  },
  args: {
    source: '#B69DF8',
    success: '#a6f89d',
    warning: '#f8ec9d',
    error: '#f89d9d',
    info: '#9dc1f8',
  },
} as Meta;

const Plate: React.FC<{
  css: Interpolation<EnvieTheme>,
  children: React.ReactNode
}> = ({ css, ...rest }) => {
  return (
    <div
      {...rest}
      css={[css, (theme) => {
        return {
          padding: 16,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          boxShadow: theme.fn.elevation(1),
        };
      }]}
    />
  );
};

export function Palette({
  source,
  success,
  warning,
  error,
  info,
}: {
  source: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}) {
  const setTheme = useEnvieSetTheme();

  React.useEffect(() => {
    const t = generateTheme({
      source,
      success,
      warning,
      error,
      info,
    });
    setTheme(t);
  }, [source, success, warning, error, info]);

  return (
    <div
      css={{
        padding: 32,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        gap: 16,
      }}
    >
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.primary.hex,
          color: theme.sys.color.onPrimary.hex,
        };
      }}
      >
        Primary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onPrimary.hex,
          color: theme.sys.color.primary.hex,
        };
      }}
      >
        On Primary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.primaryContainer.hex,
          color: theme.sys.color.onPrimaryContainer.hex,
        };
      }}
      >
        Primary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onPrimaryContainer.hex,
          color: theme.sys.color.primaryContainer.hex,
        };
      }}
      >
        On Primary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.secondary.hex,
          color: theme.sys.color.onSecondary.hex,
        };
      }}
      >
        Secondary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSecondary.hex,
          color: theme.sys.color.secondary.hex,
        };
      }}
      >
        On Secondary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.secondaryContainer.hex,
          color: theme.sys.color.onSecondaryContainer.hex,
        };
      }}
      >
        Secondary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSecondaryContainer.hex,
          color: theme.sys.color.secondaryContainer.hex,
        };
      }}
      >
        On Secondary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.tertiary.hex,
          color: theme.sys.color.onTertiary.hex,
        };
      }}
      >
        Tertiary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onTertiary.hex,
          color: theme.sys.color.tertiary.hex,
        };
      }}
      >
        On Tertiary
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.tertiaryContainer.hex,
          color: theme.sys.color.onTertiaryContainer.hex,
        };
      }}
      >
        Tertiary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onTertiaryContainer.hex,
          color: theme.sys.color.tertiaryContainer.hex,
        };
      }}
      >
        On Tertiary Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.success.hex,
          color: theme.sys.color.onSuccess.hex,
        };
      }}
      >
        Success
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSuccess.hex,
          color: theme.sys.color.success.hex,
        };
      }}
      >
        On Success
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.successContainer.hex,
          color: theme.sys.color.onSuccessContainer.hex,
        };
      }}
      >
        Success Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSuccessContainer.hex,
          color: theme.sys.color.successContainer.hex,
        };
      }}
      >
        On Success Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.warning.hex,
          color: theme.sys.color.onWarning.hex,
        };
      }}
      >
        Warning
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onWarning.hex,
          color: theme.sys.color.warning.hex,
        };
      }}
      >
        On Warning
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.warningContainer.hex,
          color: theme.sys.color.onWarningContainer.hex,
        };
      }}
      >
        Warning Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onWarningContainer.hex,
          color: theme.sys.color.warningContainer.hex,
        };
      }}
      >
        On Warning Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.error.hex,
          color: theme.sys.color.onError.hex,
        };
      }}
      >
        Error
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onError.hex,
          color: theme.sys.color.error.hex,
        };
      }}
      >
        On Error
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.errorContainer.hex,
          color: theme.sys.color.onErrorContainer.hex,
        };
      }}
      >
        Error Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onErrorContainer.hex,
          color: theme.sys.color.errorContainer.hex,
        };
      }}
      >
        On Error Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.info.hex,
          color: theme.sys.color.onInfo.hex,
        };
      }}
      >
        Info
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onInfo.hex,
          color: theme.sys.color.info.hex,
        };
      }}
      >
        On Info
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.infoContainer.hex,
          color: theme.sys.color.onInfoContainer.hex,
        };
      }}
      >
        Info Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onInfoContainer.hex,
          color: theme.sys.color.infoContainer.hex,
        };
      }}
      >
        On Info Container
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.background.hex,
          color: theme.sys.color.onBackground.hex,
        };
      }}
      >
        Background
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onBackground.hex,
          color: theme.sys.color.background.hex,
        };
      }}
      >
        On Background
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.surface.hex,
          color: theme.sys.color.onSurface.hex,
        };
      }}
      >
        Surface
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSurface.hex,
          color: theme.sys.color.surface.hex,
        };
      }}
      >
        On Surface
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.surfaceVariant.hex,
          color: theme.sys.color.onSurfaceVariant.hex,
        };
      }}
      >
        Surface Variant
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.onSurfaceVariant.hex,
          color: theme.sys.color.surfaceVariant.hex,
        };
      }}
      >
        On Surface Variant
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.outline.hex,
          color: theme.sys.color.background.hex,
        };
      }}
      >
        Outline
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.outlineVariant.hex,
          color: theme.sys.color.onBackground.hex,
        };
      }}
      >
        Outline Variant
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.shadow.hex,
          color: theme.sys.color.outline.hex,
        };
      }}
      >
        Shadow
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.scrim.hex,
          color: theme.sys.color.outline.hex,
        };
      }}
      >
        Scrim
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.inverseSurface.hex,
          color: theme.sys.color.inverseOnSurface.hex,
        };
      }}
      >
        Inverse Surface
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.inverseOnSurface.hex,
          color: theme.sys.color.inverseSurface.hex,
        };
      }}
      >
        Inverse On Surface
      </Plate>
      <Plate css={(theme) => {
        return {
          background: theme.sys.color.inversePrimary.hex,
          color: theme.sys.color.onPrimaryContainer.hex,
        };
      }}
      >
        Inverse Primary
      </Plate>
    </div>
  );
}
