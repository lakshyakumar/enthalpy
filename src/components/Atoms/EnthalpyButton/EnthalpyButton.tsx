import * as React from 'react'
import classNames from 'classnames'

// eslint-disable-next-line no-unused-vars
import { Button } from '@material-ui/core'
// eslint-disable-next-line no-unused-vars
import { ButtonStyle, EnthalpyButtonProps } from './EnthalpyButton.model'

import useStyles from '../../assets/tss/components/buttonStyles'

export const EnthalpyButton: React.FC<EnthalpyButtonProps> = ({
  round,
  children,
  fullWidth,
  disabled,
  simple,
  block,
  link,
  justIcon,
  className,
  ...props
}): JSX.Element => {
  const classes: ButtonStyle = useStyles()
  const btnClasses = classNames({
    [classes.button]: true,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  })

  return (
    <Button {...props} className={btnClasses} data-testid='Button'>
      {children}
    </Button>
  )
}

export default EnthalpyButton
