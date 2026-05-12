import type { ReactNode } from 'react'

export function SlideFull({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section>
      <div className={`slide-full ${className}`}>
        {children}
      </div>
    </section>
  )
}

export function SlideSplit({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <section>
      <div className="slide-split">
        {left}
        {right}
      </div>
    </section>
  )
}

export function SplitLeft({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div className="split-left" style={style}>{children}</div>
}

export function SplitRight({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div className="split-right" style={style}>{children}</div>
}

export function DividerSlide({ num, title, subtitle }: { num: string; title: string; subtitle: string }) {
  return (
    <section>
      <div className="slide-full divider-slide">
        <div className="num-big">{num}</div>
        <h2>{title}</h2>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.52em',
          color: 'color-mix(in oklch, var(--primary-foreground) 55%, transparent)',
          marginTop: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        }}>{subtitle}</p>
      </div>
    </section>
  )
}
