import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import { ContactsProvider } from "./context/ContactsContext";
import HomeLayout from "./layouts/HomeLayout";
import BaseLayout from "./layouts/BaseLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import AdminProjectsPage from "./pages/AdminProjectsPage";

const App = () => {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <ContactsProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route element={<BaseLayout />}>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route path="projects" element={<AdminProjectsPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ContactsProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
};

export default App;
