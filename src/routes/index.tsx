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
  Users,
  List,
  LayoutGrid,
  Table as TableIcon,
  Search,
  Bell,
  Settings,
  ScreenShare,
  PencilLine,
  MousePointer2,
  Zap,
  Shield,
  Radio,
  ChevronLeft,
  ArrowLeft,
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
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-40 glass border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-border overflow-hidden">
              <img src="/tenarch-logo.png" alt="TENARCH" className="h-9 w-9 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-[0.15em] text-emerald-950">TENARCH</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-medium">Architectural Broadcast · v73</div>
            </div>
          </div>


          <nav className="hidden md:flex items-center gap-1">
            {["חדרים", "היסטוריה", "הקלטות", "משתתפים", "הגדרות"].map((item, i) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  i === 0
                    ? "text-emerald-950 font-medium"
                    : "text-muted-foreground hover:text-emerald-900 font-light"
                }`}
              >
                {item}
                {i === 0 && (
                  <span className="block h-px w-6 mx-auto mt-1 bg-emerald-300" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-border px-4 py-2 text-xs font-medium tracking-wide hover:border-emerald-400 transition-colors flex items-center gap-2 text-emerald-800">
              <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
              עדכן תוכנה
            </button>
            <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-emerald-400 transition-colors relative">
              <Bell className="h-4 w-4 text-emerald-800" strokeWidth={1.5} />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 md:px-10 py-16 space-y-16">
        {/* HERO */}
        <header className="text-center space-y-6">
          <img src="/tenarch-logo.png" alt="TENARCH" className="mx-auto h-28 w-28 object-contain" />
          <h1 className="font-display text-6xl md:text-7xl tracking-[0.08em] text-emerald-950">
            TENARCH
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-emerald-200" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              בזמן אמת · ברשת המשרד בלבד
            </p>
            <span className="h-px w-10 bg-emerald-200" />
          </div>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light leading-relaxed pt-2">
            חוויה ארכיטקטונית לשיתוף מסך, סימון והצגה. ללא ענן, ללא הגדרות, אפס השהיה — פרטיות מוחלטת בין קירות המשרד.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <FeaturePill icon={Zap} label="השהיה פחות מ־20ms" />
            <FeaturePill icon={Shield} label="LAN בלבד" />
            <FeaturePill icon={PencilLine} label="סימון חי" />
            <FeaturePill icon={Users} label="עד 16 משתתפים" />
          </div>
        </header>

        {/* PRIMARY ACTION CARD */}
        <section>
          <div className="bg-white border border-border rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              {/* Join */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Join</div>
                  <h2 className="font-display text-2xl font-light text-emerald-950">הצטרפות לחדר קיים</h2>
                </div>
                <div className="space-y-3">
                  <FieldLabel>קוד חדר</FieldLabel>
                  <input
                    className="w-full bg-[var(--cream)] border border-transparent rounded-xl px-5 py-4 text-lg font-mono tracking-[0.4em] text-center outline-none focus:ring-1 focus:ring-emerald-300 focus:bg-white transition-all placeholder:text-emerald-200"
                    placeholder="0000"
                    maxLength={4}
                  />
                  <button className="w-full bg-emerald-900 text-white rounded-xl py-3.5 font-medium hover:bg-emerald-800 transition-colors tracking-wide text-sm flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" strokeWidth={1.5} />
                    כניסה לחדר
                  </button>
                </div>
              </div>

              {/* Create */}
              <div className="flex flex-col justify-center border-t md:border-t-0 md:border-r border-border pt-8 md:pt-0 md:pr-12 space-y-5">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Create</div>
                  <h2 className="font-display text-2xl font-light text-emerald-950">התחל חוויה משלך</h2>
                </div>
                <div className="space-y-3">
                  <FieldLabel>שם משתמש (לא חובה)</FieldLabel>
                  <input
                    className="w-full bg-[var(--cream)] border border-transparent rounded-xl px-5 py-3.5 text-sm outline-none focus:ring-1 focus:ring-emerald-300 focus:bg-white transition-all"
                    placeholder="שם משתמש"
                    defaultValue="יעקב"
                  />
                  <div className="flex gap-2">
                    <input
                      className="flex-1 bg-[var(--cream)] border border-transparent rounded-xl px-5 py-3.5 text-sm outline-none focus:ring-1 focus:ring-emerald-300 focus:bg-white transition-all"
                      placeholder="שם חדר קבוע"
                    />
                    <button className="rounded-xl border border-border px-4 hover:border-emerald-400 transition-colors text-sm text-emerald-800 flex items-center gap-1.5">
                      <Pin className="h-3.5 w-3.5" strokeWidth={1.5} />
                      קבע
                    </button>
                  </div>
                  <button className="group w-full flex items-center justify-center gap-2 text-emerald-900 font-medium py-3.5 px-6 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all text-sm">
                    <span>צור חדר חדש</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 py-8 border-y border-border">
          <StatCell value="4" label="חדרים פתוחים" />
          <StatCell value="6" label="משתתפים פעילים" divider />
          <StatCell value="2" label="משדרים כעת" divider />
          <StatCell value="8%" label="עומס רשת" divider />
        </section>

        {/* ROOMS PANEL */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Active Sessions</div>
              <h3 className="font-display text-2xl font-light text-emerald-950 flex items-center gap-3">
                חדרים פתוחים
                <span className="text-sm text-muted-foreground font-light">— 4</span>
              </h3>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
                <input
                  className="bg-white border border-border rounded-full pr-9 pl-4 py-2 text-sm outline-none focus:ring-1 focus:ring-emerald-300 w-56 font-light"
                  placeholder="חיפוש חדר או בעלים…"
                />
              </div>

              <button className="rounded-full border border-border px-4 py-2 text-xs font-medium flex items-center gap-2 hover:border-emerald-400 text-emerald-800">
                <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
                החדרים שלי
              </button>

              <div className="border border-border rounded-full p-1 flex items-center gap-1">
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

        {/* NETWORK & SERVERS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[var(--cream)] flex items-center justify-center">
                  <Wifi className="h-4 w-4 text-emerald-800" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-0.5">Network Access</div>
                  <h3 className="font-display text-base font-medium text-emerald-950">כתובת לחיבור ממחשבים אחרים</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                מקוון
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-5 font-light leading-relaxed">
              פתחו את הכתובת בדפדפן במחשב אחר באותה רשת. לחצו כדי להעתיק.
            </p>

            <div className="space-y-2.5">
              <AddressRow url="https://100.94.71.24:3000" primary />
              <AddressRow url="https://10.10.0.184:3000" />
            </div>
          </div>

          <div className="bg-white border border-border rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[var(--cream)] flex items-center justify-center">
                  <Server className="h-4 w-4 text-emerald-800" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-0.5">Servers</div>
                  <h3 className="font-display text-base font-medium text-emerald-950">שרתים ברשת</h3>
                </div>
              </div>
              <button className="rounded-full border border-border px-3 py-1.5 text-xs flex items-center gap-1.5 hover:border-emerald-400 text-emerald-800">
                <RefreshCw className="h-3 w-3" strokeWidth={1.5} />
                רענן
              </button>
            </div>

            <div className="divide-y divide-border">
              <ServerRow name="שרת ראשי · Office-Main" ip="10.10.0.184" ping="4ms" active />
              <ServerRow name="שרת גיבוי · Office-Backup" ip="10.10.0.185" ping="9ms" />
              <ServerRow name="Meeting-Room-42" ip="10.10.0.201" ping="12ms" />
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Toolkit</div>
              <h3 className="font-display text-2xl font-light text-emerald-950">כלים בזמן שידור</h3>
            </div>
            <a className="text-xs text-muted-foreground border-b border-transparent hover:border-emerald-300 transition-colors pb-1 cursor-pointer flex items-center gap-1">
              כל הכלים
              <ChevronLeft className="h-3 w-3" strokeWidth={1.5} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ToolCard icon={ScreenShare} title="שיתוף מסך" desc="שדר את המסך שלך בזמן אמת" />
            <ToolCard icon={PencilLine} title="סימון על המסך" desc="ציור וחיצים על התוכן המשותף" />
            <ToolCard icon={MousePointer2} title="הצבע מרוחק" desc="שלוט בעכבר של המציג" />
            <ToolCard icon={Users} title="ניהול משתתפים" desc="הזמן, השתק, הסר מהחדר" />
          </div>
        </section>

        <footer className="pt-12 pb-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <span className="uppercase tracking-[0.2em]">TENARCH · Architectural Broadcasting</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            v73 · פועלת ברשת מקומית בלבד
          </div>
        </footer>
      </main>

      {/* Floating actions */}
      <button className="fixed bottom-8 left-8 h-12 w-12 rounded-full bg-emerald-900 text-white shadow-[var(--shadow-lg)] flex items-center justify-center hover:bg-emerald-800 transition z-30">
        <MonitorUp className="h-5 w-5" strokeWidth={1.5} />
      </button>
      <button className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-white border border-border shadow-[var(--shadow-md)] flex items-center justify-center hover:border-emerald-400 transition z-30">
        <Settings className="h-5 w-5 text-emerald-800" strokeWidth={1.5} />
      </button>

      {/* silence unused imports */}
      <span className="hidden">
        <DoorOpen /><Radio /><Activity />
      </span>
    </div>
  );
}

/* ===== Components ===== */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{children}</div>;
}

function FeaturePill({ icon: Icon, label }: { icon: typeof Zap; label: string }) {
  return (
    <div className="border border-border rounded-full px-3.5 py-1.5 flex items-center gap-2 text-xs bg-white">
      <Icon className="h-3 w-3 text-emerald-600" strokeWidth={1.5} />
      <span className="font-light text-emerald-800">{label}</span>
    </div>
  );
}

function StatCell({ value, label, divider }: { value: string; label: string; divider?: boolean }) {
  return (
    <div className={`text-center space-y-1 ${divider ? "md:border-r md:border-border" : ""}`}>
      <div className="font-display text-3xl font-extralight text-emerald-950">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{label}</div>
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
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
        active
          ? "bg-emerald-900 text-white font-medium"
          : "text-muted-foreground hover:text-emerald-900 font-light"
      }`}
    >
      <Icon className="h-3 w-3" strokeWidth={1.5} />
      {label}
    </button>
  );
}

