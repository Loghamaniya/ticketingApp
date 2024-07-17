import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import store from './store';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import './index.css'; // Ensure Tailwind CSS is included
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <Provider store={store}>
      <UserProvider> 
        <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </UserProvider>
    </Provider>
  );
};

export default App
