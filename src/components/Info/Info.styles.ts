import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      userSelect: 'none',
      background: 'antiquewhite',
      maxHeight: 'calc(100vh - 60px)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      border: '1px solid rgba(200, 50, 100)',
      borderRadius: 10,
    },
    active: {},
    button: {
      padding: '1px 10px',
      marginTop: 5,
      fontSize: 12,
      background: 'teal',
      userSelect: 'none',
    },
  })
)
