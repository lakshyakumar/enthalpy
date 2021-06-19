import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      zIndex: 12,
      color: '#FFFFFF',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%',
      '@media (min-width: 576px)': {
        maxWidth: '540px'
      },
      '@media (min-width: 768px)': {
        maxWidth: '720px'
      },
      '@media (min-width: 992px)': {
        maxWidth: '960px'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      }
    },
    titleDesc: {
      fontWeight: theme.typography.fontWeightLight,
      fontFamily: theme.typography.fontFamily
    },
    title: {
      color: '#fff',
      margin: '1.75rem 0 0.875rem',
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      display: 'inline-block',
      position: 'relative',
      marginTop: '30px',
      minHeight: '32px'
    },
    subtitle: {
      fontSize: '1.313rem',
      maxWidth: '500px',
      margin: '10px auto 0'
    },
    main: {
      background: '#FFFFFF',
      position: 'relative',
      zIndex: 3
    },
    mainRaised: {
      margin: '-60px 30px 0px',
      borderRadius: '6px',
      boxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
  })
)

export default useStyles
