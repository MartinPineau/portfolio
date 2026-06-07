import { type ContactMessage } from "../types";
import Button from "./Button";

type Props = {
  message: ContactMessage;
  onClose: () => void;
};

const ContactMessageModal = ({ message, onClose }: Props) => {
  const sentAt = new Date(message.sentAt).toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className="text-2xl font-bold text-[var(--color-main-dark)] mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {message.name}
        </h2>
        <p
          className="text-sm text-[var(--color-gray-medium)] mb-6"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {message.email} · {sentAt}
        </p>

        <p
          className="text-base text-[var(--color-main-dark)] leading-relaxed whitespace-pre-wrap mb-8"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {message.message}
        </p>

        <div className="flex justify-end">
          <Button variant="outline" type="button" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactMessageModal;
