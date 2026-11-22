const Box = ({
  title,
  subtitle,
  strong = false,
}: {
  title: string;
  subtitle?: string;
  strong?: boolean;
}) => (
  <div
    className={`glass rounded-xl px-3 py-3 sm:px-4 text-center border ${
      strong ? "border-textGreen" : "border-textGreen/20"
    }`}
  >
    <p className="font-titleFont text-sm sm:text-base font-semibold text-textLight">{title}</p>
    {subtitle && <p className="mt-1 text-xs sm:text-sm text-textDark">{subtitle}</p>}
  </div>
);

const Arrow = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center gap-1 py-2 text-textGreen" aria-hidden>
    {label && <span className="text-xs sm:text-sm text-textDark">{label}</span>}
    <span>↓</span>
  </div>
);

const Caption = ({ children }: { children: string }) => (
  <p className="mt-4 text-xs sm:text-sm text-textDark italic">{children}</p>
);

export const AutoCronicaSystemDiagram = () => (
  <figure className="flex flex-col" aria-label="Auto Crónica system architecture">
    <figcaption className="mb-4 font-titleFont text-textGreen text-sm sm:text-base">
      System architecture
    </figcaption>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Box title="Web" subtitle="Next.js 16 · SSR · next-intl · Vercel" />
      <Box title="Android app" subtitle="Flutter · Dio · Google Sign-In · AdMob" />
    </div>
    <Arrow label="HTTPS · BFF cookie (web) · Bearer JWT (app)" />

    <Box title="car-faults-api" subtitle="NestJS 11 · /v1 · TypeORM · Swagger · Throttler" strong />
    <Arrow label="reads and writes · cache · AI (only this service calls it)" />

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Box title="PostgreSQL 16" subtitle="Source of truth" />
      <Box title="Redis 7" subtitle="Cache · rate limits · JWT denylist" />
      <Box title="Cloudflare R2" subtitle="Catalog and comment photos" />
    </div>
    <Arrow label="HTTP + Bearer API key" />

    <Box title="car-faults-ai-api" subtitle="FastAPI · stateless · prompts v1 · keyword RAG" strong />
    <Arrow label="ProviderChain with failover" />

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Box title="Gemini" subtitle="Primary" />
      <Box title="Groq" subtitle="Fallback" />
      <Box title="OpenRouter" subtitle=":free models" />
    </div>

    <Caption>
      Clients never call the AI service directly. Only car-faults-api decides when to generate, translate or read from cache.
    </Caption>
  </figure>
);

const steps = [
  { title: "Request", detail: "brand, model, year, engine, fuel type, doors" },
  { title: "Redis hit?", detail: "Full response cached → return it" },
  { title: "In PostgreSQL?", detail: "Issues and fixes already stored → attach votes, return" },
  { title: "Other language?", detail: "Translate an existing set instead of generating" },
  { title: "Generate", detail: "AI call behind the anti-abuse gate (Turnstile or mobile quota)" },
  { title: "Save atomically", detail: "Vehicle, issues and fixes in one transaction, then cache" },
];

export const AutoCronicaLookupFlow = () => (
  <figure className="flex flex-col" aria-label="Auto Crónica lookup flow">
    <figcaption className="mb-4 font-titleFont text-textGreen text-sm sm:text-base">
      Lookup flow: cache → database → AI, only when needed
    </figcaption>
    <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="glass rounded-xl p-4 border border-textGreen/20 flex gap-3 items-start"
        >
          <span className="shrink-0 w-7 h-7 rounded-full bg-textGreen text-bodyColor text-sm font-semibold flex items-center justify-center">
            {index + 1}
          </span>
          <div>
            <p className="font-titleFont text-sm sm:text-base font-semibold text-textLight">{step.title}</p>
            <p className="mt-1 text-xs sm:text-sm text-textDark">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
    <Caption>
      Cache and database hits never touch the AI or the anti-abuse quota. Each vehicle is generated once per language.
    </Caption>
  </figure>
);
