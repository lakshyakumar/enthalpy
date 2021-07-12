// eslint-disable-next-line no-unused-vars
import { ButtonProps } from '@material-ui/core'

export interface EnthalpyButtonProps extends ButtonProps {
  round?: boolean
  simple?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className?: string
  buttonNavLink?: string
}

export interface ButtonStyle {
  button: string
  round: string
  fullWidth: string
  disabled: string
  simple: string
  block: string
  link: string
  justIcon: string
}
