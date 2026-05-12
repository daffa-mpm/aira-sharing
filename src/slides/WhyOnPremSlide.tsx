import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { NumberedList, NumberedItem } from '../components/NumberedList'

export function WhyOnPremSlide() {
  return (
    <section>
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow color="var(--teal)">DATA SOVEREIGNTY</Eyebrow>
          <SlideTitle>
            Kenapa Harus<br /><span style={{ color: 'var(--teal)' }}>On-Prem LLM?</span>
          </SlideTitle>
          <Lead>
            Tidak semua data boleh dikirim ke cloud pihak ketiga. On-prem menjawab kebutuhan <span className="highlight teal">privasi</span> dan <span className="highlight teal">kontrol</span>.
          </Lead>
          <NumberedList>
            <NumberedItem num="01" title="Data Tidak Keluar" desc="Prompt & respons diproses di server internal — zero data transit ke internet." />
            <NumberedItem num="02" title="Compliance Terjaga" desc="Memenuhi regulasi penyimpanan & pemrosesan data sensitif." />
            <NumberedItem num="03" title="Kontrol Penuh" desc="Versi model, akses, dan cara data diproses — semua di tangan IT." />
          </NumberedList>
        </div>
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 36px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', color: 'var(--red)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>
            &#9888; Risiko Tanpa On-Prem
          </p>
          <div className="risk-pills">
            <div className="risk-pill">
              <div className="risk-icon">&#x1F4A7;</div>
              <div className="risk-label">Data Leakage</div>
              <div className="risk-desc">Data HR &amp; keuangan bisa terekspos ke server eksternal</div>
            </div>
            <div className="risk-pill">
              <div className="risk-icon">&#x1F512;</div>
              <div className="risk-label">Vendor Lock-in</div>
              <div className="risk-desc">Ketergantungan penuh — harga naik, operasional terdampak</div>
            </div>
            <div className="risk-pill">
              <div className="risk-icon">&#x26A0;&#xFE0F;</div>
              <div className="risk-label">Non-Compliance</div>
              <div className="risk-desc">Pelanggaran regulasi berdampak hukum &amp; reputasi</div>
            </div>
          </div>
          <div className="info-box teal" style={{ marginTop: 20 }}>
            <p><strong style={{ color: 'var(--teal)' }}>Intinya:</strong> On-prem bukan menggantikan cloud, tapi memastikan <span className="highlight teal">data sensitif tetap di rumah sendiri</span>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
