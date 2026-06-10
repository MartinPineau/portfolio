import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FormInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  label: string;
  error?: string;
  multiline?: boolean;
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const inputClass =
  "border border-[var(--color-gray-light)] rounded-md bg-white px-3 py-2 text-[var(--color-main-dark)] outline-none focus:border-[var(--color-gray-medium)] transition-colors w-full";

const FormInput = ({
  label,
  error,
  multiline = false,
  rows = 6,
  onChange,
  ...rest
}: FormInputProps) => {
  return (
    <div
      className="flex flex-col gap-1"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <label className="text-sm text-[var(--color-main-dark)]">{label}</label>
      {multiline ? (
        <textarea
          className={`${inputClass} resize-none`}
          rows={rows}
          name={rest.name}
          value={rest.value as string}
          onChange={onChange as ChangeEventHandler<HTMLTextAreaElement>}
        />
      ) : (
        <input
          className={inputClass}
          {...rest}
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        />
      )}
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default FormInput;
