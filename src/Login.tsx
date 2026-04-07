import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextInput } from "./components/TextInput";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate("/profile");
  };

  return (
    <div className="flex flex-col h-full p-5 pt-8">
      <div className="mb-8">
        <h1 className="text-[28px] leading-9 font-bold text-[#1D2226] mb-3 max-w-50">
          Signin to your PopX account
        </h1>
        <p className="text-[15px] leading-6 text-[#8C8C8C] max-w-62.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 flex-1 mt-2"
      >
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          error={errors.email?.message as string}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message as string}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white py-3.5 rounded-md text-center font-semibold text-[15px] hover:bg-[#5a1ceb] transition-colors mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
