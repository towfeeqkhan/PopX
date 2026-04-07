import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="flex flex-col justify-end h-full p-5 pb-8">
      <div className="mb-6">
        <h1 className="text-[28px] leading-8.5 font-bold text-[#1D2226] mb-3">
          Welcome to PopX
        </h1>
        <p className="text-[15px] leading-6 text-[#8C8C8C] max-w-62.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <Link
          to="/register"
          className="w-full bg-[#6C25FF] text-white py-3.5 rounded-md text-center font-semibold text-[15px] hover:bg-[#5a1ceb] transition-colors"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="w-full bg-[#CBC1EE] text-[#1D2226] py-3.5 rounded-md text-center font-semibold text-[15px] hover:bg-[#bbaeea] transition-colors"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
