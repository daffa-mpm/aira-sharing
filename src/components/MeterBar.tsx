export function MeterGroup({ children }: { children: React.ReactNode }) {
  return <div className="meter-group">{children}</div>
}

export function MeterBar({ name, width, variant }: { name: string; width: string; variant?: 'teal' }) {
  return (
    <div className="meter-row">
      <span className="meter-name">{name}</span>
      <div className="meter-track">
        <div className={`meter-fill ${variant || ''}`} style={{ width }} />
      </div>
    </div>
  )
}
