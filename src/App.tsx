import { BrowserRouter, Routes, Route } from "react-router";
import { ProjectsProvider } from "./context/ProjectsContext";
import HomeLayout from "./layouts/HomeLayout";
import BaseLayout from "./layouts/BaseLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <ProjectsProvider>
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
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="projects" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProjectsProvider>
  );
};

export default App;
