import { Eyebrow, SlideTitle } from '../components/Typography'
import { SlideTable } from '../components/Table'
import { Logo } from '../components/Logo'
export function AksaraSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow color="var(--teal)">PERBANDINGAN</Eyebrow>
          <SlideTitle>
            <span style={{ color: 'var(--teal)' }}>Cloud</span> vs <span style={{ color: 'var(--primary)' }}>On-Prem</span>
          </SlideTitle>
          <SlideTable headers={['Aspek', 'Cloud LLM', 'On-Prem LLM']}>
            <tr>
              <td><strong>Keamanan</strong></td>
              <td style={{ color: 'var(--red)' }}>Perlu kontrol ekstra &#10060;</td>
              <td style={{ color: 'var(--green)' }}>Sangat aman &#10004;</td>
            </tr>
            <tr>
              <td><strong>Kualitas</strong></td>
              <td style={{ color: 'var(--green)' }}>Frontier model &#10004;</td>
              <td style={{ color: 'var(--primary)' }}>Cukup &ndash; baik</td>
            </tr>
            <tr>
              <td><strong>Biaya</strong></td>
              <td style={{ color: 'var(--red)' }}>Pay per use &#10060;</td>
              <td style={{ color: 'var(--green)' }}>Fixed cost &#10004;</td>
            </tr>
            <tr>
              <td><strong>Operasional</strong></td>
              <td style={{ color: 'var(--green)' }}>Langsung pakai &#10004;</td>
              <td style={{ color: 'var(--red)' }}>Perlu maintenance &#10060;</td>
            </tr>
          </SlideTable>
          <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: 'var(--radius)' }}>
            <p style={{ fontSize: '0.75em', color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.55 }}>
              <span className="highlight teal">On-Prem</span> HR, keuangan, audit, data customer &nbsp;&bull;&nbsp;
              <span className="highlight">Cloud</span> brainstorm, draft, copywriting publik
            </p>
          </div>
        </div>
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 36px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Studi Kasus</p>

          <div className="callout-row teal" style={{ marginBottom: 12 }}>
            <div className="callout-icon">&#x1F512;</div>
            <div className="callout-text">
              <strong>HR Assistant Internal</strong><br />
              Data benefit &amp; payroll bersifat sensitif &rarr; <span className="highlight teal">on-prem</span>
            </div>
          </div>

          <div className="callout-row gold" style={{ marginBottom: 12 }}>
            <div className="callout-icon">&#x2601;&#xFE0F;</div>
            <div className="callout-text">
              <strong>Tim Business Development</strong><br />
              Draft proposal &amp; riset publik &rarr; <span className="highlight">cloud</span> (reasoning lebih kuat)
            </div>
          </div>

          <div className="callout-row teal" style={{ marginBottom: 12 }}>
            <div className="callout-icon">&#x1F512;</div>
            <div className="callout-text">
              <strong>Chatbot FAQ Karyawan</strong><br />
              Merujuk policy internal &rarr; <span className="highlight teal">on-prem + RAG</span>
            </div>
          </div>

          <div className="callout-row gold">
            <div className="callout-icon">&#x2601;&#xFE0F;</div>
            <div className="callout-text">
              <strong>Tim Marketing</strong><br />
              Copywriting &amp; konten publik &rarr; <span className="highlight">cloud</span> (kreativitas frontier)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
