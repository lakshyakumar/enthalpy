// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { title } from '../enthalpyStyles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '70px 0',
      textAlign: 'center'
    },
    title: {
      ...title,
      marginBottom: '1rem',
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none',
      fontSize: theme.typography.h4.fontSize
    },
    description: {
      color: '#999',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.body1.fontSize
    }
  })
)

export default useStyles
