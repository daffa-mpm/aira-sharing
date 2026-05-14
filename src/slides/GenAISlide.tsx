import { useEffect, useRef } from "react";
import { Eyebrow, SlideTitle, Lead } from "../components/Typography";
import { Logo } from "../components/Logo";
import genAiAndLlmUrl from "../../assets/genai_and_llm.mp4";

export function GenAISlide() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const syncPlayback = () => {
      const section = sectionRef.current;
      const video = videoRef.current;

      if (!section || !video) return;

      if (section.classList.contains("present")) {
        video.currentTime = 0;
        void video.play().catch(() => {
          // Ignore autoplay rejections from the browser.
        });
        return;
      }

      video.pause();
    };

    syncPlayback();
    window.addEventListener("reveal:slidechanged", syncPlayback as EventListener);

    return () => {
      window.removeEventListener("reveal:slidechanged", syncPlayback as EventListener);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <Logo />
      <div className="slide-split" style={{ gridTemplateColumns: '0.65fr 1.25fr' }}>
        <div className="split-left">
          <Eyebrow>Generative AI</Eyebrow>
          <SlideTitle>
            Kecerdasan Buatan yang <span className="accent">Menciptakan</span>
          </SlideTitle>
          <Lead>
            Gen AI bukan sekadar mesin pencari. Ini adalah AI yang mampu{" "}
            <span className="highlight">membuat konten baru</span> — teks,
            gambar, kode — dari nol.
          </Lead>
          {/* <div className="info-box gold" style={{ marginTop: 16 }}>
            <p>
              Transisi dari <em>"mesin yang menghitung"</em> menjadi{" "}
              <strong style={{ color: "var(--primary)" }}>
                "mesin yang membantu berkreasi"
              </strong>
            </p>
          </div> */}

          {/* <div
            style={{
              marginTop: 14,
              padding: "16px 18px",
              border:
                "1px solid color-mix(in oklch, var(--primary) 22%, transparent)",
              borderRadius: "var(--radius)",
              background: "color-mix(in oklch, var(--primary) 5%, transparent)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.56em",
                color: "var(--primary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Trivia GenAI & LLM
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
              }}
            >
              Bayangin kamu lagi ngobrol dengan AI seperti chat biasa. AI bisa
              bantu bikin tulisan, jawab pertanyaan, merangkum, bahkan bikin
              gambar. Nah, kemampuan itulah yang disebut{" "}
              <strong style={{ color: "var(--foreground)" }}>GenAI</strong>.
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              Di baliknya ada{" "}
              <strong style={{ color: "var(--foreground)" }}>LLM</strong>, yaitu
              model yang memahami bahasa manusia lalu menyusun jawaban secara
              natural, hampir seperti sedang ngobrol dengan orang sungguhan.
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              Jadi gampangnya:
              <br />✨{" "}
              <strong style={{ color: "var(--foreground)" }}>GenAI</strong> =
              kemampuan AI untuk membuat sesuatu
              <br />
              🧠 <strong style={{ color: "var(--foreground)" }}>LLM</strong> =
              “otak bahasa” yang membuat AI bisa memahami dan menjawab chat kamu
            </div>
          </div> */}
        </div>
        <div
          className="split-right"
          style={{
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              border:
                "1px solid color-mix(in oklch, var(--primary) 18%, transparent)",
              borderRadius: "calc(var(--radius) + 4px)",
              overflow: "hidden",
              background: "var(--card)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <video
              ref={videoRef}
              src={genAiAndLlmUrl}
              style={{ display: "block", width: "100%", height: "auto" }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
            {[
              { label: "Prompt: Teks", value: "LLM" },
              { label: "Output: Gambar", value: "Diffusion" },
              { label: "Output: Video", value: "Video Gen" },
            ].map((item) => (
              <div key={item.value} className="card" style={{ padding: "12px 14px", minHeight: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5em", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
                  {item.label}
                </div>
                <div style={{ marginTop: 4, fontSize: "0.88em", fontWeight: 700, color: "var(--foreground)" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
