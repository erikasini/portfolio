import ProjectItem from "./ProjectItem";

function ProjectFeed({
  projects,
  openProjectId,
  openProject,
  currentIndex,
  originRect,
  onOpen,
  onClose,
  onPrevious,
  onNext
}) {
  return (
    <section
      className={`project-feed${openProjectId != null ? " project-feed--gallery-open" : ""}`}
      aria-label="Portfolio projects"
    >
      {projects.map((project) => {
        const widthClass = project.widthClass || "media-w-2";
        const widthStyle = project.width ? { width: project.width } : undefined;
        const offsetClass = project.offsetClass || "offset-0";

        return (
          <ProjectItem
            key={project.id}
            project={project}
            isOpen={openProjectId === project.id}
            expandedProject={openProjectId === project.id ? openProject : null}
            currentIndex={currentIndex}
            originRect={originRect}
            widthClass={widthClass}
            widthStyle={widthStyle}
            offsetClass={offsetClass}
            onOpen={onOpen}
            onClose={onClose}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        );
      })}
    </section>
  );
}

export default ProjectFeed;
