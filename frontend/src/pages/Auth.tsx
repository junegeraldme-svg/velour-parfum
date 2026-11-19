import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css';

export default function Auth() {
  const [isRightActive, setIsRightActive] = useState(false);

  const navigate = useNavigate();

  // =========================
  // GOOGLE LOGIN
  // =========================
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const profile = await res.json();

        console.log('Google user:', profile);

        navigate('/');
      } catch (error) {
        console.error('Google login error:', error);
      }
    },

    onError: () => {
      console.error('Google login failed');
    },
  });

  // =========================
  // FACEBOOK LOGIN
  // =========================
  const handleFacebookLogin = () => {
    // @ts-expect-error Facebook SDK is loaded globally through index.html
    if (!window.FB) {
      console.error('Facebook SDK is not loaded yet.');
      alert('Facebook Login is still loading. Please try again.');
      return;
    }

    // @ts-expect-error Facebook SDK is loaded globally through index.html
    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken;

          console.log('Facebook access token:', accessToken);

          // Get Facebook profile
          // @ts-expect-error Facebook SDK is loaded globally through index.html
          window.FB.api(
            '/me',
            {
              fields: 'name',
            },
            (profile: any) => {
              if (profile.error) {
                console.error(
                  'Facebook profile error:',
                  profile.error
                );
                return;
              }

              console.log('Facebook user:', profile);

              // Facebook login successful
              navigate('/');
            }
          );
        } else {
          console.log('Facebook login cancelled.');
        }
      },
      {
        // IMPORTANT:
        // Do NOT add "email" here.
        // Your Meta app currently rejects the email permission.
        scope: 'public_profile',
      }
    );
  };

  return (
    <div className="auth-page">
      <div
        className={`auth-container bg-white rounded-2xl shadow-2xl ${
          isRightActive ? 'right-active' : ''
        }`}
      >

        {/* =========================
            SIGN IN PANEL
        ========================= */}
        <div className="form-panel sign-in-panel flex items-center">
          <div className="w-full px-10 md:px-14 py-10">

            <p className="text-xs tracking-widest text-amber-600 uppercase mb-2">
              Welcome back
            </p>

            <h1 className="text-2xl font-semibold text-neutral-900 mb-6">
              Sign In
            </h1>

            {/* SOCIAL LOGIN BUTTONS */}
            <div className="flex gap-3 mb-6">

              {/* GOOGLE */}
              <button
                type="button"
                onClick={() => googleLogin()}
                className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:border-amber-400 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>

                Google
              </button>

              {/* FACEBOOK */}
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:border-amber-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79v8.44C19.61 23.08 24 18.09 24 12.07z" />
                </svg>

                Facebook
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-neutral-200" />

              <span className="text-xs text-neutral-400">
                or sign in with email
              </span>

              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* SIGN IN FORM */}
            <form className="space-y-5">

              <div className="floating-label-group">
                <input
                  type="email"
                  id="si-email"
                  autoComplete="off"
                  placeholder=" "
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />

                <label htmlFor="si-email">
                  Email address
                </label>
              </div>

              <div className="floating-label-group">
                <input
                  type="password"
                  id="si-password"
                  autoComplete="off"
                  placeholder=" "
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />

                <label htmlFor="si-password">
                  Password
                </label>
              </div>

              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-xs text-amber-600 hover:text-amber-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Sign In
              </button>
            </form>

            <p className="md:hidden text-center text-sm text-neutral-500 mt-6">
              Don't have an account?{' '}

              <button
                onClick={() => setIsRightActive(true)}
                className="text-amber-600 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* =========================
            SIGN UP PANEL
        ========================= */}
        <div className="form-panel sign-up-panel flex items-center">
          <div className="w-full px-10 md:px-14 py-10">

            <p className="text-xs tracking-widest text-amber-600 uppercase mb-2">
              Join us
            </p>

            <h1 className="text-2xl font-semibold text-neutral-900 mb-6">
              Create Account
            </h1>

            {/* SOCIAL LOGIN BUTTONS */}
            <div className="flex gap-3 mb-6">

              {/* GOOGLE */}
              <button
                type="button"
                onClick={() => googleLogin()}
                className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:border-amber-400 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>

                Google
              </button>

              {/* FACEBOOK */}
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:border-amber-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79v8.44C19.61 23.08 24 18.09 24 12.07z" />
                </svg>

                Facebook
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-neutral-200" />

              <span className="text-xs text-neutral-400">
                or sign up with email
              </span>

              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* SIGN UP FORM */}
            <form className="space-y-5">

              <div className="floating-label-group">
                <input
                  type="text"
                  id="su-name"
                  autoComplete="off"
                  placeholder=" "
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />

                <label htmlFor="su-name">
                  Full name
                </label>
              </div>

              <div className="floating-label-group">
                <input
                  type="email"
                  id="su-email"
                  autoComplete="off"
                  placeholder=" "
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />

                <label htmlFor="su-email">
                  Email address
                </label>
              </div>

              <div className="floating-label-group">
                <input
                  type="password"
                  id="su-password"
                  autoComplete="off"
                  placeholder=" "
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />

                <label htmlFor="su-password">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Create Account
              </button>
            </form>

            <p className="md:hidden text-center text-sm text-neutral-500 mt-6">
              Already have an account?{' '}

              <button
                onClick={() => setIsRightActive(false)}
                className="text-amber-600 font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* =========================
            OVERLAY
        ========================= */}
        <div className="overlay-container hidden md:block">
          <div className="overlay">

            <div className="overlay-panel overlay-left text-white">
              <h2 className="text-2xl font-semibold mb-3">
                Welcome Back
              </h2>

              <p className="text-sm text-neutral-300 mb-6">
                Sign in to continue your Velour Parfum journey.
              </p>

              <button
                onClick={() => setIsRightActive(false)}
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-2.5 rounded-full transition-colors"
              >
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right text-white">
              <h2 className="text-2xl font-semibold mb-3">
                New Here?
              </h2>

              <p className="text-sm text-neutral-300 mb-6">
                Create an account and discover your signature scent.
              </p>

              <button
                onClick={() => setIsRightActive(true)}
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-2.5 rounded-full transition-colors"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}