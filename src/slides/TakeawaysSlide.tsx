import { Eyebrow, SlideTitle } from '../components/Typography'

const nodes = [
  { icon: '🤝', title: 'Human + AI', desc: 'AI mempercepat, manusia mengarahkan & memutuskan', color: 'var(--teal)' },
  { icon: '✍️', title: 'Prompt = Hasil', desc: 'Instruksi jelas & spesifik → jawaban berkualitas', color: 'var(--primary)' },
  { icon: '📚', title: 'RAG & Knowledge', desc: 'AI + dokumen MPM = jawaban akurat sesuai policy', color: 'var(--green)' },
  { icon: '🏗️', title: 'Ekosistem AIRA', desc: 'On-prem LLM + Portal + Apps, satu fondasi utuh', color: 'var(--primary)' },
  { icon: '🔀', title: 'Hybrid by Design', desc: 'Sensitif → on-prem, eksplorasi → cloud, semua via IT', color: 'var(--teal)' },
]

export function TakeawaysSlide() {
  return (
    <section>
      <div className="slide-split">
        {/* Left: Title + central orb */}
        <div className="split-left" style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', padding: '48px 36px' }}>
          <Eyebrow>Key Takeaways</Eyebrow>
          <SlideTitle style={{ fontSize: '1.6em', marginBottom: 28, textAlign: 'center' }}>
            Mindmap<br /><span className="accent">AIRA untuk MPM</span>
          </SlideTitle>

          {/* Central orb */}
          <div style={{
            width: 220, height: 220, borderRadius: '50%',
            background: 'linear-gradient(135deg, color-mix(in oklch, var(--teal) 14%, var(--card)), color-mix(in oklch, var(--primary) 16%, var(--card)))',
            border: '2px solid color-mix(in oklch, var(--primary) 35%, transparent)',
            boxShadow: '0 0 60px color-mix(in oklch, var(--primary) 12%, transparent), var(--shadow-xl)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: '2em', fontWeight: 800, background: 'linear-gradient(135deg, var(--teal), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AIRA</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42em', letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginTop: 6 }}>AI READINESS &amp;<br />ADOPTION</div>
          </div>

          <div className="info-box teal" style={{ marginTop: 28, textAlign: 'left', maxWidth: 380 }}>
            <p style={{ fontSize: '0.78em' }}><strong>Intinya:</strong> AIRA = cara kerja baru, dari kesiapan data hingga dampak nyata di setiap workflow.</p>
          </div>
        </div>

        {/* Right: branch nodes */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 48px', gap: 0 }}>
          {nodes.map((n, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 18,
              padding: '18px 22px',
              borderBottom: i < nodes.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                background: `color-mix(in oklch, ${n.color} 12%, transparent)`,
                border: `2px solid ${n.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.15em',
              }}>{n.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.92em', color: n.color, marginBottom: 3 }}>{n.title}</div>
                <div style={{ fontSize: '0.72em', lineHeight: 1.5, color: 'var(--muted-foreground)' }}>{n.desc}</div>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '1.6em', fontWeight: 800,
                color: `color-mix(in oklch, ${n.color} 20%, transparent)`,
                lineHeight: 1, flexShrink: 0,
              }}>0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
