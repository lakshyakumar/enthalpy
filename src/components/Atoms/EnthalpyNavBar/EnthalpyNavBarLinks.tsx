/* eslint-disable react/jsx-key */
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import EnthalpyDropDown from '../EnthalpyDropDown/EnthalpyDropDown'
import EnthalpyButton from '../EnthalpyButton/EnthalpyButton'

import { useLinkStyles } from '../../assets/tss/components/headerStyles'

export default function NavBarLinks() {
  const classes = useLinkStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <EnthalpyDropDown
          noLiPadding
          buttonText='Components'
          buttonProps={{
            className: classes.navLink,
            simple: true
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to='/' className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href='google.com'
              className={classes.dropdownLink}
              rel='noreferrer'
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <EnthalpyButton buttonNavLink={"/downloadPage"} className={classes.navLink} simple>
          <CloudDownload className={classes.icons} /> Download
        </EnthalpyButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <EnthalpyButton simple className={classes.navLink}>
            <FontAwesomeIcon icon={faTwitter} className={classes.socialIcons} />
          </EnthalpyButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <EnthalpyButton simple className={classes.navLink}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={classes.socialIcons}
            />
          </EnthalpyButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <EnthalpyButton simple className={classes.navLink}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.socialIcons}
            />
          </EnthalpyButton>
        </Tooltip>
      </ListItem>
    </List>
  )
}
