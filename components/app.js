import { Router } from 'preact-router'
import 'normalize.css';

import LotteryPage from '../pages/lottery'

const App = () => (
  <div id="app">
    <Router>
      <LotteryPage path="/" />
    </Router>
  </div>
)

export default App
