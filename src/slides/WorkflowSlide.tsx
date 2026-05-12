import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { SlideTable } from '../components/Table'

export function WorkflowSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>Workflow Automation</Eyebrow>
        <SlideTitle>Otomasi Tanpa Coding</SlideTitle>
        <Lead>
          Bayangkan seperti "asisten otomatis" yang bisa kerja kapan aja, sesuai perintah yang kamu atur —
          jalankan tugas berulang, hubungkan aplikasi, dan lakukan aksi otomatis.
        </Lead>

        <div className="flow-steps" style={{ marginBottom: 20 }}>
          <div className="flow-step" style={{ borderTop: '3px solid var(--teal)' }}>
            <div className="step-num">Input</div>
            <div className="step-title">Baca Email</div>
            <div className="step-desc">Gmail &amp; Outlook secara otomatis</div>
          </div>
          <div className="flow-arrow">&rarr;</div>
          <div className="flow-step" style={{ borderTop: '3px solid var(--primary)' }}>
            <div className="step-num">Merge</div>
            <div className="step-title">Gabungkan</div>
            <div className="step-desc">Email dari berbagai sumber jadi satu batch</div>
          </div>
          <div className="flow-arrow">&rarr;</div>
          <div className="flow-step" style={{ borderTop: '3px solid var(--green)' }}>
            <div className="step-num">AI</div>
            <div className="step-title">Ringkasan AI</div>
            <div className="step-desc">LLM menyusun ringkasan konten email</div>
          </div>
          <div className="flow-arrow">&rarr;</div>
          <div className="flow-step" style={{ borderTop: '3px solid var(--primary)' }}>
            <div className="step-num">Output</div>
            <div className="step-title">Telegram Alert</div>
            <div className="step-desc">Kirim notifikasi otomatis</div>
          </div>
        </div>

        <SlideTable headers={['Tahapan', 'Agen', 'Fungsi']}>
          <tr>
            <td><strong>Input</strong></td>
            <td>Gmail, Outlook</td>
            <td>Membaca email yang belum dibaca secara otomatis</td>
          </tr>
          <tr>
            <td><strong>Komposisi</strong></td>
            <td>Merge Emails</td>
            <td>Menggabungkan email dari berbagai sumber</td>
          </tr>
          <tr>
            <td><strong>AI Processing</strong></td>
            <td>Gemini + AI Agent</td>
            <td>Menyusun ringkasan email terstruktur</td>
          </tr>
          <tr>
            <td><strong>Distribusi</strong></td>
            <td>Telegram Alert</td>
            <td>Mengirim hasil ringkasan via notifikasi</td>
          </tr>
        </SlideTable>

        <div className="info-box gold" style={{ marginTop: 16 }}>
          <p>
            <strong style={{ color: 'var(--primary)' }}>Contoh Lain:</strong> Workflow juga digunakan untuk
            otomasi <strong>Claim KPB</strong> dan <strong>Claim SCP</strong> — mengurangi proses manual yang berulang
          </p>
        </div>
      </div>
    </section>
  )
}
