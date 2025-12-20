import { useEffect } from 'react'
import '../styles/NotFound.css'

function NotFound({ onHome }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="not-found-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span>Lucas</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a></li>
          </ul>
        </div>
      </nav>

      <main className="not-found-main">
        <section className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p className="error-message">Oops! Looks like this page took a wrong turn. Let's get you back on track.</p>
          <button className="back-home-btn" onClick={onHome}>
            Back to Home
          </button>
        </section>

        <div className="decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Lucas. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default NotFound
