import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'

export function PromptingSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left">
          <Eyebrow>Prompting</Eyebrow>
          <SlideTitle>
            Prompt adalah<br /><span className="accent">Kunci Utama</span>
          </SlideTitle>
          <Lead>
            Bayangkan bicara dengan orang yang sangat pintar tapi tidak bisa membaca pikiran. Dia hanya menanggapi apa yang kita <em>katakan</em>, bukan apa yang kita <em>maksud</em>.
          </Lead>
          <p style={{ fontSize: '0.88em', lineHeight: 1.65, color: 'var(--foreground)' }}>
            Hasil Gen AI sangat bergantung pada bagaimana kita memberi instruksi (<strong style={{ color: 'var(--primary)' }}>prompt</strong>). Prompt yang jelas = hasil yang tepat.
          </p>
          <div className="info-box gold" style={{ marginTop: 16 }}>
            <p><strong style={{ color: 'var(--primary)' }}>Prinsip:</strong> Semakin detail & terstruktur prompt Anda, semakin akurat dan berguna jawaban AI.</p>
          </div>
        </div>
        <div className="split-right" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          <div className="prompt-terminal">
            <div className="prompt-terminal-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="title">good-prompt.md</span>
            </div>
            <div className="prompt-terminal-body">
              <div className="comment"># ✅ Prompt yang Baik</div>
              <div className="prompt-line">Buatkan email follow-up untuk dealer yang belum mengirim laporan bulanan, gunakan nada profesional tapi tegas, dalam bahasa Indonesia formal.</div>
              <br />
              <div className="ai-line">Subject: Pengingat Pengiriman Laporan Bulanan — [Periode]<br />Yth. Bapak/Ibu...<br />Kami belum menerima laporan...</div>
            </div>
          </div>
          <div className="prompt-terminal" style={{ opacity: 0.75 }}>
            <div className="prompt-terminal-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="title">bad-prompt.md</span>
            </div>
            <div className="prompt-terminal-body">
              <div className="comment"># ❌ Prompt yang Buruk</div>
              <div className="prompt-line">Buatkan email</div>
              <br />
              <div className="ai-line">Tentu! Berikut email yang bisa Anda gunakan: "Dear [Name], I hope this email finds you..."</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

