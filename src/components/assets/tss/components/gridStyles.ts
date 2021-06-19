import { createStyles, makeStyles } from '@material-ui/core'

export const useStylesGridItem = makeStyles(() =>
  createStyles({
    grid: {
      position: 'relative',
      width: '100%',
      minHeight: '1px',
      paddingRight: '15px',
      paddingLeft: '15px',
      flexBasis: 'auto'
    }
  })
)

export const useStylesGridContainer = makeStyles(() =>
  createStyles({
    grid: {
      marginRight: '-15px',
      marginLeft: '-15px',
      width: 'auto'
    }
  })
)
