import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 'max-content',
      position: 'relative',
    },
    table: {},
    row: {
      display: 'grid',
      position: 'relative',
    },
    subtree: {
      display: 'grid',
      gridColumnGap: 22,
      placeItems: 'center',
      position: 'relative',
    },
  })
)
