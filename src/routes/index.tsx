import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MonitorUp,
  DoorOpen,
  LogIn,
  Pin,
  Copy,
  Wifi,
  Server,
  RefreshCw,
  Download,
  Palette,
  Users,
  List,
  LayoutGrid,
  Table as TableIcon,
  Search,
  Bell,
  Settings,
  Sparkles,
  ScreenShare,
  PencilLine,
  MousePointer2,
  Zap,
  Shield,
  Radio,
  ChevronLeft,
  Home as HomeIcon,
  GraduationCap,
  Building2,
  Circle,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Room = {
  code: string;
  name: string;
  owner: string;
  hint: string;
  tag: "קבוע" | "זמני";
  mine?: boolean;
  participants: string;
  status: "live" | "idle";
  icon: typeof HomeIcon;
};

const rooms: Room[] = [
  { code: "6430", name: "מלי", owner: "מלי", hint: "אורח-3714", tag: "קבוע", participants: "3/8", status: "live", icon: Building2 },
  { code: "5252", name: "מחשב מלי", owner: "מלי", hint: "אורח-5048", tag: "קבוע", participants: "1/6", status: "idle", icon: HomeIcon },
  { code: "5789", name: "יעקב", owner: "יעקב", hint: "יעקב", tag: "קבוע", participants: "0/8", status: "idle", icon: HomeIcon },
  { code: "9381", name: "גג", owner: "יעקב", hint: "לא חובה", tag: "קבוע", mine: true, participants: "2/4", status: "live", icon: GraduationCap },
];

