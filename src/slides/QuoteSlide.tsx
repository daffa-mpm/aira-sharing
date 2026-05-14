import { Logo } from '../components/Logo'

export function QuoteSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-full divider-slide" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '56px 72px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.54em',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'color-mix(in oklch, var(--primary-foreground) 58%, transparent)',
          marginBottom: 22,
        }}>
          Closing Reflection
        </p>

        <blockquote style={{
          maxWidth: 920,
          margin: 0,
          fontFamily: 'var(--font-sans)',
          fontSize: '2.1em',
          fontWeight: 700,
          lineHeight: 1.22,
          letterSpacing: '-0.02em',
          color: 'var(--primary-foreground)',
        }}>
          "Intelligence is the ability to adapt to change"
        </blockquote>

        <p style={{
          marginTop: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.64em',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'color-mix(in oklch, var(--primary-foreground) 62%, transparent)',
        }}>
          Stephen Hawking
        </p>
      </div>
    </section>
  )
}