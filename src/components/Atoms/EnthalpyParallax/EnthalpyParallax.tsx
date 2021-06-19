import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// core components
import useStyles from '../../assets/tss/components/parallaxStyles'
import {
  // eslint-disable-next-line no-unused-vars
  EnthalpyParallaxProps,
  // eslint-disable-next-line no-unused-vars
  EnthalpyParallaxStyles
} from './EnthalpyParallax.model'

const EnthalpyParallax: React.FC<EnthalpyParallaxProps> = (props) => {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  )
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
  }
  const { filter, className, children, style, image, small } = props
  const classes: EnthalpyParallaxStyles = useStyles()
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  })
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: 'url(' + image + ')',
        transform: transform
      }}
    >
      {children}
    </div>
  )
}

export default EnthalpyParallax
