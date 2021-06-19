import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// core components
import { cardBodyStyle } from '../../assets/tss/components/cardStyles'
// eslint-disable-next-line no-unused-vars
import { CustomCardBodyProps, EnthalpyCardStyles } from './EnthalpyCard.model'

export default function CardBody(props: CustomCardBodyProps) {
  const classes: EnthalpyCardStyles = cardBodyStyle()
  const { className, children, title, subtitle, ...rest } = props
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {title && <h4 className={classes.cardTitle}>{title}</h4>}
      {subtitle && <h6 className={classes.cardSubtitle}>{subtitle}</h6>}
      {children}
    </div>
  )
}
