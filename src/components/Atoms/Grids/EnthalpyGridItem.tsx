import React from 'react'
// @material-ui/core components
import { Grid } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
import { EnthalpyGridProps, EnthalpyGridStyles } from './EnthalpyGrid.model'

import { useStylesGridItem as useStyles } from '../../assets/tss/components/gridStyles'

const GridItem: React.FC<EnthalpyGridProps> = (props) => {
  const classes: EnthalpyGridStyles = useStyles()
  const { children, className, ...rest } = props
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

export default GridItem
