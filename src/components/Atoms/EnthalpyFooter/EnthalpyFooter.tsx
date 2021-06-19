import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui core components
import { List, ListItem } from '@material-ui/core'
import {
  // eslint-disable-next-line no-unused-vars
  EnthalpyFooterProps,
  // eslint-disable-next-line no-unused-vars
  EnthalpyFooterStyles
} from './EnthalpyFooter.model'

import useStyles from '../../assets/tss/components/footerStyle'

const EnthalpyFooter: React.FC<EnthalpyFooterProps> = (props): JSX.Element => {
  const classes: EnthalpyFooterStyles = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })

  const linksComponents = props.links.map((item, index) => (
    <ListItem className={classes.inlineBlock} key={index}>
      <a href='https://google.com' className={classes.block} rel='noreferrer'>
        {item}
      </a>
    </ListItem>
  ))

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>{linksComponents}</List>
        </div>
        <div className={classes.right}>
          <a href='https://google.com' className={aClasses} rel='noreferrer'>
            {props.brand}
          </a>
        </div>
      </div>
    </footer>
  )
}
export default EnthalpyFooter
