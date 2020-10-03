import { Router } from 'preact-router'

import LotteryPage from '../pages/lottery'

const App = () => (
  <Router>
    <LotteryPage path="/lottery" />
  </Router>
)

export default App
