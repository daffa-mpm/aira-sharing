import type { ReactNode } from 'react'

export function BulletList({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <ul className="bullets" style={style}>{children}</ul>
}

export function BulletItem({ title, sub, children }: { title?: string; sub?: string; children?: ReactNode }) {
  return (
    <li>
      {title && <strong>{title}</strong>}
      {children}
      {sub && <span className="sub">{sub}</span>}
    </li>
  )
}
