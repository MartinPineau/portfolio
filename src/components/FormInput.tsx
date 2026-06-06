import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  multiline?: boolean;
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
};

const inputClass =
  "border border-[var(--color-gray-light)] rounded-md bg-white px-3 py-2 text-[var(--color-main-dark)] outline-none focus:border-[var(--color-gray-medium)] transition-colors w-full";

const FormInput = ({
  label,
  multiline = false,
  rows = 6,
  ...rest
}: FormInputProps) => {
  return (
    <div
      className="flex flex-col gap-1"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <label className="text-sm text-[var(--color-main-dark)]">{label}</label>
      {multiline ? (
        <textarea className={`${inputClass} resize-none`} rows={rows} />
      ) : (
        <input className={inputClass} {...rest} />
      )}
    </div>
  );
};

export default FormInput;
