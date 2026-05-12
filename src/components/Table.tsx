import type { ReactNode } from 'react'

export function SlideTable({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <table className="slide-table">
      <thead>
        <tr>
          {headers.map((h) => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export function Badge({ children, variant }: { children: ReactNode; variant: string }) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}
