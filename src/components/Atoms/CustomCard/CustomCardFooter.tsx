import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// core components
import { cardFooterStyle } from '../../assets/tss/components/cardStyles'
// eslint-disable-next-line no-unused-vars
import { CustomCardFooterProps, EnthalpyCardStyles } from './EnthalpyCard.model'

export default function CardFooter(props: CustomCardFooterProps) {
  const classes: EnthalpyCardStyles = cardFooterStyle()
  const { className, children, muted, ...rest } = props
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.muted]: muted,
    [className]: className !== undefined
  })
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  )
}
