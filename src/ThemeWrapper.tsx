import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes/default'

const ThemeWrapper: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeWrapper
