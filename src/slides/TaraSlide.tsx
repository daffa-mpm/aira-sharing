import { Eyebrow, SlideTitle } from '../components/Typography'
import { Card, CardGrid2, CardTitle } from '../components/Card'

export function TaraSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>PORTAL AIRA</Eyebrow>
        <SlideTitle>
          Satu Pintu Akses ke<br /><span className="accent">Semua Layanan AI</span>
        </SlideTitle>
        <p className="lead" style={{ maxWidth: 800 }}>
          Portal AIRA hadir sebagai hub terpusat (AI App Store lokal) tempat di mana karyawan dapat menemukan dan meluncurkan semua aplikasi AI yang telah dibangun untuk mempermudah pekerjaan mereka.
        </p>

        <CardGrid2 style={{ marginTop: 32 }}>
          <Card>
            <CardTitle>Keamanan &amp; SSO</CardTitle>
            <p>Akses terintegrasi dengan Single Sign-On (SSO) perusahaan, sehingga hanya karyawan MPM yang dapat mengakses portal dan menggunakan aplikasinya.</p>
          </Card>
          <Card variant="teal">
            <CardTitle color="var(--teal)">Katalog Terpusat</CardTitle>
            <p>Seluruh aplikasi AI tersedia dalam satu antarmuka terorganisir, tanpa perlu menghafal URL atau mencari ke berbagai departemen secara terpisah.</p>
          </Card>
        </CardGrid2>

        <div style={{ marginTop: 32, padding: '18px 24px', background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Alur Akses yang Seamless</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ flex: 1, padding: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.85em', textAlign: 'center', color: 'var(--foreground)' }}>
              Login dengan Akun MPM
            </div>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>&rarr;</span>
            <div style={{ flex: 1, padding: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.85em', textAlign: 'center', color: 'var(--foreground)' }}>
              Telusuri Katalog Aplikasi AI
            </div>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>&rarr;</span>
            <div style={{ flex: 1, padding: '12px', background: 'color-mix(in oklch, var(--primary) 8%, transparent)', border: '1px solid var(--primary)', borderRadius: 'var(--radius)', fontSize: '0.85em', textAlign: 'center', color: 'var(--primary)', fontWeight: 600 }}>
              Gunakan Aplikasi Langsung
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
