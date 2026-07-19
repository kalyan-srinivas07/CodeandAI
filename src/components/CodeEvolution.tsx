"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Stage = {
  id: string;
  title: string;
  caption: string;
  file: string;
  code: string;
  robot?: boolean;
};

const stages: Stage[] = [
  {
    id: "script",
    title: "A single file that runs.",
    caption: "Everything starts as intention written in plain code.",
    file: "main.py",
    code: `def greet(name):
    print(f"Hello, {name}")

greet("world")`,
  },
  {
    id: "structure",
    title: "Functions become systems.",
    caption: "Logic grows clear boundaries, returns, and reuse.",
    file: "service.py",
    code: `from typing import Optional

def greet(name: str, tone: str = "calm") -> str:
    if not name:
        return "Hello"
    return f"Hello, {name} — {tone}"

def run(user: Optional[str]) -> str:
    return greet(user or "builder")`,
  },
  {
    id: "modules",
    title: "Architecture enters the room.",
    caption: "Types, interfaces, and separation of concerns.",
    file: "product.ts",
    code: `type Intent = { goal: string; context: string[] }

interface Engine {
  plan(intent: Intent): Promise<string[]>
  execute(steps: string[]): Promise<Result>
}

export async function ship(intent: Intent, engine: Engine) {
  const steps = await engine.plan(intent)
  return engine.execute(steps)
}`,
  },
  {
    id: "api",
    title: "Code becomes a product surface.",
    caption: "APIs, auth, and delivery make software useful at scale.",
    file: "route.ts",
    code: `export async function POST(req: Request) {
  const { goal, context } = await req.json()

  const plan = await planner.create({ goal, context })
  const run = await runner.execute(plan, {
    retries: 2,
    timeoutMs: 12_000,
  })

  return Response.json({ ok: true, run })
}`,
  },
  {
    id: "ai",
    title: "Models join the codebase.",
    caption: "Retrieval, reasoning, and guardrails enter production.",
    file: "agent.ts",
    code: `const agent = createAgent({
  model: "codeandai-reasoner",
  tools: [searchDocs, readRepo, openTicket],
  memory: vectorStore,
  policy: {
    requireCitation: true,
    humanInLoop: ["deploy", "refund"],
  },
})

const answer = await agent.run({
  prompt: userGoal,
  context: await retrieve(userGoal),
})`,
  },
  {
    id: "robots",
    title: "The robots arrive.",
    caption:
      "Code stops being only written — it begins to sense, decide, and act.",
    file: "robot.control.ts",
    robot: true,
    code: `const fleet = await RobotFleet.connect({
  agents: ["planner", "builder", "operator"],
  senses: ["vision", "logs", "metrics"],
})

await fleet.mission({
  objective: "Ship the useful version",
  loop: "observe → reason → act → evaluate",
  stopWhen: "value is proven in production",
})

// CodeandAI — where code evolves into agency.`,
  },
];

const robotCopy = {
  label: "Agents & Robots",
  title: "The robots arrive.",
  caption: "Code stops being only written — it begins to sense, decide, and act.",
  subtitle: "From scripts to systems. From models to machines that ship.",
};

