import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, CircleCheck, TriangleAlert } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

// A1.5 Set new password
export default function ResetPassword() {
  const navigate = useNavigate();
  const [pw, setPw] = useState('');
  const [confirm, setConfirm] = useState('');
  const rules = [
    ['At least 8 characters', pw.length >= 8],
    ['Includes a number', /\d/.test(pw)],
    ['Includes a symbol (!@#…)', /[^A-Za-z0-9]/.test(pw)],
    ['Both passwords match', pw !== '' && pw === confirm],
  ];
  const ok = rules.every(([, passed]) => passed);
  return (
    <AuthLayout>
      <form onSubmit={(e) => { e.preventDefault(); if (ok) navigate('/login'); }} className="flex flex-col gap-md">
        <div>
          <h1 className="text-h1 text-primary">Set a new password</h1>
          <p className="mt-xs text-body text-secondary">Choose a password you don’t use anywhere else.</p>
        </div>
        <Input label="New password" type="password" icon={Lock} value={pw} onChange={(e) => setPw(e.target.value)} />
        <Input label="Confirm password" type="password" icon={Lock} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <ul className="flex flex-col gap-2xs text-caption">
          {rules.map(([text, passed]) => (
            <li key={text} className={`flex items-center gap-xs ${passed ? 'text-safe' : 'text-secondary'}`}>
              {passed ? <CircleCheck size={14} /> : <TriangleAlert size={14} />}{text}
            </li>
          ))}
        </ul>
        <Button size="large" className="w-full" disabled={!ok}>Save and sign in</Button>
      </form>
    </AuthLayout>
  );
}
