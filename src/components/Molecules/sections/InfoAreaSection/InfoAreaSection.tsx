import React from 'react'

// core components

import useStyles from '../../../assets/tss/sections/productStyles'
import { GridContainer, GridItem, InfoArea } from '../../../Atoms'
import {
  // eslint-disable-next-line no-unused-vars
  InfoAreaSectionProps,
  // eslint-disable-next-line no-unused-vars
  InforAreaSectionStyles
} from './InfoAreaSection.model'

const InfoAreaSection: React.FC<InfoAreaSectionProps> = (props) => {
  const classes: InforAreaSectionStyles = useStyles()
  const infoAreas = props.products.map((item: any, index: any) => {
    return (
      <GridItem xs={item.xs} sm={item.sm} md={item.md} key={index}>
        <InfoArea
          title={item.title}
          description={item.description}
          icon={item.icon}
          iconColor={item.iconColor}
          vertical
        />
      </GridItem>
    )
  })
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{props.title}</h2>
          <h5 className={classes.description}>{props.description}</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>{infoAreas}</GridContainer>
      </div>
    </div>
  )
}

export default InfoAreaSection
