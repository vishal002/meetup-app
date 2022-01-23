import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetups />}>
          </Route>
          <Route path='/new-meetup' element={<NewMeetup />}>
          </Route>
          <Route path='/favorites' element={<Favorites />} >
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
