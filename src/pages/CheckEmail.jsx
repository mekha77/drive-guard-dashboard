import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, ChevronLeft } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/Button';

// A1.4 Check your email (resend timer starts at 45 s)
export default function CheckEmail() {
  const email = useLocation().state?.email || 'your email';
  const [wait, setWait] = useState(45);
  useEffect(() => {
    if (wait <= 0) return;
    const id = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(id);
  }, [wait]);

  return (
    <AuthLayout>
      <div className="flex flex-col gap-md">
        <span className="w-[40px] h-[40px] rounded-md bg-raised border border-default grid place-items-center text-primary"><Mail size={18} /></span>
        <div>
          <h1 className="text-h1 text-primary">Check your email</h1>
          <p className="mt-xs text-body text-secondary">We sent a reset link to {email}. It works for 30 minutes.</p>
        </div>
        <Button variant="secondary" size="large" className="w-full" disabled={wait > 0} onClick={() => setWait(45)}>
          {wait > 0 ? `Resend link in 0:${String(wait).padStart(2, '0')}` : 'Resend link'}
        </Button>
        <p className="text-caption text-secondary">Can’t find it? Check your spam folder or ask your company admin.</p>
        <Link to="/reset-password" className="text-caption text-secondary hover:text-primary text-center">Open reset page (demo)</Link>
        <Link to="/login" className="flex items-center justify-center gap-2xs text-label text-secondary hover:text-primary">
          <ChevronLeft size={16} />Back to sign in
        </Link>
      </div>
    </AuthLayout>
  );
}
