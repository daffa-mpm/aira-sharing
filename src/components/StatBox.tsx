import type { ReactNode } from 'react'

export function StatRow({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div className="stat-row" style={style}>{children}</div>
}

export function StatBox({ num, label, numStyle }: { num: string; label: string; numStyle?: React.CSSProperties }) {
  return (
    <div className="stat-box">
      <div className="num" style={numStyle}>{num}</div>
      <div className="label">{label}</div>
    </div>
  )
}
