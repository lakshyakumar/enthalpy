import {
  createMuiTheme,
  // eslint-disable-next-line no-unused-vars
  ThemeOptions
} from '@material-ui/core'

function createEnthalpyTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options
  })
}

const palette = {
  primary: {
    light: '#2D6380',
    main: '#1C415C',
    dark: '#101A35',
    contrastText: '#fff'
  },
  secondary: {
    light: '#de7687',
    main: '#de1637',
    dark: '#780b1d',
    contrastText: '#fff'
  },
  common: {
    black: '#000',
    white: '#fff'
  },
  error: {
    main: 'rgba(235,87,87,1)',
    light: 'rgba(235,87,87,1)'
  },
  grey: {
    50: '#F2F2F2',
    100: '#F8F7FC',
    A100: 'rgba(152,175,183,0.3)',
    A200: '#F5F7F8',
    A400: '#E4E8EC',
    A700: 'rgba(45,99,128,0.05)'
  }
}

const spacing = 10

const defaultTheme = createEnthalpyTheme({
  palette,
  spacing,
  typography: {
    fontFamily: 'Lato, sans-serif',

    h1: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '2.75rem',
      lineHeight: 1.167,
      letterSpacing: 0
    },
    h2: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: 0
    },
    h3: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '2.25rem',
      lineHeight: 1.235,
      letterSpacing: 0
    },
    h4: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '1.75rem',
      lineHeight: 1.125,
      letterSpacing: 0
    },
    h5: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: 0
    },
    h6: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: 0
    },
    subtitle1: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: 0
    },
    subtitle2: {
      fontfamily: 'Lato, sans-serif',
      fontWeight: 900,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: 0
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: 0
    },
    button: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: 0,
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: 0
    }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: palette.secondary.light,
          fontSize: spacing * 1.4,
          margin: spacing * 0,
          fontFamily: 'Lato, sans-serif',
          lineHeight: 1.5,
          letterSpacing: spacing * 0,
          color: palette.secondary.main
        },
        a: {
          textDecoration: 'none',
          cursor: 'pointer'
        },
        label: {
          fontWeight: 700,
          fontSize: spacing * 1.6,
          color: palette.primary.main
        }
      }
    },
    MuiFormControl: {
      root: {
        '& .MuiOutlinedInput-root': {
          '&.MuiOutlinedInput-adornedStart': {
            padding: spacing * 0
          },
          '& fieldset': {
            borderWidth: spacing * 0.1,
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 0.2)`,
            borderRadius: 2 * 5,
            backgroundColor: palette.common.white,
            zIndex: -2
          },
          '&:hover fieldset': {
            borderWidth: spacing * 0.1,
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 1)`,
            borderRadius: 2 * 5
          },
          '&.Mui-focused fieldset': {
            borderWidth: spacing * 0.1,
            borderStyle: 'solid',
            borderColor: palette.primary.main,
            borderRadius: 2 * 5
          },
          '&.MuiOutlinedInput-notchedOutline fieldset': {
            borderWidth: '1px !important',
            borderColor: palette.primary.main,
            borderStyle: 'solid',
            borderRadius: 2 * 5,
            color: palette.secondary.main
          },
          '&.Mui-error fieldset': {
            borderWidth: '1px !important',
            borderColor: palette.error.main,
            borderStyle: 'solid',
            borderRadius: 2 * 5
          }
        },
        '& .MuiOutlinedInput-adornedEnd': {
          padding: spacing * 0
        },
        '&.MuiSelect-select:focus': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiInputBase: {
      root: {
        color: palette.secondary.main
      }
    },
    MuiTextField: {
      root: {
        color: 'red',
        margin: '16px 0px',
        width: '100%',
        border: spacing * 0
      }
    },
    MuiInputLabel: {
      root: {
        '&.Mui-focused': {
          color: palette.primary.main
        },
        '&.Mui-error': {
          color: palette.error.main
        }
      }
    }
  }
})

export default defaultTheme