function TableView() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-white">
      <div className="grid grid-cols-[90px_1fr_150px_150px_130px] gap-4 px-6 py-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] border-b border-border bg-emerald-50/50">
        <div>קוד</div>
        <div>חדר / בעלים</div>
        <div className="text-center">סוג</div>
        <div className="text-center">משתתפים</div>
        <div className="text-center">פעולות</div>
      </div>
      {rooms.map((room) => (
        <div
          key={room.code}
          className="grid grid-cols-[90px_1fr_150px_150px_130px] gap-4 px-6 py-5 items-center border-b border-border last:border-b-0 hover:bg-emerald-50/40 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center border ${
              room.status === "live"
                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                : "bg-[var(--cream)] text-emerald-400 border-border"
            }`}>
              <room.icon className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <span className="font-mono text-base text-emerald-950">{room.code}</span>
          </div>

          <div className="min-w-0">
            <div className="font-display font-medium text-base truncate flex items-center gap-2 text-emerald-950">
              {room.name}
              {room.status === "live" && (
                <span className="inline-flex items-center gap-1.5 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium uppercase tracking-[0.15em]">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground truncate font-light">
              {room.owner} · {room.hint}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className="text-[10px] px-2.5 py-1 rounded-full uppercase tracking-[0.15em] font-medium bg-[var(--cream)] text-emerald-700 border border-border inline-flex items-center gap-1">
              <Pin className="h-2.5 w-2.5" strokeWidth={1.5} />
              {room.tag}
            </span>
            {room.mine && (
              <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[color:var(--color-gold)]/15 text-[color:var(--color-gold)] uppercase tracking-[0.15em]">
                שלך
              </span>
            )}
          </div>

          <div className="text-center">
            <span className="font-mono text-sm text-emerald-800">{room.participants}</span>
            <div className="mt-2 h-px w-20 mx-auto bg-border overflow-hidden">
              <div
                className="h-full bg-emerald-400"
                style={{ width: `${(parseInt(room.participants) / parseInt(room.participants.split("/")[1])) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="text-xs font-medium text-emerald-900 border-b border-transparent group-hover:border-emerald-300 pb-0.5 flex items-center gap-1 transition-all">
              הצטרף
              <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
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
        <div key={room.code} className="bg-white border border-border rounded-2xl p-6 hover:border-emerald-300 transition group">
          <div className="flex items-start justify-between mb-5">
            <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border ${
              room.status === "live" ? "bg-emerald-900 text-white border-emerald-900" : "bg-[var(--cream)] text-emerald-600 border-border"
            }`}>
              <room.icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="font-mono text-xl text-emerald-400 font-light">{room.code}</span>
          </div>
          <div className="font-display font-medium text-base mb-1 text-emerald-950">{room.name}</div>
          <div className="text-xs text-muted-foreground mb-5 font-light">{room.owner} · {room.hint}</div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium inline-flex items-center gap-1.5">
              {room.status === "live" ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  פעיל
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  ממתין
                </>
              )}
            </span>
            <span className="font-mono text-xs text-emerald-700">{room.participants}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ListView() {
  return (
    <div className="bg-white border border-border rounded-2xl divide-y divide-border overflow-hidden">
      {rooms.map((room) => (
        <div key={room.code} className="p-5 flex items-center gap-4 hover:bg-emerald-50/40 transition">
          <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${
            room.status === "live" ? "bg-emerald-900 text-white border-emerald-900" : "bg-[var(--cream)] border-border text-emerald-600"
          }`}>
            <room.icon className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-emerald-950">
              <span className="font-mono text-sm text-emerald-600">{room.code}</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-display font-medium">{room.name}</span>
            </div>
            <div className="text-xs text-muted-foreground font-light">{room.owner} · {room.hint}</div>
          </div>
          <span className="text-xs font-mono text-muted-foreground">{room.participants}</span>
          <button className="text-xs font-medium text-emerald-900 border-b border-transparent hover:border-emerald-300 pb-0.5">
            הצטרף
          </button>
        </div>
      ))}
    </div>
  );
}

