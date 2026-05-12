import { SlideTitle, HeroTag } from '../components/Typography'
import { StatRow, StatBox } from '../components/StatBox'

export function HeroSlide() {
  return (
    <section>
      <style>{`
        /* Float Animation untuk Glass Cards di kanan agar tetap hidup setelah tampil */
        .hero-float-1 { animation: airaFloat 6s ease-in-out infinite; }
        .hero-float-2 { animation: airaFloat 7s ease-in-out infinite reverse; }
        .hero-float-3 { animation: airaFloat 5s ease-in-out infinite 1s; }
      `}</style>
      <div className="slide-split">
        <div className="split-left" style={{ padding: '60px 48px', justifyContent: 'center' }}>
          <div>
            <HeroTag>MPM &middot; Transformasi Digital 2026</HeroTag>
          </div>
          
          <SlideTitle as="h1" style={{ fontSize: '3.6em', lineHeight: 1.05, marginTop: 16, marginBottom: 16, letterSpacing: '-0.02em' }}>
            <span className="accent" style={{ background: 'linear-gradient(135deg, var(--teal) 0%, var(--primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AIRA</span><br />
            Framework.
          </SlideTitle>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--primary)', marginBottom: 24, fontWeight: 700, letterSpacing: '0.05em' }}>
            AI READINESS &amp; ADOPTION
          </div>
          
          <div>
            <p className="lead" style={{ fontSize: '1.05em', maxWidth: 480, margin: '0 0 36px 0', lineHeight: 1.6 }}>
              Framework untuk implementasi <em>Generative AI</em> yang terstruktur dan memberikan <span className="highlight teal">nilai bisnis nyata</span> bagi MPM.
            </p>
          </div>

          <StatRow style={{ maxWidth: 500, margin: 0, gap: 12 }}>
            <div style={{ flex: 1 }}>
              <StatBox num="3" label="Pilar Utama" />
            </div>
            <div style={{ flex: 1 }}>
              <StatBox num="5" label="Topik Bahasan" />
            </div>
            <div style={{ flex: 1 }}>
              <StatBox num="1" label="Tujuan Akhir" />
            </div>
          </StatRow>
        </div>

        <div className="split-right hero-bg" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* Dekorasi Glow Latar */}
            <div style={{ position: 'absolute', top: '15%', left: '20%', width: 300, height: 300, background: 'var(--primary)', filter: 'blur(120px)', opacity: 0.15 }} />
            <div style={{ position: 'absolute', bottom: '15%', right: '15%', width: 300, height: 300, background: 'var(--teal)', filter: 'blur(120px)', opacity: 0.15 }} />
            
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Floating Glass Cards */}
                <div className="glass-card hero-float-1" style={{ position: 'absolute', top: '25%', right: '15%', width: 280, padding: '16px 20px', zIndex: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div className="icon-circle teal" style={{ width: 40, height: 40, fontSize: '0.9em' }}>🚀</div>
                        <div>
                            <div style={{ fontSize: '0.8em', fontWeight: 700, color: 'var(--foreground)' }}>1. Readiness</div>
                            <div style={{ fontSize: '0.65em', color: 'var(--muted-foreground)', marginTop: 2 }}>Infrastruktur &amp; Data siap</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card hero-float-2" style={{ position: 'absolute', top: '48%', left: '10%', width: 300, padding: '16px 20px', borderLeft: '4px solid var(--primary)', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div className="icon-circle gold" style={{ width: 40, height: 40, fontSize: '0.9em' }}>💡</div>
                        <div>
                            <div style={{ fontSize: '0.8em', fontWeight: 700, color: 'var(--foreground)' }}>2. Adoption</div>
                            <div style={{ fontSize: '0.65em', color: 'var(--muted-foreground)', marginTop: 2 }}>Integrasi langsung ke workflow</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card hero-float-3" style={{ position: 'absolute', bottom: '20%', right: '10%', width: 270, padding: '16px 20px', borderLeft: '4px solid var(--green)', zIndex: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div className="icon-circle green" style={{ width: 40, height: 40, fontSize: '0.9em' }}>📈</div>
                        <div>
                            <div style={{ fontSize: '0.8em', fontWeight: 700, color: 'var(--foreground)' }}>3. Impact</div>
                            <div style={{ fontSize: '0.65em', color: 'var(--muted-foreground)', marginTop: 2 }}>Peningkatan efisiensi dan kinerja</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

