import { Camera } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col h-full bg-[#F7F8F9] w-full border-t border-transparent">
      {/* Header */}
      <div className="bg-white py-4.5 px-5 shadow-sm">
        <h1 className="text-[17px] leading-5.5 text-[#1D2226] font-medium tracking-wide">
          Account Settings
        </h1>
      </div>

      {/* Profile Info Area */}
      <div className="flex-1 bg-[#F7F8F9]">
        <div className="px-5 py-8 border-b-[1.5px] border-dashed border-[#CBC1EE]">
          <div className="flex gap-5 items-center mb-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-19 h-19 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <Camera size={12} className="text-white" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-1">
              <span className="text-[15px] font-bold text-[#1D2226] leading-none">
                Julia
              </span>
              <span className="text-[14px] font-medium text-[#1D2226] leading-none">
                Julia68@gmail.com
              </span>
            </div>
          </div>

          <p className="text-[13px] leading-5.5 text-[#1D2226] font-medium pr-2">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
