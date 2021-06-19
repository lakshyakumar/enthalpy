// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  cardTitle,
  cardSubtitle
} from '../enthalpyStyles'

export const cardBodyStyle = makeStyles((theme: Theme) =>
  createStyles({
    cardBody: {
      padding: '0.9375rem 1.875rem',
      flex: '1 1 auto',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.subtitle1.fontSize
    },
    cardTitle,
    cardSubtitle
  })
)

export const cardFooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: '0.9375rem 1.875rem',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.subtitle2.fontSize
    },
    muted: {
      color: '#6c757d'
    }
  })
)

export const cardHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      borderRadius: '3px',
      padding: '1rem 15px',
      marginLeft: '15px',
      marginRight: '15px',
      marginTop: '-30px',
      border: '0',
      marginBottom: '0',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.fontWeightLight
    },
    cardHeaderPlain: {
      marginLeft: '0px',
      marginRight: '0px'
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  })
)

export const cardStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      border: '0',
      marginBottom: '30px',
      marginTop: '30px',
      borderRadius: '6px',
      color: 'rgba(0, 0, 0, 0.87)',
      background: '#fff',
      width: '100%',
      boxShadow:
        '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '0',
      wordWrap: 'break-word',
      fontSize: '.875rem',
      transition: 'all 300ms linear',
      fontFamily: theme.typography.fontFamily
    },
    cardPlain: {
      background: 'transparent',
      boxShadow: 'none'
    },
    cardCarousel: {
      overflow: 'hidden'
    },
    center: {
      textAlign: 'center'
    },
    right: {
      textAlign: 'right'
    }
  })
)
