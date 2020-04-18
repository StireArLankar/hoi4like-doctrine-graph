import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    top: {},
    bottom: {},
    active: {},
    leaf: {
      height: 100,
      width: 200,
      margin: `10px auto`,
      display: 'grid',
      placeItems: 'center',
      color: 'white',
      position: 'relative',

      background: 'black',
      transition: 'background 0.3s ease',
      '&:hover, &$active': {
        background: 'darkblue',
      },

      '&::before, &::after': {
        position: 'absolute',
        left: '50%',
        width: 2,
        height: 10,
        transform: 'translateX(-50%)',
        background: 'black',
      },

      '&$top::before': {
        content: '""',
        top: -10,
      },
      '&$bottom::after': {
        content: '""',
        bottom: -10,
      },
    },
    leafWrapper: {
      position: 'relative',
      width: '100%',
    },
  })
)
