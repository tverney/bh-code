import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const UITheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF'
    },
    secondary: {
      main: '#4c55a5'
    },
    highlight: {
      main: '#28a89c'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#f6f8fa'
    }
  }
})

export default UITheme
