// src/App.jsx
import React, { useState, useMemo, useEffect } from 'react';
import threatIntelligenceSources from './data/sources';
import SourceCard from './components/SourceCard';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import useFilter from './hooks/useFilter';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Derive unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(threatIntelligenceSources.map(s => s.category));
    return Array.from(cats);
  }, []);

  // Filtered list
  const filteredSources = useFilter(
    threatIntelligenceSources,
    searchText,
    selectedCategory
  );

  useEffect(() => {
    // Particle effect logic
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    const particleCount = 80;

    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      return { x: posX, y: posY };
    }

    function animateParticle(particle) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }

    // Clear previous particles if any
    particlesContainer.innerHTML = '';
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    // Mouse interaction
    function handleMouseMove(e) {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';
      particlesContainer.appendChild(particle);
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
      // Subtle movement of gradient spheres
      const spheres = document.querySelectorAll('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
      spheres.forEach(sphere => {
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    }
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (particlesContainer) particlesContainer.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" id="particles-container"></div>
      </div>
      <div className="min-h-screen bg-transparent text-white p-4 relative z-10">
        <header className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2 w-full">
            <img src="/trilogo.png" alt="Trilligence Logo" className="h-12 w-12 scale-[1.5] mt-4 bject-contain" />
            <h1 className="text-3xl font-bold text-white">Trilligence</h1>
          </div>
          <p className="text-sm text-gray-300">
            Browse and discover Threat Intelligence platforms and resources.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
          <SearchBar searchText={searchText} onSearchChange={setSearchText} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {filteredSources.length === 0 ? (
          <p className="text-center text-gray-400">No sources found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
            {filteredSources.map(src => (
              <SourceCard key={src.name} source={src} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
