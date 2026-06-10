import { Link } from "react-router";
import {
  FaDiagramProject,
  FaEnvelope,
  FaBell,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { useProjects } from "../hooks/useProjects";
import { useContacts } from "../hooks/useContacts";
import { useTestimonials } from "../hooks/useTestimonials";

type StatCardProps = {
  label: string;
  value: number;
  to: string;
  icon: IconType;
  highlight?: boolean;
};

const StatCard = ({ label, value, to, icon: Icon, highlight }: StatCardProps) => (
  <Link
    to={to}
    className={`group relative rounded-2xl p-6 flex items-center gap-4 border transition-all hover:-translate-y-1 hover:shadow-lg ${
      highlight
        ? "bg-[var(--color-main-dark)] border-transparent"
        : "bg-white border-[var(--color-gray-light)] shadow-sm"
    }`}
  >
    <span
      className={`flex items-center justify-center w-12 h-12 shrink-0 rounded-xl ${
        highlight
          ? "bg-[var(--color-main-yellow)] text-[var(--color-main-dark)]"
          : "bg-[var(--color-main-yellow)]/15 text-[var(--color-main-dark)]"
      }`}
    >
      <Icon className="w-5 h-5" />
    </span>

    <div className="flex items-center gap-2">
      <span
        className={`text-3xl font-bold leading-none ${
          highlight ? "text-white" : "text-[var(--color-main-dark)]"
        }`}
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {value}
      </span>
      <span
        className={`text-sm leading-none ${
          highlight ? "text-white/70" : "text-[var(--color-gray-medium)]"
        }`}
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {label}
      </span>
    </div>

    <FaArrowRight
      className={`w-4 h-4 absolute top-1/2 right-5 -translate-y-1/2 shrink-0 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all ${
        highlight ? "text-white" : "text-[var(--color-gray-medium)]"
      }`}
    />
  </Link>
);

const AdminDashboardPage = () => {
  const { projects } = useProjects();
  const { messages } = useContacts();
  const { testimonials } = useTestimonials();

  const unreadCount = messages.filter((m) => !m.read).length;
  const visibleTestimonials = testimonials.filter((t) => t.visible).length;

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <h1
        className="text-3xl font-bold text-[var(--color-main-dark)] mb-2"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Dashboard
      </h1>
      <p
        className="text-[var(--color-gray-medium)] mb-10"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        KPIs of your portfolio activity.
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        <StatCard
          label="Projects"
          value={projects.length}
          to="/admin/projects"
          icon={FaDiagramProject}
        />
        <StatCard
          label="Messages"
          value={messages.length}
          to="/admin/contacts"
          icon={FaEnvelope}
        />
        <StatCard
          label="Unread messages"
          value={unreadCount}
          to="/admin/contacts"
          icon={FaBell}
          highlight={unreadCount > 0}
        />
        <StatCard
          label="Visible testimonials"
          value={visibleTestimonials}
          to="/admin/testimonials"
          icon={FaQuoteLeft}
        />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
