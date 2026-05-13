import { Eyebrow, SlideTitle, Lead } from '../components/Typography'

export function PortalAiraSlide() {
  return (
    <section>
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--primary)' }}>
          <Eyebrow>Portal AIRA</Eyebrow>
          <SlideTitle>
            Akses Langsung ke<br /><span className="accent">Portal AIRA</span>
          </SlideTitle>
          <Lead>
            Portal AIRA adalah hub terpusat untuk seluruh aplikasi AI yang telah dibangun di MPM. Karyawan cukup login satu kali dan langsung menemukan semua tools AI yang tersedia.
          </Lead>

          <div style={{ marginTop: 18, padding: '16px 18px', border: '1px solid color-mix(in oklch, var(--primary) 22%, transparent)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--primary) 5%, transparent)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56em', color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
              Cara Akses
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ flex: 1, padding: '10px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.72em', textAlign: 'center', color: 'var(--foreground)' }}>
                Login SSO MPM
              </div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85em' }}>&rarr;</span>
              <div style={{ flex: 1, padding: '10px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.72em', textAlign: 'center', color: 'var(--foreground)' }}>
                Pilih Aplikasi
              </div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85em' }}>&rarr;</span>
              <div style={{ flex: 1, padding: '10px', background: 'color-mix(in oklch, var(--primary) 8%, transparent)', border: '1px solid var(--primary)', borderRadius: 'var(--radius)', fontSize: '0.72em', textAlign: 'center', color: 'var(--primary)', fontWeight: 600 }}>
                Langsung Gunakan
              </div>
            </div>
          </div>

          <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: '0.64em', color: 'var(--muted-foreground)' }}>
            🔗 <a href="https://aira.mpm-motor.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>aira.mpm-motor.com</a>
          </div>
        </div>

        {/* Right: live preview iframe */}
        <div className="split-right" style={{ padding: 0, display: 'flex', flexDirection: 'column', zIndex: 999 }}>
          <iframe
            src="https://aira.mpm-motor.com/"
            title="Portal AIRA"
            style={{
              width: '100%',
              flex: 1,
              border: 'none',
              borderRadius: '0 0 var(--radius) 0',
              background: 'var(--card)',
            }}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </section>
  )
}
