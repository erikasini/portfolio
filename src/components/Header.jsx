  function Header({ openProject }) {
  return (
    <header className="site-header" role="banner">
      <div className="header-left">
        <div className="header-chip header-name-chip">
          <span className="header-name">Erika Sinigaglia</span>
        </div>
        <div className="header-chip header-role-chip">
          <span className="header-role">web designer</span>
        </div>
      </div>

      <div
        className="header-center"
        role={openProject ? "region" : undefined}
        aria-label={openProject ? "Progetto aperto" : "Introduzione"}
      >
        <div className="header-center-inner">
          {openProject ? (
            <div className="header-project-summary">
              <div className="header-project-title-line">
                {openProject.url ? (
                  <a
                    href={openProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="header-link header-project-title-link header-text-line-mark"
                  >
                    {openProject.title}
                    <span className="header-external-arrow" aria-hidden="true">
                      {" "}
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="header-project-title-plain header-text-line-mark">
                    {openProject.title}
                  </span>
                )}
              </div>
              {openProject.description?.trim() ? (
                <p className="header-project-desc">
                  <span className="header-text-line-mark">{openProject.description.trim()}</span>
                </p>
              ) : null}
              {openProject.year != null && String(openProject.year).trim() !== "" ? (
                <p className="header-project-year">
                  <span className="header-text-line-mark">{String(openProject.year).trim()}</span>
                </p>
              ) : null}
            </div>
          ) : (
            <p className="header-bio">
              <span className="header-text-line-mark">currently at <a href="https://www.gigadesignstudio.com" target="_blank">giga</a><br/>milano</span>
            </p>
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="header-chip">
          <a href="mailto:erikasini1@gmail.com" className="header-link">
            mail
          </a>
        </div>
        <div className="header-chip">
          <a href="https://www.instagram.com/erikasinigaglia" target="_blank" rel="noreferrer" className="header-link">
            ig
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
