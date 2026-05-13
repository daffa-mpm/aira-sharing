import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { SlideTable } from '../components/Table'
import { Logo } from '../components/Logo'

function CompareBar({ label, valOnPrem, valCloud, desc, higherIsBetter = true }: { label: string; valOnPrem: string; valCloud: string; desc: string; higherIsBetter?: boolean }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <strong style={{ fontSize: '0.75em', color: 'var(--foreground)' }}>{label}</strong>
          <span style={{ fontSize: '0.52em', color: 'var(--green)', fontWeight: 600, letterSpacing: '0.05em' }}>
            {higherIsBetter ? '↑ lebih tinggi lebih baik' : '↓ lebih rendah lebih baik'}
          </span>
        </div>
        <span style={{ fontSize: '0.58em', color: 'var(--muted-foreground)' }}>{desc}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* On-Prem Side - fills right to left via rotation */}
        <div className="meter-track" style={{ flex: 1, transform: 'rotate(180deg)' }}>
          <div className="meter-fill teal" style={{ width: valOnPrem }}></div>
        </div>
        
        {/* Center Divider */}
        <div style={{ width: 2, height: 14, background: 'var(--border)', borderRadius: 2 }}></div>
        
        {/* Cloud Side - fills left to right */}
        <div className="meter-track" style={{ flex: 1 }}>
          <div className="meter-fill" style={{ width: valCloud }}></div>
        </div>
      </div>
    </div>
  )
}

export function HybridDecisionSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow color="var(--teal)">DECISION FRAMEWORK</Eyebrow>
          <SlideTitle>
            Cloud atau On-Prem?<br /><span style={{ color: 'var(--teal)' }}>Panduan Memilih</span>
          </SlideTitle>
          <Lead>
            Bukan mana yang <em>lebih baik</em> — tapi mana yang <span className="highlight teal">tepat</span> untuk skenario tertentu.
          </Lead>
          <SlideTable headers={['Skenario', 'Jalur']}>
            <tr>
              <td>Data karyawan &amp; HR</td>
              <td style={{ color: 'var(--teal)', fontWeight: 600 }}>&#x1F512; On-Prem</td>
            </tr>
            <tr>
              <td>Dokumen keuangan</td>
              <td style={{ color: 'var(--teal)', fontWeight: 600 }}>&#x1F512; On-Prem</td>
            </tr>
            <tr>
              <td>Chatbot internal</td>
              <td style={{ color: 'var(--teal)', fontWeight: 600 }}>&#x1F512; On-Prem</td>
            </tr>
            <tr>
              <td>Ringkasan riset publik</td>
              <td style={{ color: 'var(--primary)', fontWeight: 600 }}>&#x2601; Cloud</td>
            </tr>
            <tr>
              <td>Draft proposal</td>
              <td style={{ color: 'var(--primary)', fontWeight: 600 }}>&#x2601; Cloud</td>
            </tr>
            <tr>
              <td>Copywriting marketing</td>
              <td style={{ color: 'var(--primary)', fontWeight: 600 }}>&#x2601; Cloud</td>
            </tr>
          </SlideTable>
        </div>
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 48px' }}>
          
          {/* Custom Comparative Meter Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6em', color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.08em' }}>
              &#x1F512; ON-PREM
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45em', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>
              VS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6em', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.08em' }}>
              CLOUD &#x2601;&#xFE0F;
            </span>
          </div>

          {/* Comparative Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <CompareBar label="Privasi & Kontrol" valOnPrem="95%" valCloud="40%" desc="Keamanan Data" />
            <CompareBar label="Kualitas Reasoning" valOnPrem="60%" valCloud="95%" desc="Kecerdasan Model" />
            <CompareBar label="Biaya per Volume" valOnPrem="30%" valCloud="85%" desc="Efisiensi Skala Besar" higherIsBetter={false} />
            <CompareBar label="Kecepatan Deploy" valOnPrem="45%" valCloud="95%" desc="Time to Market" />
          </div>

          <div className="info-box teal" style={{ marginTop: 24 }}>
            <p><span className="highlight teal">Default on-prem</span> untuk data internal. Cloud hanya saat butuh frontier model untuk data non-sensitif.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
