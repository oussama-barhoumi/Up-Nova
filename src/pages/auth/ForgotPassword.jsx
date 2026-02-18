import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updatePasswordByEmail } from '../../store/authStore';
import { useAuthPageAnimations, useButtonAnimation } from '../../hook/useAuthPageAnimations';
import { img } from '../../constant/img';
import { useTheme } from '../../store/themeStore';
import { ThemeToggle } from '../../components/ThemeToggle';

const ForgotPassword = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const submitBtnRef = useRef(null);
  useAuthPageAnimations(cardRef, contentRef);
  useButtonAnimation(submitBtnRef);

  const labelClass = `block text-sm font-medium ${
    isDark ? 'text-slate-200' : 'text-slate-700'
  }`;

  const inputBase =
    'w-full rounded-xl px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition';

  const inputClass = `${inputBase} ${
    isDark
      ? 'border border-slate-700 bg-slate-900/60 text-slate-100 focus:ring-indigo-500'
      : 'border border-slate-300 bg-white text-slate-900 focus:ring-indigo-500'
  }`;

  const subtleTextClass = isDark ? 'text-slate-400' : 'text-slate-500';

  const linkClass = `font-medium ${
    isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'
  }`;

  const smallLinkClass = `text-xs font-medium ${
    isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'
  }`;

  const errorClass = `text-sm rounded-xl px-3 py-2 border ${
    isDark ? 'text-red-400 bg-red-950/40 border-red-900/60' : 'text-red-600 bg-red-50 border-red-200'
  }`;

  const successClass = `text-sm rounded-xl px-3 py-2 border ${
    isDark
      ? 'text-emerald-300 bg-emerald-950/40 border-emerald-900/60'
      : 'text-emerald-700 bg-emerald-50 border-emerald-200'
  }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    if (!newPassword) {
      setError('Please enter a new password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const result = updatePasswordByEmail(email, newPassword);
    if (!result.success) {
      setError(result.error);
      return;
    }
    setSuccess(true);
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 overflow-hidden ${
        isDark ? 'bg-[#020617] text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <ThemeToggle />
      <div className="w-full max-w-md perspective-[1200px]">
        <div
          ref={cardRef}
          className={`px-8 py-10 ${
            isDark
              ? 'rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur-xl'
              : 'rounded-2xl bg-white shadow-lg shadow-slate-200'
          }`}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <div ref={contentRef}>
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img src={img.logo} alt="UP Nova logo" className="h-16 w-auto" />
              </div>
              <h1
                className={`text-2xl font-semibold tracking-tight ${
                  isDark ? 'text-slate-50' : 'text-slate-900'
                }`}
              >
                Reset password
              </h1>
              <p className={`mt-1 text-sm ${subtleTextClass}`}>
                Enter your email and a new password. You can then log in with the new password.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {error && <p className={errorClass}>{error}</p>}
              {success && (
                <p className={successClass}>Password updated. Redirecting to login…</p>
              )}
              <div className="space-y-1">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className={labelClass}>New password</label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className={smallLinkClass}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={inputClass}
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className={labelClass}>Confirm new password</label>
                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className={smallLinkClass}
                  >
                    {showConfirm ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClass}
                  placeholder="••••••••"
                />
              </div>

              <button
                ref={submitBtnRef}
                type="submit"
                className={`w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition ${
                  isDark ? 'shadow-indigo-900/60' : 'shadow-indigo-400/40'
                }`}
              >
                Update password
              </button>
            </form>

            <p className={`mt-6 text-center text-sm ${subtleTextClass}`}>
              <Link to="/login" className={linkClass}>
                Back to log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
