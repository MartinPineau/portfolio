import type { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  multiline?: boolean;
  lines?: number;
};

const inputClass =
  "border border-[var(--color-gray-light)] rounded-md bg-white px-3 py-2 text-[var(--color-main-dark)] outline-none focus:border-[var(--color-gray-medium)] transition-colors w-full";

const FormInput = ({ label, multiline = false, ...rest }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1" style={{ fontFamily: "var(--font-nunito)" }}>
      <label className="text-sm text-[var(--color-main-dark)]">{label}</label>
      {multiline ? (
        <textarea className={`${inputClass} resize-none`} rows={rest.lines ?? 6} />
      ) : (
        <input className={inputClass} {...rest} />
      )}
    </div>
  );
};

export default FormInput;
