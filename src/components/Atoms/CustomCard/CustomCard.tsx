import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// core components
import { cardStyle } from '../../assets/tss/components/cardStyles'
// eslint-disable-next-line no-unused-vars
import { CustomCardProps, EnthalpyCardStyles } from './EnthalpyCard.model'

export default function Card(props: CustomCardProps) {
  const classes: EnthalpyCardStyles = cardStyle()
  const { className, children, plain, carousel, center, right, ...rest } = props
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [classes.center]: center,
    [classes.right]: right,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}
