import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import useStyles from '../../assets/tss/components/infoStyles'
// eslint-disable-next-line no-unused-vars
import { EnthalpyInfoAreaStyles, EnthalpyInfoProps } from './InfoArea.model'
// @material-ui/core components

const InfoArea: React.FC<EnthalpyInfoProps> = (props) => {
  const classes: EnthalpyInfoAreaStyles = useStyles()
  const { title, description, iconColor, vertical } = props
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  })
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  })
  return (
    <div className={classes.infoArea}>
      {props.icon && (
        <div className={iconWrapper}>
          <props.icon className={iconClasses} />
        </div>
      )}
      <div className={classes.descriptionWrapper}>
        {title && <h4 className={classes.title}>{title}</h4>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
    </div>
  )
}

export default InfoArea
