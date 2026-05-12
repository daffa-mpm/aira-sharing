import type { ReactNode } from 'react'

export function NumberedList({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <ol className="num-list" style={style}>{children}</ol>
}

export function NumberedItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <li>
      <div className="n">{num}</div>
      <div className="body">
        <strong>{title}</strong>
        <span>{desc}</span>
      </div>
    </li>
  )
}
