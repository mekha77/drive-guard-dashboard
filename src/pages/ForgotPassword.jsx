import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ChevronLeft } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

// A1.3 Forgot password
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  return (
    <AuthLayout>
      <form onSubmit={(e) => { e.preventDefault(); navigate('/check-email', { state: { email } }); }} className="flex flex-col gap-md">
        <div>
          <h1 className="text-h1 text-primary">Reset your password</h1>
          <p className="mt-xs text-body text-secondary">Enter your work email and we’ll send you a link to set a new password.</p>
        </div>
        <Input label="Work email" type="email" icon={Mail} required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button size="large" className="w-full">Send reset link</Button>
        <Link to="/login" className="flex items-center justify-center gap-2xs text-label text-secondary hover:text-primary">
          <ChevronLeft size={16} />Back to sign in
        </Link>
      </form>
    </AuthLayout>
  );
}
