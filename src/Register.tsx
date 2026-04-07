import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import { TextInput } from './components/TextInput';

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: 'yes',
    },
  });

  const isAgencyValue = useWatch({ control, name: 'isAgency' });

  const onSubmit = () => {
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5 pt-8 no-scrollbar">
        <div className="mb-8">
          <h1 className="text-[28px] leading-9 font-bold text-[#1D2226] max-w-50">
            Create your PopX account
          </h1>
        </div>

        <div className="flex flex-col gap-5.5 mt-2">
          <TextInput
            label="Full Name"
            placeholder="Marry Doe"
            requiredAsterisk
            error={errors.fullName?.message as string}
            {...register('fullName', { required: 'Full Name is required' })}
          />
          <TextInput
            label="Phone number"
            placeholder="Marry Doe"
            requiredAsterisk
            error={errors.phoneNumber?.message as string}
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9+\-\s()]{7,15}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          <TextInput
            label="Email address"
            placeholder="Marry Doe"
            requiredAsterisk
            error={errors.email?.message as string}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Marry Doe"
            requiredAsterisk
            error={errors.password?.message as string}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <TextInput
            label="Company name"
            placeholder="Marry Doe"
            {...register('companyName')}
          />
        </div>

        <div className="mt-8 mb-4">
          <p className="text-[13px] font-semibold text-[#1D2226] mb-3">
            Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
          </p>
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                className={`w-5.5 h-5.5 rounded-full flex items-center justify-center border-[1.5px] ${
                  isAgencyValue === 'yes' ? 'border-[#6C25FF]' : 'border-[#CBC1EE]'
                }`}
              >
                {isAgencyValue === 'yes' && <div className="w-3 h-3 rounded-full bg-[#6C25FF]" />}
              </div>
              <input
                type="radio"
                value="yes"
                className="hidden"
                {...register('isAgency', { required: true })}
              />
              <span className="text-[15px] font-medium text-[#1D2226]">Yes</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div
                className={`w-5.5 h-5.5 rounded-full flex items-center justify-center border-[1.5px] ${
                  isAgencyValue === 'no' ? 'border-[#6C25FF]' : 'border-[#CBC1EE]'
                }`}
              >
                {isAgencyValue === 'no' && <div className="w-3 h-3 rounded-full bg-[#6C25FF]" />}
              </div>
              <input
                type="radio"
                value="no"
                className="hidden"
                {...register('isAgency', { required: true })}
              />
              <span className="text-[15px] font-medium text-[#1D2226]">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 bg-[#F7F8F9] mt-auto">
        <button
          type="submit"
          className="block w-full bg-[#6C25FF] text-white py-3.5 rounded-md text-center font-semibold text-[15px] hover:bg-[#5a1ceb] transition-colors"
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
