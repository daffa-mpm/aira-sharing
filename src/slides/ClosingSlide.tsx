export function ClosingSlide() {
  return (
    <section>
      <div className="slide-full divider-slide" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.52em',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'color-mix(in oklch, var(--primary-foreground) 55%, transparent)',
          marginBottom: 16
        }}>
          AI Readiness &amp; Adoption Framework &middot; 2026
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '2.6em',
          fontWeight: 700,
          color: 'var(--primary-foreground)',
          lineHeight: 1.12,
          marginBottom: 18,
          letterSpacing: '-0.02em'
        }}>
          Terima Kasih
        </h1>
        <div style={{
          marginTop: 32,
          padding: '14px 28px',
          border: '1.5px solid color-mix(in oklch, var(--primary-foreground) 25%, transparent)',
          borderRadius: 'var(--radius)',
          display: 'inline-block'
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6em',
            color: 'color-mix(in oklch, var(--primary-foreground) 55%, transparent)',
            letterSpacing: '0.1em',
            margin: 0
          }}>
            AIRA &middot; ON-PREM LLM &middot; PORTAL &middot; APPS
          </p>
        </div>
      </div>
    </section>
  )
}
