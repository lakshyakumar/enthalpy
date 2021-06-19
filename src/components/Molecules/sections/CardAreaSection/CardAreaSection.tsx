import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/icons

// core components
import {
  GridContainer,
  GridItem,
  Card,
  CardBody,
  CardFooter
} from '../../../Atoms'

import useStyles from '../../../assets/tss/sections/teamsStyles'
import {
  // eslint-disable-next-line no-unused-vars
  CardAreaSectionStyles,
  // eslint-disable-next-line no-unused-vars
  CardAreaSectionProps
} from './CardAreaSection.model'

export const CardAreaSection: React.FC<CardAreaSectionProps> = (props) => {
  const { data, title } = props
  const classes: CardAreaSectionStyles = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )

  const information = data.map((item: any, index: number) => (
    <GridItem xs={12} sm={12} md={4} key={index}>
      <Card plain>
        <GridItem
          xs={item.grid.xs}
          sm={item.grid.sm}
          md={item.grid.md}
          className={classes.itemGrid}
        >
          <img src={item.img} alt='...' className={imageClasses} />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {item.name}
          <br />
          <small className={classes.smallTitle}>{item.role}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{item.description}</p>
        </CardBody>
        <CardFooter className={classes.justifyCenter}>
          {item.footerChildren()}
        </CardFooter>
      </Card>
    </GridItem>
  ))

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <div>
        <GridContainer>{information}</GridContainer>
      </div>
    </div>
  )
}

export default CardAreaSection