function Index() {
  const [view, setView] = useState<"table" | "list" | "grid">("table");

  return (
    <div dir="rtl" className="min-h-screen relative overflow-hidden">
      {/* Ambient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 grad-gold float-anim" />
        <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, var(--color-success), transparent 70%)" }} />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-40 glass border-b border-border/70">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl grad-ink shadow-[var(--shadow-md)]">
              <ScreenShare className="h-5 w-5 text-[var(--color-background)]" strokeWidth={2} />
              <span className="absolute -bottom-1 -left-1 h-3.5 w-3.5 rounded-full grad-gold ring-2 ring-background" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-display font-bold tracking-tight">LocalCast</div>
              <div className="text-[11px] text-muted-foreground font-mono">v73 · 07-15 · 16:11</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 surface rounded-full p-1">
            {["חדרים", "היסטוריה", "הקלטות", "משתתפים", "הגדרות"].map((item, i) => (
              <button
                key={item}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "grad-ink text-[var(--color-background)] shadow-[var(--shadow-sm)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="surface rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" />
              עדכן תוכנה
            </button>
            <button className="surface h-10 w-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors">
              <Palette className="h-4 w-4" />
            </button>
            <button className="surface h-10 w-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-8 py-12">
        {/* HERO */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 surface rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full pulse-dot text-[var(--color-success)]" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--color-success)]" />
              </span>
              <span className="text-xs font-medium tracking-wide">רשת מקומית פעילה · 12 מכשירים מזוהים</span>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
                — Local Broadcasting Suite —
              </div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[0.95] text-[var(--color-ink)]">
                שיתוף מסך <br />
                <span className="italic font-normal gold-text">בזמן אמת.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              מערכת משרדית לשיתוף מסך, סימון והצגה — פועלת אך ורק ברשת המקומית שלך.
              ללא ענן, ללא הגדרות, אפס השהיה.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <FeaturePill icon={Zap} label="השהיה ‎<‎ 20ms" />
              <FeaturePill icon={Shield} label="LAN בלבד" />
              <FeaturePill icon={PencilLine} label="סימון חי" />
              <FeaturePill icon={Users} label="עד 16 משתתפים" />
            </div>
          </div>

          {/* JOIN / CREATE CARD */}
          <div className="lg:col-span-5">
            <div className="surface-elevated rounded-3xl p-7 relative overflow-hidden">
              <div aria-hidden className="absolute top-0 left-0 right-0 h-1 grad-gold" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Session</div>
                  <h2 className="font-display text-2xl font-semibold flex items-center gap-2">
                    כניסה ויצירת חדר
                  </h2>
                </div>
                <div className="h-10 w-10 rounded-full grad-ink flex items-center justify-center">
                  <LogIn className="h-4 w-4 text-[var(--color-background)]" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <FieldLabel>שם משתמש (לא חובה)</FieldLabel>
                  <input
                    className="w-full bg-[var(--color-surface-2)] hairline rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition"
                    placeholder="שם משתמש"
                    defaultValue="יעקב"
                  />
                </div>

                <button className="w-full grad-ink text-[var(--color-background)] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[var(--shadow-md)] hover:brightness-125 active:scale-[0.99] transition">
                  <MonitorUp className="h-5 w-5" />
                  צור חדר חדש
                </button>

                <div className="space-y-1.5">
                  <FieldLabel>שם חדר קבוע</FieldLabel>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 bg-[var(--color-surface-2)] hairline rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-gold)]/30 focus:border-[var(--color-gold)] transition"
                      placeholder="לדוגמה: ישיבת בוקר"
                    />
                    <button className="grad-gold text-[var(--color-accent-foreground)] font-semibold px-5 rounded-xl flex items-center gap-2 hover:brightness-105 active:scale-[0.99] transition shadow-[var(--shadow-gold)]">
                      <Pin className="h-4 w-4" />
                      קבע
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">או הצטרפו לפי קוד</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="flex gap-2">
                  <input
                    className="flex-1 bg-[var(--color-surface-2)] hairline rounded-xl px-4 py-3 text-lg font-mono tracking-[0.5em] text-center outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition"
                    placeholder="0000"
                    maxLength={4}
                  />
                  <button className="surface rounded-xl px-5 font-semibold flex items-center gap-2 hover:bg-muted transition">
                    <LogIn className="h-4 w-4" />
                    הצטרף
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS ROW */}
        <section className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={DoorOpen} label="חדרים פתוחים" value="4" trend="+2" tone="ink" />
          <StatCard icon={Users} label="משתתפים פעילים" value="6" trend="LIVE" tone="success" />
          <StatCard icon={Radio} label="משדרים כעת" value="2" trend="STREAM" tone="accent" />
          <StatCard icon={Activity} label="עומס רשת" value="8%" trend="STABLE" tone="muted" />
        </section>

        {/* ROOMS PANEL */}
        <section className="surface-elevated rounded-3xl p-7 mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl grad-ink flex items-center justify-center shadow-[var(--shadow-md)]">
                <DoorOpen className="h-5 w-5 text-[var(--color-background)]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-0.5">Active Sessions</div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-3xl font-semibold">חדרים פתוחים</h3>
                  <span className="grad-gold text-[var(--color-accent-foreground)] text-sm font-bold px-2.5 py-0.5 rounded-full shadow-[var(--shadow-gold)]">4</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  className="surface rounded-xl pr-9 pl-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 w-56"
                  placeholder="חיפוש חדר או בעלים…"
                />
              </div>

              <button className="surface rounded-xl px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-muted">
                <Circle className="h-3 w-3 fill-[var(--color-success)] text-[var(--color-success)]" />
                החדרים שלי
              </button>

              <div className="surface rounded-xl p-1 flex items-center gap-1">
                <ViewBtn active={view === "table"} onClick={() => setView("table")} icon={TableIcon} label="טבלה" />
                <ViewBtn active={view === "grid"} onClick={() => setView("grid")} icon={LayoutGrid} label="רשת" />
                <ViewBtn active={view === "list"} onClick={() => setView("list")} icon={List} label="רשימה" />
              </div>
            </div>
          </div>

          {view === "table" && <TableView />}
          {view === "grid" && <GridView />}
          {view === "list" && <ListView />}
        </section>

        {/* NETWORK PANELS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Connection addresses */}
          <div className="surface-elevated rounded-3xl p-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-0.5">Network Access</div>
                  <h3 className="font-display text-lg font-semibold">כתובת לחיבור ממחשבים אחרים</h3>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-success)]/12 text-[var(--color-success)] font-semibold">
                ● מקוון
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
              פתחו את הכתובת בדפדפן במחשב אחר באותה רשת. לחצו כדי להעתיק.
            </p>

            <div className="space-y-2.5">
              <AddressRow url="https://100.94.71.24:3000" primary />
              <AddressRow url="https://10.10.0.184:3000" />
            </div>
          </div>

          {/* Servers on network */}
          <div className="surface-elevated rounded-3xl p-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center">
                  <Server className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-0.5">Servers</div>
                  <h3 className="font-display text-lg font-semibold">שרתים ברשת</h3>
                </div>
              </div>
              <button className="surface rounded-xl px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-muted">
                <RefreshCw className="h-3.5 w-3.5" />
                רענן
              </button>
            </div>

            <div className="space-y-2">
              <ServerRow name="שרת ראשי · Office-Main" ip="10.10.0.184" ping="4ms" active />
              <ServerRow name="שרת גיבוי · Office-Backup" ip="10.10.0.185" ping="9ms" />
              <ServerRow name="Meeting-Room-42" ip="10.10.0.201" ping="12ms" />
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Toolkit</div>
              <h3 className="font-display text-3xl font-semibold">כלים בזמן שידור</h3>
            </div>
            <a className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer">
              כל הכלים
              <ChevronLeft className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ToolCard icon={ScreenShare} title="שיתוף מסך" desc="שדר את המסך שלך בזמן אמת" />
            <ToolCard icon={PencilLine} title="סימון על המסך" desc="ציור וחיצים על התוכן המשותף" accent />
            <ToolCard icon={MousePointer2} title="הצבע מרוחק" desc="שלוט בעכבר של המציג" />
            <ToolCard icon={Users} title="ניהול משתתפים" desc="הזמן, השתק, הסר מהחדר" />
          </div>
        </section>

        <footer className="text-center py-10 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-2 font-display italic text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
            LocalCast · Local Broadcasting Suite
          </div>
          <div className="text-xs font-mono text-muted-foreground/70">
            גרסה v73 · פועלת ברשת מקומית בלבד
          </div>
        </footer>
      </main>

      {/* Floating action */}
      <button className="fixed bottom-8 left-8 h-14 w-14 rounded-2xl grad-ink shadow-[var(--shadow-lg)] flex items-center justify-center hover:scale-105 active:scale-95 transition z-30">
        <MonitorUp className="h-6 w-6 text-[var(--color-background)]" />
      </button>
      <button className="fixed bottom-8 right-8 h-14 w-14 rounded-2xl grad-gold shadow-[var(--shadow-gold)] flex items-center justify-center hover:scale-105 active:scale-95 transition z-30">
        <Settings className="h-6 w-6 text-[var(--color-accent-foreground)]" />
      </button>
    </div>
  );
}

