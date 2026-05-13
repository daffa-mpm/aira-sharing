import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'

export function PromptingFrameworkSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left">
          <Eyebrow>Framework</Eyebrow>
          <SlideTitle>
            Anatomi <span className="accent">Prompt Efektif</span>
          </SlideTitle>
          <Lead>
            Prompt yang baik terdiri dari beberapa elemen kunci yang bekerja bersama. Gunakan 4 pilar ini untuk hasil yang konsisten dan berkualitas.
          </Lead>
          <div className="prompt-terminal" style={{ marginTop: 8 }}>
            <div className="prompt-terminal-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="title">formula.md</span>
            </div>
            <div className="prompt-terminal-body">
              <div className="comment"># Formula prompt terstruktur:</div>
              <div className="prompt-line" style={{ color: 'oklch(0.8 0.12 50)' }}>[Role] + [Instruksi] + [Format] + [Tone]</div>
            </div>
          </div>
        </div>
        <div className="split-right" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          <div className="float-label">4 Pilar</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
            <div className="feature-row">
              <div className="icon-circle gold" style={{ fontSize: '0.9em', fontWeight: 700, color: 'var(--primary)' }}>R</div>
              <div className="feature-content">
                <h4>Role & Konteks</h4>
                <p>"Kamu adalah data analyst senior di perusahaan multifinance." — Membantu AI menyesuaikan cara pandang dan kedalaman jawaban.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="icon-circle teal" style={{ fontSize: '0.9em', fontWeight: 700, color: 'var(--teal)' }}>I</div>
              <div className="feature-content">
                <h4>Instruksi Spesifik</h4>
                <p>Bukan "buat laporan" tapi "Bandingkan data kuartal 1 dan 2, cari anomali pertumbuhan di area Jawa Timur."</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="icon-circle green" style={{ fontSize: '0.9em', fontWeight: 700, color: 'var(--green)' }}>F</div>
              <div className="feature-content">
                <h4>Format Output</h4>
                <p>"Sajikan dalam bullet points, lalu satu tabel perbandingan." — Tentukan bagaimana output harus tampil.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="icon-circle gold" style={{ fontSize: '0.9em', fontWeight: 700, color: 'var(--primary)' }}>T</div>
              <div className="feature-content">
                <h4>Tone & Gaya</h4>
                <p>"Gunakan bahasa formal profesional, padat, tidak bertele-tele." — Sesuaikan untuk audiens target.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

