import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import ResetPassword from './pages/ResetPassword';
import Overview from './pages/Overview';
import OverviewEmpty from './pages/OverviewEmpty';
import OverviewLoading from './pages/OverviewLoading';

// Create each page file in src/pages/ first (guide, step 4).
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/empty" element={<OverviewEmpty />} />
        <Route path="/overview/loading" element={<OverviewLoading />} />
      </Routes>
    </BrowserRouter>
  );
}
