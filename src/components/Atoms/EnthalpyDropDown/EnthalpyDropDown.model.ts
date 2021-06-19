export interface EnthalpyDropDownProps {
  buttonText?: string
  buttonIcon?: any
  dropdownList: any[]
  buttonProps?: Object
  dropup?: boolean
  dropdownHeader?: string
  caret?: boolean
  hoverColor?: string
  left?: boolean
  rtlActive?: boolean
  noLiPadding?: boolean
  [rest: string]: any
}

export interface EnthalpyDropDownStyles {
  popperClose?: string
  dropdown?: string
  menuList?: string
  popperResponsive?: string
  dropdownItem?: string
  dropdownItemRTL?: string
  blockHover?: string
  blackHover?: string
  primaryHover?: string
  infoHover?: string
  successHover?: string
  warningHover?: string
  dangerHover?: string
  roseHover?: string
  dropdownDividerItem?: string
  buttonIcon?: string
  caret?: string
  caretActive?: string
  caretRTL?: string
  dropdownHeader?: string
  noLiPadding?: string
}
