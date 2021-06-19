```jsx
import CardAreaSection from './CardAreaSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EnthalpyButton } from '../../../Atoms'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import team1 from '../../../assets/images/faces/amanda.jpeg'
import team2 from '../../../assets/images/faces/chad.jpg'
import team3 from '../../../assets/images/faces/marquis.jpg'

const information = [
  {
    name: 'amanda cerny',
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
          className={{
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

;<CardAreaSection data={information} title='Meet Our Team' />
```
