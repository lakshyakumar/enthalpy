import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import {
  MenuItem,
  MenuList,
  ClickAwayListener,
  Paper,
  Grow,
  Divider,
  Icon,
  Popper
} from '@material-ui/core'

// core components
import { EnthalpyButton } from '../EnthalpyButton/EnthalpyButton'

import useStyles from '../../assets/tss/components/dropdownStyles'
// eslint-disable-next-line no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars
  EnthalpyDropDownProps,
  // eslint-disable-next-line no-unused-vars
  EnthalpyDropDownStyles
} from './EnthalpyDropDown.model'

const EnthalpyDropDown: React.FC<EnthalpyDropDownProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event: Event) => {
    if (anchorEl != null && anchorEl.contains(event.target)) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = (param: any) => {
    setAnchorEl(null)
    if (props && props.onClick) {
      props.onClick(param)
    }
  }
  const handleCloseAway = (event: any) => {
    if (anchorEl.contains(event.target)) {
      return
    }
    setAnchorEl(null)
  }
  const classes: EnthalpyDropDownStyles = useStyles()
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  })
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + 'Hover']]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  })

  let icon = null
  switch (typeof buttonIcon) {
    case 'object':
      icon = <props.buttonIcon className={classes.buttonIcon} />
      break
    case 'string':
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>
      break
    default:
      icon = null
      break
  }
  return (
    <div>
      <div>
        <EnthalpyButton
          aria-label='Notifications'
          aria-owns={anchorEl ? 'menu-list' : null}
          aria-haspopup='true'
          {...buttonProps}
          onClick={(e: any) => {
            handleClick(e)
          }}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </EnthalpyButton>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? 'top-start'
              : 'top'
            : left
            ? 'bottom-start'
            : 'bottom'
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true
        })}
      >
        {() => (
          <div id='menu-list'>
            <Grow
              in={Boolean(anchorEl)}
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseAway}>
                  <MenuList role='menu' className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop: any, key: any) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => handleClose('divider')}
                            className={classes.dropdownDividerItem}
                          />
                        )
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => handleClose(prop)}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          </div>
        )}
      </Popper>
    </div>
  )
}

export default EnthalpyDropDown
