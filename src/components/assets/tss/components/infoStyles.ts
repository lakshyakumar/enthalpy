// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import {
  warningColor,
  dangerColor,
  roseColor,
  grayColor
} from '../enthalpyStyles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoArea: {
      maxWidth: '360px',
      margin: '0 auto',
      padding: '0px',
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: theme.typography.fontFamily,
      fontSize: 'inherit'
    },
    iconWrapper: {
      float: 'left',
      marginTop: '24px',
      marginRight: '10px'
    },
    primary: {
      color: theme.palette.primary.main
    },
    warning: {
      color: warningColor
    },
    danger: {
      color: dangerColor
    },
    success: {
      color: theme.palette.success.main
    },
    info: {
      color: theme.palette.info.main
    },
    rose: {
      color: roseColor
    },
    gray: {
      color: theme.palette.grey[100]
    },
    icon: {
      width: '70px',
      height: '70px'
    },
    descriptionWrapper: {
      color: grayColor,
      overflow: 'hidden'
    },
    title: {
      color: '#3C4858',
      margin: '1.75rem 0 0.875rem',
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      fontSize: 'inherit'
    },
    description: {
      color: grayColor,
      overflow: 'hidden',
      marginTop: '0px',
      fontSize: 'inherit'
    },
    iconWrapperVertical: {
      float: 'none'
    },
    iconVertical: {
      width: '70px',
      height: '70px'
    }
  })
)

export default useStyles
