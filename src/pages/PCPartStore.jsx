import { useEffect, useState } from 'react'
import img1 from '../assets/ProjectImages/PCWEBSITE1.jpg'
import img2 from '../assets/ProjectImages/PCWEBSITE2.jpg'
import img3 from '../assets/ProjectImages/PCWEBSITE3.jpg'
import img4 from '../assets/ProjectImages/PCWEBSITE4.jpg'
import img5 from '../assets/ProjectImages/PCWEBSITE5.jpg'
import img6 from '../assets/ProjectImages/PCWEBSITE6.jpg'
import '../styles/ProjectDetail.css'

function PCPartStore({ onBack }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="project-detail-page">
      <nav className="detail-navbar">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>PC Part Store</h1>
      </nav>

      <main className="detail-main">
        <section className="project-hero">
          <h2>PC Part Store</h2>
          <p className="project-subtitle">E-commerce Platform for PC Components</p>
        </section>

        <section className="project-content">
          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              The PC Part Store is a full-featured e-commerce website designed to help users find and purchase 
              computer components. The platform provides an intuitive browsing experience with powerful filtering 
              and comparison tools.
            </p>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <h4>JavaScript</h4>
                <p>Core logic and interactivity</p>
              </div>
              <div className="tech-item">
                <h4>HTML</h4>
                <p>Semantic markup structure</p>
              </div>
              <div className="tech-item">
                <h4>CSS</h4>
                <p>Modern styling and animations</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h3>Gallery</h3>
            <div className="image-grid">
              {[
                { src: img1, label: 'Homepage' },
                { src: img2, label: 'Homepage' },
                { src: img3, label: 'Products' },
                { src: img4, label: 'Cart' },
                { src: img5, label: 'Payment' },
                { src: img6, label: 'Order Confirmation' },
              ].map(({ src, label }, i) => (
                <figure className="image-card" key={i}>
                  <img
                    src={src}
                    alt={`PC Part Store - ${label}`}
                    loading="lazy"
                    onClick={() => setLightboxSrc(src)}
                  />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <ul className="features-list">
              <li>Browse comprehensive catalog of PC components</li>
              <li>Advanced filtering by type, price, and specifications</li>
              <li>Product comparison tool for side-by-side analysis</li>
              <li>Shopping cart functionality</li>
              <li>Responsive design for all devices</li>
              <li>Fast, optimized performance</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Learning Outcomes</h3>
            <ul className="learnings-list">
              <li>Building scalable e-commerce applications</li>
              <li>Implementing complex filtering and search functionality</li>
              <li>State management for shopping carts</li>
              <li>Responsive web design principles</li>
              <li>User experience optimization</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="detail-footer">
        <p>&copy; 2025 Lucas. All rights reserved.</p>
      </footer>
      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt="Enlarged screenshot" />
            <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PCPartStore
