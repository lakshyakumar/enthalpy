// Imports from module
import * as React from 'react'
import classNames from 'classnames'

// Imports from enthalpy
// eslint-disable-next-line no-unused-vars
import { Button } from '@material-ui/core'
// eslint-disable-next-line no-unused-vars
import { ButtonStyle, EnthalpyButtonProps } from './EnthalpyButton.model'

// Import styles
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

  // Getting all the classes
  const classes: ButtonStyle = useStyles()

  // Adding all the required classes to the btnClasses
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
      {children? children : "Default text"}
    </Button>
  )
}

export default EnthalpyButton
