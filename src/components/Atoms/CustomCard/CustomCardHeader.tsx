import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// core components
import { cardHeaderStyle } from '../../assets/tss/components/cardStyles'
// eslint-disable-next-line no-unused-vars
import { CustomCardHeaderProps, EnthalpyCardStyles } from './EnthalpyCard.model'

export default function CardHeader(props: CustomCardHeaderProps) {
  const classes: EnthalpyCardStyles = cardHeaderStyle()
  const { className, children, color, plain, ...rest } = props
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  })
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
}
