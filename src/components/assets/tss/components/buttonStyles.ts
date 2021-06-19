import { roseColor, dangerColor } from '../enthalpyStyles'
// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minHeight: 'auto',
      minWidth: 'auto',
      boxShadow:
        '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
      border: 'none',
      borderRadius: '3px',
      position: 'relative',
      padding: '12px 30px',
      margin: '.3125rem 1px',
      textDecoration: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      textTransform: 'uppercase',
      letterSpacing: '0',
      willChange: 'box-shadow, transform',
      transition:
        'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      lineHeight: '1.42857143',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      touchAction: 'manipulation',
      cursor: 'pointer',
      '&:hover,&:focus': {
        boxShadow:
          '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
      },
      '&:visited': {
        textDecoration: 'none',
        decoration: 'none'
      },
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        fontSize: theme.typography.fontSize,
        marginRight: '4px',
        verticalAlign: 'middle'
      },
      '& svg': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        width: '18px',
        height: '18px',
        marginRight: '4px',
        verticalAlign: 'middle'
      },
      '&$justIcon': {
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          marginRight: '0px',
          position: 'absolute',
          width: '100%',
          transform: 'none',
          left: '0px',
          top: '0px',
          height: '100%',
          lineHeight: '41px',
          fontSize: theme.typography.h3
        }
      }
    },
    fullWidth: {
      width: '100%'
    },
    twitter: {
      backgroundColor: '#55acee',
      color: '#fff',
      boxShadow:
        '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
      '&:hover,&:focus,&:visited': {
        backgroundColor: '#55acee',
        color: '#fff',
        boxShadow:
          '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)'
      }
    },
    facebook: {
      backgroundColor: '#3b5998',
      color: '#fff',
      boxShadow:
        '0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)',
      '&:hover,&:focus': {
        backgroundColor: '#3b5998',
        color: '#fff',
        boxShadow:
          '0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)'
      }
    },
    google: {
      backgroundColor: '#dd4b39',
      color: '#fff',
      boxShadow:
        '0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
      '&:hover,&:focus': {
        backgroundColor: '#dd4b39',
        color: '#fff',
        boxShadow:
          '0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)'
      }
    },
    github: {
      backgroundColor: '#333333',
      color: '#fff',
      boxShadow:
        '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
      '&:hover,&:focus': {
        backgroundColor: '#333333',
        color: '#fff',
        boxShadow:
          '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)'
      }
    },
    simple: {
      '&,&:focus,&:hover,&:visited': {
        background: 'transparent',
        boxShadow: 'none',
        color: theme.palette.primary.dark
      },
      '&$primary': {
        '&,&:focus,&:hover,&:visited': {
          color: theme.palette.primary.main
        }
      },
      '&$info': {
        '&,&:focus,&:hover,&:visited': {
          color: theme.palette.info.main
        }
      },
      '&$success': {
        '&,&:focus,&:hover,&:visited': {
          color: theme.palette.success.main
        }
      },
      '&$warning': {
        '&,&:focus,&:hover,&:visited': {
          color: theme.palette.warning.main
        }
      },
      '&$rose': {
        '&,&:focus,&:hover,&:visited': {
          color: roseColor
        }
      },
      '&$danger': {
        '&,&:focus,&:hover,&:visited': {
          color: dangerColor
        }
      },
      '&$twitter': {
        '&,&:focus,&:hover,&:visited': {
          color: '#55acee'
        }
      },
      '&$facebook': {
        '&,&:focus,&:hover,&:visited': {
          color: '#3b5998'
        }
      },
      '&$google': {
        '&,&:focus,&:hover,&:visited': {
          color: '#dd4b39'
        }
      },
      '&$github': {
        '&,&:focus,&:hover,&:visited': {
          color: '#333333'
        }
      }
    },
    transparent: {
      '&,&:focus,&:hover,&:visited': {
        color: 'inherit',
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    disabled: {
      opacity: '0.65',
      pointerEvents: 'none'
    },
    round: {
      borderRadius: '30px'
    },
    block: {
      width: '100% !important'
    },
    link: {
      '&,&:hover,&:focus': {
        backgroundColor: 'transparent',
        textDecoration: 'none',
        boxShadow: 'none'
      }
    },
    justIcon: {
      paddingLeft: '12px',
      paddingRight: '12px',
      height: '41px',
      minWidth: '41px',
      width: '41px',
      '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
        marginRight: '0px'
      }
    }
  })
)

export default useStyles
