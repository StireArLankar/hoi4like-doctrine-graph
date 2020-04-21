import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    active: {},
    leaf: {
      height: 100,
      width: 200,
      margin: `20px auto`,
      display: 'grid',
      placeItems: 'center',
      color: 'white',
      position: 'relative',

      background: 'black',
      transition: 'background 0.3s ease',
      '&$active': {
        background: 'darkblue',
      },
    },
    leafWrapper: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      textAlign: 'center',
    },
    top: {},
    bottom: {},
    connector: {
      left: '50%',
      position: 'absolute',
      '&$top': {
        top: 0,
      },
      '&$bottom': {
        bottom: 0,
      },
    },
    button: {
      padding: '1px 10px',
      marginTop: 5,
      fontSize: 12,
      background: 'teal',
      userSelect: 'none',
    },
  })
)
