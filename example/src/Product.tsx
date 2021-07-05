import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import {
  NavBar,
  NavBarLink,
  GridContainer,
  GridItem,
  EnthalpyFooter,
  EnthalpyParallax,
  EnthalpyButton,
  InfoAreaSection,
  CardAreaSection
} from 'enthalpy'

import useStyles from './styles'

import team1 from './images/faces/amanda.jpeg'
import team2 from './images/faces/chad.jpg'
import team3 from './images/faces/marquis.jpg'
import backgroundImage from './images/backgroundImage.jpg'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import CakeIcon from '@material-ui/icons/Cake'

const Product = () => {
  const classes = useStyles()
  const dashboardRoutes: never[] = []

  const information = [
    {
      name: 'Amanda Cerny',
      role: 'Model',
      img: team1,
      description:
        'You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to follow them outside the site.',
      grid: {
        xs: 12,
        sm: 12,
        md: 6
      },
      footerChildren: () => (
        <>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
        </>
      )
    },
    {
      name: 'Chad plight',
      role: 'Designer',
      img: team2,
      description:
        'You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to follow them outside the site.',
      grid: {
        xs: 12,
        sm: 12,
        md: 6
      },
      footerChildren: () => (
        <>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
        </>
      )
    },
    {
      name: 'Marquis Jenner',
      role: 'Model',
      img: team3,
      description:
        'You can write here details about one of your team members. You can give more details about what they do. Feel free to add some for people to be able to follow them outside the site.',
      grid: {
        xs: 12,
        sm: 12,
        md: 6
      },
      footerChildren: () => (
        <>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
          <EnthalpyButton
            justIcon
            simple
            style={{
              margin: '5px'
            }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                marginTop: '0',
                width: '100%',
                transform: 'none',
                left: '0',
                top: '0',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
                color: '#999'
              }}
            />
          </EnthalpyButton>
        </>
      )
    }
  ]

  const productData = [
    {
      title: 'Responsive',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: MobileFriendlyIcon,
      iconColor: 'info',
      xs: 12,
      sm: 6,
      md: 4
    },
    {
      title: 'Well documented',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: FindInPageIcon,
      iconColor: 'success',
      xs: 12,
      sm: 6,
      md: 4
    },
    {
      title: 'A Piece of cake to include',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: CakeIcon,
      iconColor: 'danger',
      xs: 12,
      sm: 6,
      md: 4
    }
  ]
  const brand = 'Enthalpy'
  const links = ['Enthalpy Framework', 'About us', 'Blog', 'Licenses']

  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <div>
        <NavBar
          color='transparent'
          routes={dashboardRoutes}
          brand='Enthalpy'
          rightLinks={<NavBarLink />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
        />
        <EnthalpyParallax filter image={backgroundImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  With Great Power Comes Great Responsibilities.
                </h1>
                <h4 className={classes.titleDesc}>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
                <br />
                <EnthalpyButton
                  color='primary'
                  variant='contained'
                  href='https://google.com'
                >
                  <FontAwesomeIcon icon={faPlay} />
                  Watch video
                </EnthalpyButton>
              </GridItem>
            </GridContainer>
          </div>
        </EnthalpyParallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <InfoAreaSection
              description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
              title="Let's talk product"
              products={productData}
            />
            <CardAreaSection data={information} title='Meet Our Team' />
          </div>
        </div>
        <EnthalpyFooter brand={brand} links={links} whiteFont />
      </div>
    </div>
  )
}

export default Product
