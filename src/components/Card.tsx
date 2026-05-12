import type { ReactNode } from 'react'

export function CardGrid2({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div className="card-grid-2" style={style}>{children}</div>
}

export function CardGrid3({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div className="card-grid-3" style={style}>{children}</div>
}

export function Card({ children, variant, style }: { children: ReactNode; variant?: 'teal' | 'red' | 'green'; style?: React.CSSProperties }) {
  return (
    <div className={`card ${variant || ''}`} style={style}>
      {children}
    </div>
  )
}

export function CardIcon({ children }: { children: ReactNode }) {
  return <span className="card-icon" style={{ marginBottom: '32px' }}>{children}</span>
}

export function CardTitle({ children, color }: { children: ReactNode; color?: string }) {
  return <h3 className="card-title" style={color ? { color } : undefined}>{children}</h3>
}
