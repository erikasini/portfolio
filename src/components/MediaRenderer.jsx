function MediaRenderer({
  media,
  className = "",
  priority = "default",
  autoPlay = true
}) {
  if (!media) return null;

  if (media.type === "video") {
    return (
      <video
        className={className}
        src={media.src}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        preload={priority === "high" ? "auto" : "metadata"}
        aria-label={media.alt || "Project video"}
      />
    );
  }

  return (
    <img
      className={className}
      src={media.src}
      alt={media.alt || "Project image"}
      loading={priority === "high" ? "eager" : "lazy"}
    />
  );
}

export default MediaRenderer;
