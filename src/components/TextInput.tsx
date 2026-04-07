import React, { forwardRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  requiredAsterisk?: boolean;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, requiredAsterisk = false, error, className = '', ...props }, ref) => {
    return (
      <div className={`relative ${className}`}>
        <input
          ref={ref}
          {...props}
          className={`w-full px-4 py-3.5 bg-transparent border ${
            error ? 'border-red-500 focus:border-red-500' : 'border-[#CBC1EE] focus:border-[#6C25FF]'
          } rounded-md text-[13px] text-[#1D2226] font-medium placeholder-[#8C8C8C] outline-none transition-colors`}
        />
        <label
          className={`absolute left-3 -top-2 bg-[#F7F8F9] px-1 text-[12px] font-bold ${
            error ? 'text-red-500' : 'text-[#6C25FF]'
          } tracking-wide pointer-events-none`}
        >
          {label}
          {requiredAsterisk && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {error && <p className="text-red-500 text-[11px] mt-1 ml-1">{error}</p>}
      </div>
    );
  }
);
TextInput.displayName = 'TextInput';
