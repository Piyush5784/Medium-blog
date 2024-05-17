import { ChangeEvent, memo } from "react";

interface LabeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const LabeledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInputType) => {
  return (
    <div>
      <label className="block mb-2 text-md pl-0 p-2 font-semibold text-black">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default memo(LabeledInput);
