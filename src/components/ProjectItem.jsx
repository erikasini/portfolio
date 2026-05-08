import MediaRenderer from "./MediaRenderer";
import ExpandedGallery from "./ExpandedGallery";

function ProjectItem({
  project,
  expandedProject,
  isOpen,
  currentIndex,
  originRect,
  widthClass,
  widthStyle,
  offsetClass,
  onOpen,
  onClose,
  onPrevious,
  onNext
}) {
  return (
    <article className={`project-item ${isOpen ? "is-open" : ""}`}>
      <button
        className={`project-trigger ${widthClass} ${offsetClass}`}
        style={widthStyle}
        onClick={(event) => {
          if (isOpen) {
            onClose();
            return;
          }

          const rect = event.currentTarget.getBoundingClientRect();
          onOpen(project.id, rect);
        }}
        aria-label={`Open ${project.title} gallery`}
      >
                <span className="project-feed-caption">
          <span className="header-text-line-mark">{project.title}</span>
        </span>
        <div className="feed-media-container">
        <MediaRenderer media={project.cover} className="feed-media" />

        </div>

      </button>

      {isOpen && expandedProject && (
        <ExpandedGallery
          project={expandedProject}
          currentIndex={currentIndex}
          originRect={originRect}
          onClose={onClose}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </article>
  );
}

export default ProjectItem;