const TOKEN_RE =
  /(\/\/.*$|#.*$)|("(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)|(\b(?:const|let|var|function|async|await|return|from|import|export|type|interface|def|if|not|or|new)\b)|(\b\d[\d_]*\b)/g;

function highlightLine(line: string): ReactNode {
  if (!line) return "\u00a0";

  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(TOKEN_RE.source, "g");

  while ((match = re.exec(line)) !== null) {
    if (match.index > last) {
      nodes.push(line.slice(last, match.index));
    }

    const [full, comment, str, keyword, num] = match;
    if (comment) {
      nodes.push(
        <span key={`${match.index}-c`} className="tok-cmt">
          {comment}
        </span>,
      );
    } else if (str) {
      nodes.push(
        <span key={`${match.index}-s`} className="tok-str">
          {str}
        </span>,
      );
    } else if (keyword) {
      nodes.push(
        <span key={`${match.index}-k`} className="tok-kw">
          {keyword}
        </span>,
      );
    } else if (num) {
      nodes.push(
        <span key={`${match.index}-n`} className="tok-num">
          {num}
        </span>,
      );
    } else {
      nodes.push(full);
    }

    last = match.index + full.length;
  }

  if (last < line.length) {
    nodes.push(line.slice(last));
  }

  return nodes.length ? nodes : "\u00a0";
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export default function CodeEvolution() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      setProgress(clamp(raw));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Story reels through early stages, then holds on the AI/robots finale.
  const story = useMemo(() => {
    const holdStart = 0.7;
    const sceneCount = stages.length - 1;

    if (progress >= holdStart) {
      const hold = easeInOutCubic((progress - holdStart) / (1 - holdStart));
      return {
        index: stages.length - 1,
        local: 1,
        hold,
        crossfade: 1,
      };
    }

    const t = easeInOutCubic(progress / holdStart) * sceneCount;
    const index = Math.min(sceneCount - 1, Math.floor(t));
    const local = t - index;
    // Soft dissolve window around each cut
    const crossfade = clamp((local - 0.72) / 0.28);

    return { index, local, hold: 0, crossfade };
  }, [progress]);

  const current = stages[story.index];
  const next = stages[Math.min(stages.length - 1, story.index + 1)];
  const showingRobot = current.robot || (next.robot && story.crossfade > 0.15);
  const robotReveal = current.robot
    ? 0.35 + story.hold * 0.65
    : next.robot
      ? story.crossfade
      : 0;

  // When robots appear, swap all on-screen copy to the finale text.
  const robotText = clamp((robotReveal - 0.2) / 0.45);
  const displayLabel =
    robotText > 0.5 ? robotCopy.label : "Code Evolution";
  const displaySubtitle =
    robotText > 0.5
      ? robotCopy.subtitle
      : story.crossfade > 0.45
        ? next.caption
        : current.caption;

  const kenBurns = 1 + progress * 0.045;
  const letterbox = 0.035 + progress * 0.015;
  const robotGlow = easeInOutCubic(robotText);

  return (
    <section
      id="evolution"
      ref={trackRef}
      className="cinema-track relative"
      style={{ height: "720vh" }}
      aria-label="Cinematic code evolution"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-transparent">
        {/* Letterbox */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30"
          style={{
            height: `${letterbox * 100}%`,
            background: `rgba(14, 14, 14, ${0.08 + robotGlow * 0.12})`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30"
          style={{
            height: `${letterbox * 100}%`,
            background: `rgba(14, 14, 14, ${0.08 + robotGlow * 0.12})`,
          }}
        />

        {/* Film grain + vignette */}
        <div className="cinema-grain pointer-events-none absolute inset-0 z-20" />
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background: `radial-gradient(ellipse at center, transparent 42%, rgba(20, 28, 4, ${0.12 + robotGlow * 0.18}) 100%)`,
          }}
        />

        <div
          className="relative flex h-full items-center"
          style={{
            transform: `scale(${kenBurns})`,
            transition: "transform 0.1s linear",
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14 md:px-10">
            {/* Subtitle / intertitle side */}
            <div className="relative z-10 min-h-[10rem]">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/60">
                {displayLabel}
              </p>

              <div className="relative mt-6 min-h-[9.5rem]">
                {/* Pre-robot titles dissolve as usual */}
                <div
                  style={{
                    opacity: 1 - robotText,
                    filter: `blur(${robotText * 8}px)`,
                    transform: `translateY(${robotText * -12}px)`,
                  }}
                >
                  <CinemaTitle
                    key={current.id}
                    title={current.title}
                    caption={current.caption}
                    opacity={next.robot ? 1 : 1 - story.crossfade}
                    outgoing
                  />
                  {story.crossfade > 0 && !next.robot && (
                    <CinemaTitle
                      key={next.id + "-in"}
                      title={next.title}
                      caption={next.caption}
                      opacity={story.crossfade}
                    />
                  )}
                </div>

                {/* Robot-only copy — fades in with the robots */}
                <div
                  className="absolute inset-x-0 top-0"
                  style={{
                    opacity: robotText,
                    filter: `blur(${(1 - robotText) * 8}px)`,
                    transform: `translateY(${(1 - robotText) * 18}px)`,
                  }}
                >
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-[2.6rem] md:leading-tight">
                    {robotCopy.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                    {robotCopy.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Code reel */}
            <div className="relative">
              <div className="cinema-frame relative overflow-hidden border border-ink/10 bg-[#070707]">
                <div className="flex items-center justify-between border-b border-ink/8 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/12" />
                    <span className="h-2 w-2 rounded-full bg-white/12" />
                    <span className="h-2 w-2 rounded-full bg-white/12" />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.12em] text-mute">
                    {story.crossfade > 0.5 ? next.file : current.file}
                  </p>
                  <span className="w-10" />
                </div>

                <div className="relative min-h-[min(46vh,380px)]">
                  <CodeReel
                    stage={current}
                    opacity={1 - story.crossfade}
                    shift={-story.crossfade * 12}
                  />
                  {story.crossfade > 0 && (
                    <CodeReel
                      stage={next}
                      opacity={story.crossfade}
                      shift={(1 - story.crossfade) * 16}
                      absolute
                    />
                  )}

                  {/* Soft light sweep */}
                  <div
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
                    style={{
                      left: `${(progress * 140) % 130 - 20}%`,
                    }}
                  />
                </div>
              </div>

              {/* Robots finale — cinematic rise */}
              <div
                className="pointer-events-none absolute inset-x-2 -bottom-4 overflow-hidden md:inset-x-6"
                style={{
                  opacity: robotReveal,
                  transform: `translateY(${(1 - robotReveal) * 40}px) scale(${0.96 + robotReveal * 0.04})`,
                  transition: "opacity 0.2s linear, transform 0.2s linear",
                }}
              >
                <div className="relative aspect-[16/7] w-full overflow-hidden border border-ink/10">
                  <Image
                    src="/robots.jpg"
                    alt="AI agents and robots"
                    fill
                    className="object-cover"
                    style={{
                      transform: `scale(${1.08 - robotReveal * 0.06})`,
                    }}
                    sizes="(max-width: 768px) 90vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                  {showingRobot && (
                    <p className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#d49293]">
                      Agents &amp; Robots
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Film subtitle bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[7%] z-30 flex justify-center px-6">
          <p
            key={displaySubtitle}
            className="max-w-xl text-center font-display text-sm tracking-wide text-ink/80 md:text-base"
            style={{
              opacity: 0.75 + Math.sin(progress * Math.PI) * 0.2,
              textShadow: "0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {displaySubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function CinemaTitle({
  title,
  caption,
  opacity,
  outgoing = false,
}: {
  title: string;
  caption: string;
  opacity: number;
  outgoing?: boolean;
}) {
  return (
    <div
      className={outgoing ? "relative" : "absolute inset-x-0 top-0"}
      style={{
        opacity,
        filter: `blur(${(1 - opacity) * 6}px)`,
        transform: `translateY(${(1 - opacity) * (outgoing ? -10 : 14)}px)`,
        transition: "opacity 0.05s linear",
      }}
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-[2.6rem] md:leading-tight">
        {title}
      </h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70 md:hidden">
        {caption}
      </p>
    </div>
  );
}

function CodeReel({
  stage,
  opacity,
  shift,
  absolute = false,
}: {
  stage: Stage;
  opacity: number;
  shift: number;
  absolute?: boolean;
}) {
  const lines = stage.code.split("\n");

  return (
    <pre
      className={`${absolute ? "absolute inset-0" : "relative"} overflow-hidden p-5 text-[12px] leading-7 md:p-6 md:text-[13.5px] md:leading-8`}
      style={{
        opacity,
        transform: `translateY(${shift}px)`,
      }}
    >
      <code className="font-mono text-[#d49293]/90">
        {lines.map((line, i) => (
          <div
            key={`${stage.id}-${i}`}
            className="cinema-line"
            style={{
              opacity: clamp(opacity * 1.15 - i * 0.015),
              transform: `translateX(${(1 - opacity) * (i % 2 === 0 ? -6 : 6)}px)`,
            }}
          >
            {highlightLine(line)}
          </div>
        ))}
      </code>
    </pre>
  );
}
