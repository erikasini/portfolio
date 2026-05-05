import { useMemo, useState } from "react";
import Header from "./components/Header";
import ProjectFeed from "./components/ProjectFeed";
import { projects } from "./data/projects";

function App() {
  const [openProjectId, setOpenProjectId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [originRect, setOriginRect] = useState(null);

  const openProject = useMemo(
    () => {
      const project = projects.find((item) => item.id === openProjectId);
      if (!project) return null;

      const galleryStartsWithCover =
        project.gallery[0]?.type === project.cover.type &&
        project.gallery[0]?.src === project.cover.src;

      const normalizedGallery = galleryStartsWithCover
        ? project.gallery
        : [project.cover, ...project.gallery];

      return {
        ...project,
        gallery: normalizedGallery
      };
    },
    [openProjectId]
  );

  function handleOpen(projectId, rect) {
    if (openProjectId === projectId) {
      handleClose();
      return;
    }

    setOpenProjectId(projectId);
    setCurrentIndex(0);
    setOriginRect(rect);
  }

  function handleClose() {
    setOpenProjectId(null);
    setCurrentIndex(0);
    setOriginRect(null);
  }

  function handlePrevious() {
    if (!openProject) return;
    setCurrentIndex((prev) =>
      prev === 0 ? openProject.gallery.length - 1 : prev - 1
    );
  }

  function handleNext() {
    if (!openProject) return;
    setCurrentIndex((prev) => (prev + 1) % openProject.gallery.length);
  }

  return (
    <div className="app-shell">
      <Header openProject={openProject} />
      <main>
        <ProjectFeed
          projects={projects}
          openProjectId={openProjectId}
          openProject={openProject}
          currentIndex={currentIndex}
          originRect={originRect}
          onOpen={handleOpen}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </main>
    </div>
  );
}

export default App;
