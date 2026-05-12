import { Eyebrow, SlideTitle, Lead } from '../components/Typography'

export function TimelineSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>Evolusi</Eyebrow>
        <SlideTitle>Perjalanan AI hingga Gen AI</SlideTitle>
        <Lead>Dari aturan sederhana di tahun 1950 hingga AI yang bisa menciptakan konten baru di 2020</Lead>
        <div className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-year">1950</div>
            <div className="timeline-label">AI</div>
            <div className="timeline-desc">Tujuan: meniru / melampaui kecerdasan manusia. Berbasis rule (aturan)</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: 'var(--teal)', boxShadow: '0 0 0 2px var(--teal)' }} />
            <div className="timeline-year" style={{ color: 'var(--teal)' }}>1980</div>
            <div className="timeline-label">Machine Learning</div>
            <div className="timeline-desc">Mesin belajar dari data, bukan diprogram langsung. Contoh: deteksi spam, kredit scoring</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" style={{ background: 'var(--green)', boxShadow: '0 0 0 2px var(--green)' }} />
            <div className="timeline-year" style={{ color: 'var(--green)' }}>2010</div>
            <div className="timeline-label">Deep Learning</div>
            <div className="timeline-desc">Neural networks (jaringan saraf tiruan) untuk pengenalan pola kompleks</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-year">2020</div>
            <div className="timeline-label">Gen AI</div>
            <div className="timeline-desc">Menciptakan konten baru: teks, gambar, audio, video, kode. Contoh: ChatGPT, Copilot</div>
          </div>
        </div>
        <div className="info-box gold" style={{ marginTop: 24 }}>
          <p>
            <strong style={{ color: 'var(--primary)' }}>Foundation Model:</strong> Model AI skala besar, dilatih dengan data sangat banyak dan beragam — menjadi dasar bagi seluruh aplikasi Gen AI modern
          </p>
        </div>
      </div>
    </section>
  )
}
