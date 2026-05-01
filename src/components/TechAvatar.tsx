import { useEffect, useState } from "react"

const lines = [
  [{ text: "@SpringBootApplication", color: "#c084fc" }],
  [{ text: "public class ", color: "#60a5fa" }, { text: "Portfolio", color: "#fbbf24" }, { text: " {", color: "#e2e8f0" }],
  [],
  [{ text: "  @Autowired", color: "#c084fc" }],
  [{ text: "  private ", color: "#60a5fa" }, { text: "SkillSet", color: "#fbbf24" }, { text: " skills;", color: "#e2e8f0" }],
  [],
  [{ text: "  public ", color: "#60a5fa" }, { text: "String", color: "#fbbf24" }, { text: " getRole() {", color: "#e2e8f0" }],
  [{ text: "    return ", color: "#60a5fa" }, { text: '"Back-end Dev"', color: "#34d399" }, { text: ";", color: "#e2e8f0" }],
  [{ text: "  }", color: "#e2e8f0" }],
  [{ text: "}", color: "#e2e8f0" }],
]

export function TechAvatar() {
  const [cursor, setCursor] = useState(true)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    if (visibleLines >= lines.length) return
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 120)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <div
      className="w-72 md:w-80 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
      style={{ background: "#0d1117" }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5"
        style={{ background: "#161b22" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-3 text-xs font-mono" style={{ color: "#8b949e" }}>
          Portfolio.java
        </span>
      </div>

      {/* Code area */}
      <div className="px-4 py-4 font-mono text-xs leading-6 min-h-[220px]">
        {lines.slice(0, visibleLines).map((parts, i) => (
          <div key={i} className="flex">
            <span className="w-5 mr-4 text-right select-none" style={{ color: "#3d444d" }}>
              {i + 1}
            </span>
            <span>
              {parts.map((p, j) => (
                <span key={j} style={{ color: p.color }}>
                  {p.text}
                </span>
              ))}
              {i === visibleLines - 1 && (
                <span
                  className="inline-block w-[7px] h-[14px] align-middle ml-px rounded-sm"
                  style={{
                    background: cursor ? "#60a5fa" : "transparent",
                    transition: "background 0.1s",
                  }}
                />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-1.5 text-xs font-mono border-t border-white/5"
        style={{ background: "#1f6feb", color: "#fff" }}
      >
        <span>Java</span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#28c840" }}
          />
          Spring Boot
        </span>
      </div>
    </div>
  )
}
