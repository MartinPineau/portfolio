import { useRef } from "react";
import { FaUpload } from "react-icons/fa6";

type Props = {
  value: string;
  onChange: (image: string) => void;
  error?: string;
};

const ImageField = ({ value, onChange, error }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="flex flex-col gap-1"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <label className="text-sm text-[var(--color-main-dark)]">Image</label>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center gap-2 border border-dashed border-[var(--color-gray-medium)] rounded-md px-3 py-2 text-sm text-[var(--color-gray-medium)] hover:border-[var(--color-main-dark)] hover:text-[var(--color-main-dark)] transition-colors cursor-pointer"
      >
        <FaUpload className="w-3.5 h-3.5" />
        Upload an image
      </button>
      <input
        className="border border-[var(--color-gray-light)] rounded-md bg-white px-3 py-2 text-[var(--color-main-dark)] outline-none focus:border-[var(--color-gray-medium)] transition-colors w-full text-sm mt-1"
        type="text"
        placeholder="…or paste an image URL"
        value={value.startsWith("data:") ? "" : value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default ImageField;
