import HomeLogo from '../components/UI/HomeLogo';
import { banner } from '../components/details';
import { Link, useNavigate } from 'react-router';
const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div class="flex h-screen w-full overflow-hidden">
      <div class="mr-24 hidden lg:block">
        <img
          class="h-full object-contain"
          src={banner}
          alt="Illustration of students studying"
        />
      </div>

      <div class="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-24">
        <div class="scroll-container w-full max-w-md space-y-8 overflow-y-auto px-2.5 py-7">
          <div class="mb-8 flex justify-center">
            <HomeLogo />
          </div>

          <div class="mt-16">
            <h2 class="mb-8 text-center text-4xl font-medium text-[#121212]">
              Forgot Password
            </h2>
            <p class="mt-1 text-center leading-6 text-[#3D3D3D]">
              Enter the email address you used to create your account to receive
              instructions on how to reset your password
            </p>
          </div>

          <form class="space-y-4">
            <div>
              <label for="email" class="block text-[#121212]">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                class="mt-1 w-full rounded-md border border-none bg-[#F5F7FA] px-4 py-3 focus:ring-2 focus:ring-[#6D28D2] focus:outline-none"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/otp');
              }}
              class="w-full rounded-md bg-[#6D28D2] py-2 text-white hover:bg-purple-700"
            >
              Continue
            </button>
          </form>

          <p class="mt-4 text-center text-sm">
            {' '}
            Remember your password?
            <Link to="/SignIn" className="text-[#6D28D2] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
