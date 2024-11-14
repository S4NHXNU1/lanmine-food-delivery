import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Food from './pages/Food';
import { IconBurger, IconHistory, IconSettings } from '@tabler/icons-react';
import McDonald from './pages/McDonald';
import { Toast } from 'bootstrap'
import { useRef } from 'react';
import UnavailableToast from './components/UnavailableToast';
import Setting from './pages/Setting';
import EditMcDonald from './pages/EditMcDonald';
import ManageUser from './pages/ManagerUser';

function App() {

  const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

  return (
  <Router>
    <div className="d-flex">
      <nav
        className="bg-success border-end vh-100 pt-3 sticky-top" 
        style={{ width: '200px' }}
      >
        <h2 className='text-white text-center'><b>LAN MINE</b></h2>
        <ul className="nav d-flex flex-column justify-content-between" style={{ height: '92vh' }}>
          <div>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold" style={{fontSize: '1.25rem'}}>
              <IconBurger stroke={2} className='me-2' />Food
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" style={{fontSize: '1.25rem'}} onClick={triggerToast}>
              <IconHistory stroke={2} className='me-2' />Orders
              </Link>
            </li>
          </div>
          <li className="nav-item">
            <Link to="/setting" className="nav-link fw-bold" style={{fontSize: '1.25rem'}}>
            <IconSettings stroke={2} className='me-2' />Setting
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/mcdonald" element={<McDonald />} />
          <Route path="/setting" element={<Setting />} />
          <Route path='/editmcdonald' element={<EditMcDonald />} />
          <Route path='/manageusers' element={<ManageUser />} />
        </Routes>
        <UnavailableToast ref={toastRef} />
      </div>
    </div>
  </Router>
  );
}

export default App;
