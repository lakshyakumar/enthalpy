// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth
} from '../enthalpyStyles'

export const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      display: 'flex',
      border: '0',
      borderRadius: '3px',
      padding: '0.625rem 0',
      marginBottom: '20px',
      color: '#555',
      width: '100%',
      backgroundColor: '#fff',
      boxShadow:
        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
      transition: 'all 150ms ease 0s',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      position: 'relative',
      zIndex: 'unset'
    },
    absolute: {
      position: 'absolute',
      zIndex: 1100
    },
    fixed: {
      position: 'fixed',
      zIndex: 1100
    },
    container: {
      ...container,
      minHeight: '50px',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      flexWrap: 'nowrap'
    },
    flex: {
      flex: 1
    },
    title: {
      ...defaultFont,
      lineHeight: '30px',
      fontSize: '18px',
      borderRadius: '3px',
      textTransform: 'none',
      color: 'inherit',
      padding: '8px 16px',
      letterSpacing: 'unset',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'transparent'
      }
    },
    appResponsive: {
      margin: '20px 10px'
    },
    primary: {
      backgroundColor: primaryColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)'
    },
    info: {
      backgroundColor: infoColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)'
    },
    success: {
      backgroundColor: successColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)'
    },
    warning: {
      backgroundColor: warningColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)'
    },
    danger: {
      backgroundColor: dangerColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)'
    },
    rose: {
      backgroundColor: roseColor,
      color: '#FFFFFF',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)'
    },
    transparent: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
      paddingTop: '25px',
      color: '#FFFFFF'
    },
    dark: {
      color: '#FFFFFF',
      backgroundColor: '#212121 !important',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)'
    },
    white: {
      border: '0',
      padding: '0.625rem 0',
      marginBottom: '20px',
      color: '#555',
      backgroundColor: '#fff !important',
      boxShadow:
        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
    },
    drawerPaper: {
      border: 'none',
      bottom: '0',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      width: drawerWidth,
      ...boxShadow,
      position: 'fixed',
      display: 'block',
      top: '0',
      height: '100vh',
      right: '0',
      left: 'auto',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      ...transition
    }
  })
)

export const useLinkStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      ...defaultFont,
      fontSize: '14px',
      margin: 0,
      paddingLeft: '0',
      listStyle: 'none',
      paddingTop: '0',
      paddingBottom: '0',
      color: 'inherit'
    },
    listItem: {
      float: 'left',
      color: 'inherit',
      position: 'relative',
      display: 'block',
      width: 'auto',
      margin: '0',
      padding: '0',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&:after': {
          width: 'calc(100% - 30px)',
          content: '""',
          display: 'block',
          height: '1px',
          marginLeft: '15px',
          backgroundColor: '#e5e5e5'
        }
      }
    },
    listItemText: {
      padding: '0 !important'
    },
    navLink: {
      color: 'inherit',
      position: 'relative',
      padding: '0.9375rem',
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '3px',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'rgba(200, 200, 200, 0.2)'
      },
      '& a:visited': {
        textDecoration: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 30px)',
        marginLeft: '15px',
        marginBottom: '8px',
        marginTop: '8px',
        textAlign: 'left',
        '& > span:first-child': {
          justifyContent: 'flex-start'
        }
      }
    },
    notificationNavLink: {
      color: 'inherit',
      padding: '0.9375rem',
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'uppercase',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex',
      top: '4px'
    },
    registerNavLink: {
      top: '3px',
      position: 'relative',
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'uppercase',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex'
    },
    navLinkActive: {
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    icons: {
      width: '20px',
      height: '20px',
      marginRight: '3px'
    },
    socialIcons: {
      position: 'relative',
      fontSize: '20px !important',
      marginRight: '4px'
    },
    dropdownLink: {
      '&,&:hover,&:focus': {
        color: 'inherit',
        textDecoration: 'none',
        display: 'block',
        padding: '10px 20px'
      }
    },
    tooltip: {
      padding: '10px 15px',
      minWidth: '130px',
      color: '#555555',
      lineHeight: '1.7em',
      background: '#FFFFFF',
      border: 'none',
      borderRadius: '3px',
      boxShadow:
        '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
      maxWidth: '200px',
      textAlign: 'center',
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: '0.875em',
      fontStyle: 'normal',
      fontWeight: 400,
      textShadow: 'none',
      textTransform: 'none',
      letterSpacing: 'normal',
      wordBreak: 'normal',
      wordSpacing: 'normal',
      wordWrap: 'normal',
      whiteSpace: 'normal',
      lineBreak: 'auto'
    },
    marginRight5: {
      marginRight: '5px'
    }
  })
)
