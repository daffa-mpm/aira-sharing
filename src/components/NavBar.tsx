import { useEffect, useState } from 'react'

interface NavItem {
  label: string
  slideIndex: number
}

export function NavBar({ items }: { items: NavItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleSlideChanged = (e: CustomEvent<{ indexh: number }>) => {
      setActiveIndex(e.detail.indexh)
    }
    window.addEventListener('reveal:slidechanged', handleSlideChanged as EventListener)
    return () => window.removeEventListener('reveal:slidechanged', handleSlideChanged as EventListener)
  }, [])

  const handleClick = (slideIndex: number) => {
    const Reveal = (window as unknown as { Reveal: { slide: (idx: number) => void } }).Reveal
    if (Reveal) {
      Reveal.slide(slideIndex)
    }
  }

  const findActiveNav = () => {
    let closest = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].slideIndex <= activeIndex) closest = i
    }
    return closest
  }

  const activeNav = findActiveNav()

  return (
    <>
      <div id="slide-nav">
        {items.map((item, i) => (
          <button
            key={item.label}
            className={`nav-dot ${activeNav === i ? 'active' : ''}`}
            onClick={() => handleClick(item.slideIndex)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="key-hint">&larr; &rarr; TOMBOL PANAH UNTUK NAVIGASI &middot; SPACE UNTUK LANJUT</p>
    </>
  )
}
