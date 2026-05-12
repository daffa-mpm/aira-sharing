import type { ReactNode } from 'react'

export function Eyebrow({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div className="eyebrow" style={color ? { color } : undefined}>
      {children}
    </div>
  )
}

export function SlideTitle({ children, as = 'h2', style }: { children: ReactNode; as?: 'h1' | 'h2'; style?: React.CSSProperties }) {
  const Tag = as
  return <Tag className="slide-title" style={style}>{children}</Tag>
}

export function Lead({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <p className="lead" style={style}>{children}</p>
}

export function HeroTag({ children }: { children: ReactNode }) {
  return <div className="hero-tag">{children}</div>
}