/* ===== Components ===== */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{children}</div>;
}

function FeaturePill({ icon: Icon, label }: { icon: typeof Zap; label: string }) {
  return (
    <div className="surface rounded-full px-3.5 py-1.5 flex items-center gap-2 text-sm">
      <Icon className="h-3.5 w-3.5 text-[var(--color-gold)]" />
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  tone,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
  trend: string;
  tone: "ink" | "success" | "accent" | "muted";
}) {
  const toneMap = {
    ink: "text-[var(--color-ink)] bg-muted",
    success: "text-[var(--color-success)] bg-[var(--color-success)]/12",
    accent: "text-[var(--color-accent)] bg-[var(--color-accent)]/12",
    muted: "text-muted-foreground bg-muted",
  };
  return (
    <div className="surface rounded-2xl p-6 relative overflow-hidden group hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition">
      <div className="flex items-center justify-between mb-4">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${toneMap[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${toneMap[tone]} uppercase tracking-widest`}>
          {trend}
        </span>
      </div>
      <div className="font-display text-5xl font-semibold tracking-tight text-[var(--color-ink)]">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function ViewBtn({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Zap;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? "grad-ink text-[var(--color-background)] shadow-[var(--shadow-sm)]"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

function TableView() {
  return (
    <div className="rounded-2xl overflow-hidden hairline">
      <div className="grid grid-cols-[90px_1fr_150px_150px_130px] gap-4 px-6 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-border bg-[var(--color-surface-2)]">
        <div>קוד</div>
        <div>חדר / בעלים</div>
        <div className="text-center">סוג</div>
        <div className="text-center">משתתפים</div>
        <div className="text-center">פעולות</div>
      </div>
      {rooms.map((room) => (
        <div
          key={room.code}
          className="grid grid-cols-[90px_1fr_150px_150px_130px] gap-4 px-6 py-5 items-center border-b border-border/70 last:border-b-0 hover:bg-[var(--color-surface-2)]/60 transition-colors group bg-surface"
        >
          <div className="flex items-center gap-2">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
              room.status === "live"
                ? "bg-[var(--color-success)]/12 text-[var(--color-success)]"
                : "bg-muted text-muted-foreground"
            }`}>
              <room.icon className="h-4 w-4" />
            </div>
            <span className="font-mono text-lg font-semibold text-[var(--color-ink)]">{room.code}</span>
          </div>

          <div className="min-w-0">
            <div className="font-display font-semibold text-lg truncate flex items-center gap-2">
              {room.name}
              {room.status === "live" && (
                <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-[var(--color-success)]/12 text-[var(--color-success)] font-bold uppercase tracking-widest">
                  <Circle className="h-1.5 w-1.5 fill-current" />
                  LIVE
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {room.owner} · {room.hint}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${
              room.tag === "קבוע"
                ? "bg-[var(--color-success)]/12 text-[var(--color-success)]"
                : "bg-[var(--color-warning)]/15 text-[var(--color-warning)]"
            }`}>
              <Pin className="inline h-2.5 w-2.5 ml-1" />
              {room.tag}
            </span>
            {room.mine && (
              <span className="text-[10px] font-bold px-2 py-1 rounded-full grad-gold text-[var(--color-accent-foreground)]">
                שלך
              </span>
            )}
          </div>

          <div className="text-center">
            <span className="font-mono text-sm font-semibold text-[var(--color-ink)]">{room.participants}</span>
            <div className="mt-1.5 h-1 w-20 mx-auto bg-muted rounded-full overflow-hidden">
              <div
                className="h-full grad-gold"
                style={{ width: `${(parseInt(room.participants) / parseInt(room.participants.split("/")[1])) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="grad-ink text-[var(--color-background)] text-sm font-semibold px-4 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              הצטרף
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function GridView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {rooms.map((room) => (
        <div key={room.code} className="surface rounded-2xl p-5 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition group relative overflow-hidden">
          {room.status === "live" && (
            <div aria-hidden className="absolute top-0 left-0 right-0 h-0.5 shimmer" />
          )}
          <div className="flex items-start justify-between mb-4">
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
              room.status === "live" ? "grad-ink text-[var(--color-background)]" : "bg-muted text-muted-foreground"
            }`}>
              <room.icon className="h-6 w-6" />
            </div>
            <span className="font-mono text-2xl font-bold gold-text">{room.code}</span>
          </div>
          <div className="font-display font-semibold text-lg mb-1">{room.name}</div>
          <div className="text-xs text-muted-foreground mb-4">{room.owner} · {room.hint}</div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[var(--color-success)]/12 text-[var(--color-success)] uppercase tracking-widest">
              {room.tag}
            </span>
            <span className="font-mono text-sm font-semibold text-muted-foreground">{room.participants}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ListView() {
  return (
    <div className="space-y-2">
      {rooms.map((room) => (
        <div key={room.code} className="surface rounded-xl p-4 flex items-center gap-4 hover:bg-muted transition">
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
            room.status === "live" ? "grad-ink text-[var(--color-background)]" : "bg-muted"
          }`}>
            <room.icon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold flex items-center gap-2">
              <span className="font-mono">{room.code}</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-display">{room.name}</span>
            </div>
            <div className="text-xs text-muted-foreground">{room.owner} · {room.hint}</div>
          </div>
          <span className="text-xs font-semibold text-muted-foreground font-mono">{room.participants}</span>
          <button className="surface rounded-lg px-3 py-1.5 text-sm hover:bg-muted">הצטרף</button>
        </div>
      ))}
    </div>
  );
}

function AddressRow({ url, primary }: { url: string; primary?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl p-1.5 ${
      primary
        ? "bg-gradient-to-l from-[var(--color-gold)]/10 to-transparent border border-[var(--color-gold)]/30"
        : "surface"
    }`}>
      <button className="bg-surface hairline rounded-lg px-3 py-2 text-xs font-semibold flex items-center gap-1.5 hover:bg-muted">
        <Copy className="h-3.5 w-3.5" />
        העתק
      </button>
      <div className="flex-1 font-mono text-sm px-3 py-2 truncate text-left" dir="ltr">
        {url}
      </div>
      {primary && (
        <span className="text-[10px] font-bold px-2 py-1 rounded-md grad-gold text-[var(--color-accent-foreground)] uppercase tracking-widest">מועדף</span>
      )}
    </div>
  );
}

function ServerRow({ name, ip, ping, active }: { name: string; ip: string; ping: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
      active
        ? "bg-gradient-to-l from-[var(--color-primary)]/8 to-transparent border border-[var(--color-primary)]/25"
        : "surface hover:bg-muted"
    }`}>
      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${
        active ? "grad-ink text-[var(--color-background)]" : "bg-muted text-muted-foreground"
      }`}>
        <Server className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm truncate">{name}</div>
        <div className="text-xs text-muted-foreground font-mono" dir="ltr">{ip}</div>
      </div>
      <div className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-success)]/12 text-[var(--color-success)] font-semibold">
        {ping}
      </div>
      {active && (
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full grad-ink text-[var(--color-background)] uppercase tracking-widest">מחובר</span>
      )}
    </div>
  );
}

function ToolCard({ icon: Icon, title, desc, accent }: { icon: typeof Zap; title: string; desc: string; accent?: boolean }) {
  return (
    <div className={`surface rounded-2xl p-6 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition group cursor-pointer relative overflow-hidden ${
      accent ? "border-[var(--color-gold)]/40" : ""
    }`}>
      {accent && <div aria-hidden className="absolute top-0 left-0 right-0 h-0.5 grad-gold" />}
      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center mb-4 ${
        accent ? "grad-gold text-[var(--color-accent-foreground)]" : "bg-muted text-[var(--color-primary)]"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display font-semibold text-lg mb-1">{title}</div>
      <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
      <ChevronLeft className="absolute bottom-5 left-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
    </div>
  );
}
