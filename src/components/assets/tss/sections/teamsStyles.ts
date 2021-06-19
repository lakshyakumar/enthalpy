// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { cardTitle, title } from '../enthalpyStyles'

const imagesStyles = {
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  imgRounded: {
    borderRadius: '6px !important'
  },
  imgRoundedCircle: {
    borderRadius: '50% !important'
  },
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  imgGallery: {
    width: '100%',
    marginBottom: '2.142rem'
  },
  imgCardTop: {
    width: '100%',
    borderTopLeftRadius: 'calc(.25rem - 1px)',
    borderTopRightRadius: 'calc(.25rem - 1px)'
  },
  imgCardBottom: {
    width: '100%',
    borderBottomLeftRadius: 'calc(.25rem - 1px)',
    borderBottomRightRadius: 'calc(.25rem - 1px)'
  },
  imgCard: {
    width: '100%',
    borderRadius: 'calc(.25rem - 1px)'
  }
  // imgCardOverlay: {
  //   position: 'absolute',
  //   top: '0',
  //   right: '0',
  //   bottom: '0',
  //   left: '0',
  //   padding: '1.25rem'
  // }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '70px 0',
      textAlign: 'center'
    },
    title: {
      ...title,
      marginBottom: '1rem',
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none',
      fontSize: theme.typography.h4.fontSize
    },
    ...imagesStyles,
    itemGrid: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    cardTitle,
    smallTitle: {
      color: '#6c757d'
    },
    description: {
      color: '#999',
      fontSize: theme.typography.body1.fontSize
    },
    justifyCenter: {
      justifyContent: 'center !important'
    },
    socials: {
      marginTop: '0',
      width: '100%',
      transform: 'none',
      left: '0',
      top: '0',
      height: '100%',
      lineHeight: '41px',
      fontSize: '20px',
      color: '#999'
    },
    margin5: {
      margin: '5px'
    }
  })
)

export default useStyles
