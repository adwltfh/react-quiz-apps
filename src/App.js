import { Provider } from 'react-redux'

import { Container, Box } from '@mui/material'

import store from './config/redux/store'
import GlobalRoutes from './router/Router'


function App() {
  return (
    <Container maxWidth='sm'>
      <Box mt={5} textAlign='center'>
        <GlobalRoutes />
      </Box>
    </Container>
  )
}

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppContainer
