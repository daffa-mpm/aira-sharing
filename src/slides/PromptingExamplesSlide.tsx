import { Eyebrow, SlideTitle, Lead } from '../components/Typography'

export function PromptingExamplesSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>Studi Kasus</Eyebrow>
        <SlideTitle>Prompt Dasar vs <span className="accent">Prompt Terstruktur</span></SlideTitle>
        <Lead style={{ maxWidth: 700 }}>
          Lihat perbedaan nyata antara prompt asal-asalan dengan prompt yang mengikuti framework RIFT (Role, Instruction, Format, Tone).
        </Lead>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 14 }}>
          <div className="prompt-terminal" style={{ opacity: 0.85 }}>
            <div className="prompt-terminal-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="title">❌ bad-prompt</span>
            </div>
            <div className="prompt-terminal-body">
              <div className="prompt-line">Buatkan rekapan tren pembiayaan.</div>
              <br />
              <div className="ai-line">Tren pembiayaan saat ini menunjukkan pertumbuhan di beberapa sektor. Secara umum, pembiayaan motor mengalami peningkatan... [panjang, generik, tidak actionable]</div>
            </div>
          </div>

          <div className="prompt-terminal">
            <div className="prompt-terminal-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="title">✅ good-prompt</span>
            </div>
            <div className="prompt-terminal-body">
              <div className="prompt-line">Sebagai Data Analyst senior, buatkan summary tren pembiayaan motor baru Q1 2024 vs Q1 2023. Fokus area Jawa Timur & Jawa Tengah. Sajikan dalam bullet points + 1 tabel perbandingan. Bahasa formal profesional.</div>
              <br />
              <div className="ai-line">📊 Ringkasan Tren Pembiayaan Motor Baru<br />• Jatim: +12.3% YoY...<br />• Jateng: +8.7% YoY...<br /><br />| Area | Q1'23 | Q1'24 | Delta |<br />| Jatim | 4.2B | 4.7B | +12% |</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 14 }}>
          <div className="info-box red" style={{ marginTop: 0 }}>
            <p><strong style={{ color: 'var(--red)' }}>Hasil:</strong> Output generik, panjang, tidak langsung bisa dipakai. Butuh iterasi berkali-kali.</p>
          </div>
          <div className="info-box green" style={{ marginTop: 0 }}>
            <p><strong style={{ color: 'var(--green)' }}>Hasil:</strong> Output tajam, fokus, format siap presentasi ke manajemen. Sekali jadi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

