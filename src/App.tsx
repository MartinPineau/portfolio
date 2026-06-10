import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ProjectsProvider } from "./context/ProjectsContext.tsx";
import { ContactsProvider } from "./context/ContactsContext.tsx";
import { TestimonialsProvider } from "./context/TestimonialsContext.tsx";
import HomeLayout from "./layouts/HomeLayout";
import BaseLayout from "./layouts/BaseLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminProjectsPage = lazy(() => import("./pages/AdminProjectsPage"));
const AdminContactsPage = lazy(() => import("./pages/AdminContactsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));
const AdminTestimonialsPage = lazy(() => import("./pages/AdminTestimonialsPage"));

const App = () => {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <ContactsProvider>
          <TestimonialsProvider>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route element={<HomeLayout />}>
                  <Route path="/" element={<HomePage />} />
                </Route>
                <Route element={<BaseLayout />}>
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id" element={<ProjectDetailPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboardPage />} />
                    <Route path="projects" element={<AdminProjectsPage />} />
                    <Route path="contacts" element={<AdminContactsPage />} />
                    <Route
                      path="testimonials"
                      element={<AdminTestimonialsPage />}
                    />
                  </Route>
                </Route>
                <Route element={<BaseLayout />}>
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          </TestimonialsProvider>
        </ContactsProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
};

export default App;
