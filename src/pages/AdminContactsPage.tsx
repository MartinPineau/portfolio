import { useState } from "react";
import { type ContactMessage } from "../types";
import { useContacts } from "../hooks/useContacts";
import ContactMessageModal from "../components/ContactMessageModal";

const AdminContactsPage = () => {
  const { messages, markAsRead } = useContacts();
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null,
  );

  const handleOpen = (message: ContactMessage) => {
    setSelectedMessage(message);
    if (!message.read) markAsRead(message.id);
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1
          className="text-3xl font-bold text-[var(--color-main-dark)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Messages
        </h1>
        {unreadCount > 0 && (
          <span
            className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-main-yellow)] text-[var(--color-main-dark)]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {unreadCount} unread
          </span>
        )}
      </div>

      {messages.length === 0 ? (
        <p
          className="text-[var(--color-gray-medium)]"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          No messages yet.
        </p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            <thead>
              <tr className="border-b border-[var(--color-gray-light)] text-left text-[var(--color-gray-medium)]">
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Message</th>
                <th className="px-6 py-4 font-semibold">Received</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr
                  key={message.id}
                  onClick={() => handleOpen(message)}
                  className={`border-b border-[var(--color-gray-light)] last:border-0 hover:bg-[var(--color-bg-light)] transition-colors cursor-pointer ${
                    message.read ? "opacity-60" : "bg-[var(--color-main-yellow)]/5"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        message.read
                          ? "bg-[var(--color-gray-medium)]"
                          : "bg-[var(--color-main-yellow)]"
                      }`}
                      aria-label={message.read ? "Read" : "Unread"}
                    />
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-[var(--color-main-dark)] ${
                    message.read ? "font-normal" : "font-bold"
                  }`}>
                    {message.name}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${
                    message.read ? "text-[var(--color-gray-medium)]" : "text-[var(--color-main-dark)]"
                  }`}>
                    {message.email}
                  </td>
                  <td className={`px-6 py-4 max-w-xs truncate ${
                    message.read ? "text-[var(--color-gray-medium)]" : "text-[var(--color-main-dark)]"
                  }`}>
                    {message.message}
                  </td>
                  <td className="px-6 py-4 text-[var(--color-gray-medium)] whitespace-nowrap">
                    {new Date(message.sentAt).toLocaleDateString("fr-FR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedMessage && (
        <ContactMessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  );
};

export default AdminContactsPage;
