import { useState, type KeyboardEvent } from "react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  tags: string[];
  onChange: (tags: string[]) => void;
};

const TagInput = ({ tags, onChange }: Props) => {
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    const value = tagInput.trim();
    if (value && !tags.includes(value)) {
      onChange([...tags, value]);
    }
    setTagInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => onChange(tags.filter((t) => t !== tag));

  return (
    <div
      className="flex flex-col gap-1"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <label className="text-sm text-[var(--color-main-dark)]">Tags</label>
      <div className="flex flex-wrap items-center gap-2 border border-[var(--color-gray-light)] rounded-md bg-white px-3 py-2 focus-within:border-[var(--color-gray-medium)] transition-colors">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 bg-[var(--color-main-yellow)]/20 text-[var(--color-main-dark)] text-xs font-semibold px-2 py-1 rounded-full"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-red-500 transition-colors cursor-pointer"
              aria-label={`Remove ${tag}`}
            >
              <FaXmark className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          className="flex-1 min-w-[80px] outline-none text-sm text-[var(--color-main-dark)] bg-transparent"
          type="text"
          placeholder="Add tag…"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
        />
      </div>
    </div>
  );
};

export default TagInput;
