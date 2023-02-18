import React from "react";
import { EnvieThemeProvider, SchemeName, useEnvieSetScheme, useEnvieTheme } from '@envie/theme'
import { Global } from '@emotion/react'
import { Parameters, DecoratorFn, addDecorator } from '@storybook/react'

export const parameters: Parameters = {
  backgrounds: {
    disable: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const System = ({scheme}: { scheme: SchemeName }) => {
  const setScheme = useEnvieSetScheme()

  React.useEffect(() => {
    setScheme(scheme)
  }, [scheme])

  return <Global styles={theme => ({
    '::selection': {
      background: `rgba(${theme.sys.color.tertiary.argb >> 16 & 255},${theme.sys.color.tertiary.argb >> 8 & 255},${theme.sys.color.tertiary.argb & 255},0.24)`
    }
  })}/>
}

export const decorators: DecoratorFn[] = [
  (Story, ctx) => {
    React.useEffect(() => {
      if (ctx.parameters.layout === 'centered') {
        document.querySelector("#root")?.setAttribute("style", "padding: 0")
      } else {
        document.body.setAttribute(
          "style",
          "padding: 0; margin: 0; width: 100vw; min-height: 100vh"
        )
      }
    }, [ctx.parameters.disableThemeDecorator]);
  
    if (ctx.parameters.disableThemeDecorator) return <Story />;
  
    return (
      <EnvieThemeProvider withEmotionProvider withGlobalStyles initialSchemeName={ctx.globals.theme}>
        <System scheme={ctx.globals.theme} />
        <Story />
      </EnvieThemeProvider>
    );
  }
]

export const globalTypes = {
  theme: {
    name: "Тема",
    description: "Глобальная тема для компонентов",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Светлая", left: "🌞" },
        { value: "dark", title: "Темная", left: "🌚" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};