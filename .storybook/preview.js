import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'
import { addDecorator } from '@storybook/react'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))