function AddressRow({ url, primary }: { url: string; primary?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl p-2 ${
      primary
        ? "bg-[var(--cream)] border border-emerald-200"
        : "border border-border"
    }`}>
      <button className="rounded-lg px-3 py-2 text-xs font-medium flex items-center gap-1.5 hover:bg-white text-emerald-800 border border-border">
        <Copy className="h-3 w-3" strokeWidth={1.5} />
        העתק
      </button>
      <div className="flex-1 font-mono text-sm px-2 py-2 truncate text-left text-emerald-800" dir="ltr">
        {url}
      </div>
      {primary && (
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white border border-border text-emerald-700 uppercase tracking-[0.15em]">
          מועדף
        </span>
      )}
    </div>
  );
}

function ServerRow({ name, ip, ping, active }: { name: string; ip: string; ping: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
      <div className={`h-9 w-9 rounded-xl flex items-center justify-center border ${
        active ? "bg-emerald-900 text-white border-emerald-900" : "bg-[var(--cream)] text-emerald-600 border-border"
      }`}>
        <Server className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate text-emerald-950">{name}</div>
        <div className="text-xs text-muted-foreground font-mono font-light" dir="ltr">{ip}</div>
      </div>
      <div className="text-xs font-mono text-emerald-700">{ping}</div>
      {active && (
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 uppercase tracking-[0.15em] inline-flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          מחובר
        </span>
      )}
    </div>
  );
}

function ToolCard({ icon: Icon, title, desc }: { icon: typeof Zap; title: string; desc: string }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:border-emerald-300 transition group cursor-pointer">
      <div className="h-10 w-10 rounded-2xl flex items-center justify-center mb-5 bg-[var(--cream)] text-emerald-600 group-hover:text-emerald-950 transition-colors border border-border">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="font-display font-medium text-base mb-1.5 text-emerald-950">{title}</div>
      <div className="text-xs text-muted-foreground leading-relaxed font-light">{desc}</div>
      <ArrowLeft className="mt-4 h-3.5 w-3.5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" strokeWidth={1.5} />
    </div>
  );
}
