import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

// A1 Login, A1.1 Signing in, A1.2 Error. Fake sign-in: only the password "Test@1234" works.
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('idle'); // idle | signing | error

  const signIn = (e) => {
    e.preventDefault();
    setState('signing');
    setTimeout(() => {
      if (password === 'Test@1234') navigate('/overview');
      else setState('error');
    }, 1200);
  };

  return (
    <AuthLayout>
      <form onSubmit={signIn} className="flex flex-col gap-md">
        <div>
          <h1 className="text-h1 text-primary">Sign in to your fleet dashboard</h1>
          <p className="mt-xs text-body text-secondary">Use your company email.</p>
        </div>
        <Input label="Work email" type="email" icon={Mail} required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="mona.adel@nilefleet.com" hint="Your account is set up when your company joins Drive Guard." />
        <Input label="Password" type="password" icon={Lock} required value={password}
          onChange={(e) => { setPassword(e.target.value); if (state === 'error') setState('idle'); }}
          error={state === 'error' ? 'Wrong password. Check Caps Lock and try again.' : null} />
        <div className="flex items-center justify-between">
          <Checkbox label="Keep me signed in" defaultChecked />
          <Link to="/forgot-password" className="text-label text-secondary hover:text-primary">Forgot password?</Link>
        </div>
        <Button size="large" className="w-full" disabled={state === 'signing'}>
          {state === 'signing' ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>
    </AuthLayout>
  );
}
