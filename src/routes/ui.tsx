import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Mail, Search, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, SectionTitle } from "@/components/tenarch/field";

export const Route = createFileRoute("/ui")({
  head: () => ({
    meta: [
      { title: "TENARCH · ספריית רכיבים" },
      {
        name: "description",
        content: "מערכת עיצוב TENARCH — כפתורים, קלטים, כרטיסים וטפסים לשימוש עקבי בכל המוצר.",
      },
    ],
  }),
  component: UiLibraryPage,
});

function UiLibraryPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-[color:var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-light text-[color:var(--muted-foreground)] hover:text-[color:var(--emerald-deep)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            חזרה לדף הבית
          </Link>
          <div className="flex items-center gap-3">
            <img src="/tenarch-logo.png" alt="TENARCH" className="h-8 w-8" />
            <span className="font-display text-xl tracking-tight text-[color:var(--emerald-deep)]">
              TENARCH
            </span>
            <Badge variant="gold">Design System</Badge>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">
        {/* Intro */}
        <section className="space-y-6">
          <SectionTitle
            eyebrow="ספריית רכיבים"
            title="מערכת עיצוב אחת. עקביות מוחלטת."
            description="כל רכיב במוצר בנוי מאותם טוקנים, אותה טיפוגרפיה ואותה שפה חזותית — Emerald Prestige, קווים נקיים, מעוגלים ועדינים."
          />
        </section>

        {/* Palette */}
        <section className="space-y-8">
          <SectionTitle eyebrow="01 · פלטה" title="צבעים סמנטיים" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Emerald Deep", var: "--emerald-deep" },
              { name: "Emerald Brand", var: "--emerald-brand" },
              { name: "Champagne Gold", var: "--gold" },
              { name: "Cream", var: "--cream" },
              { name: "Surface", var: "--surface" },
              { name: "Surface 2", var: "--surface-2" },
              { name: "Muted", var: "--muted" },
              { name: "Border", var: "--border" },
            ].map((c) => (
              <div key={c.var} className="surface rounded-2xl p-5">
                <div
                  className="h-20 w-full rounded-xl hairline"
                  style={{ background: `var(${c.var})` }}
                />
                <div className="mt-4 space-y-1">
                  <div className="text-sm font-medium text-[color:var(--emerald-deep)]">
                    {c.name}
                  </div>
                  <code className="text-[11px] text-[color:var(--muted-foreground)] font-mono">
                    {c.var}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <SectionTitle eyebrow="02 · טיפוגרפיה" title="Instrument Serif · Work Sans" />
          <div className="surface rounded-3xl p-10 space-y-6">
            <div className="font-display text-6xl font-normal tracking-tight text-[color:var(--emerald-deep)]">
              Display 6xl
            </div>
            <div className="font-display text-4xl font-normal text-[color:var(--emerald-deep)]">
              Heading 4xl
            </div>
            <div className="text-2xl font-light">Body Large — עדין ונקי</div>
            <div className="text-base text-[color:var(--muted-foreground)] font-light leading-relaxed">
              פסקת גוף רגילה. שילוב של סריף אלגנטי בכותרות עם סאנס מודרני ונעים לגוף הטקסט,
              יוצר מראה מגזיני יוקרתי עם קריאות מעולה.
            </div>
            <div className="text-xs uppercase tracking-[0.2em] gold-text">Overline · Gold</div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-8">
          <SectionTitle eyebrow="03 · כפתורים" title="Buttons" />
          <div className="surface rounded-3xl p-10 space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
                Variants
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="emerald">
                  <Sparkles /> Emerald
                </Button>
                <Button variant="gold">Gold</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="outlineGold">Outline Gold</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghostGold">Ghost Gold</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
                Sizes
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="emerald" size="sm">Small</Button>
                <Button variant="emerald">Default</Button>
                <Button variant="emerald" size="lg">Large</Button>
                <Button variant="emerald" size="xl">Extra Large</Button>
                <Button variant="outline" size="icon">
                  <Search />
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
                States
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="emerald" disabled>Disabled</Button>
                <Button variant="gold" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-8">
          <SectionTitle eyebrow="04 · תגיות" title="Badges" />
          <div className="surface rounded-3xl p-10 flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="emerald">Emerald</Badge>
            <Badge variant="gold">Gold</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="destructive">Alert</Badge>
          </div>
        </section>

        {/* Inputs & Forms */}
        <section className="space-y-8">
          <SectionTitle
            eyebrow="05 · טפסים"
            title="קלטים וטפסים"
            description="שדות עם מסגרת עדינה, מיקוד ירוק רך והילת פוקוס דיסקרטית."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>יצירת קשר</CardTitle>
                <CardDescription className="font-light">
                  דוגמה מלאה של טופס עם שדות עקביים
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <Field label="שם מלא" htmlFor="name" required>
                  <Input id="name" placeholder="ישראל ישראלי" />
                </Field>
                <Field label="דוא״ל" htmlFor="email" hint="לא נשתף עם אף אחד">
                  <Input id="email" type="email" placeholder="you@tenarch.com" />
                </Field>
                <Field label="תחום עניין" htmlFor="topic">
                  <Select>
                    <SelectTrigger id="topic">
                      <SelectValue placeholder="בחר נושא" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">עיצוב</SelectItem>
                      <SelectItem value="build">בנייה</SelectItem>
                      <SelectItem value="consult">ייעוץ</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="הודעה" htmlFor="msg">
                  <Textarea id="msg" placeholder="ספר לנו על הפרויקט..." rows={4} />
                </Field>
                <div className="flex items-center gap-2">
                  <Checkbox id="agree" />
                  <label htmlFor="agree" className="text-sm font-light">
                    אני מאשר קבלת עדכונים
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="emerald" size="lg">שליחה</Button>
                <Button variant="ghost">ביטול</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>שדה עם שגיאה</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <Field label="דוא״ל" htmlFor="err" error="פורמט דוא״ל אינו תקין">
                    <Input id="err" defaultValue="not-an-email" />
                  </Field>
                  <Field label="שדה מושבת" htmlFor="dis">
                    <Input id="dis" disabled placeholder="לא ניתן לעריכה" />
                  </Field>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>בחירות</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notif">התראות במייל</Label>
                    <Switch id="notif" defaultChecked />
                  </div>
                  <div className="space-y-3">
                    <Label>תוכנית</Label>
                    <RadioGroup defaultValue="pro" className="space-y-2">
                      {["starter", "pro", "atelier"].map((v) => (
                        <div key={v} className="flex items-center gap-2">
                          <RadioGroupItem value={v} id={v} />
                          <label htmlFor={v} className="text-sm font-light capitalize">
                            {v}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-8">
          <SectionTitle eyebrow="06 · כרטיסים" title="Cards" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge variant="emerald" className="w-fit">חדש</Badge>
                <CardTitle>סטודיו</CardTitle>
                <CardDescription className="font-light">
                  סביבת עבודה שקטה, מותאמת אישית לכל ארכיטקט.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghostGold">גלה עוד →</Button>
              </CardFooter>
            </Card>

            <Card className="grad-emerald text-[color:var(--primary-foreground)] border-transparent">
              <CardHeader>
                <Badge variant="gold" className="w-fit">Featured</Badge>
                <CardTitle className="text-[color:var(--primary-foreground)]">Atelier</CardTitle>
                <CardDescription className="text-[color:var(--primary-foreground)]/70 font-light">
                  חוויית פרימיום. גישה מלאה לכל הכלים והתבניות.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="gold">שדרג עכשיו</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grad-gold flex h-10 w-10 items-center justify-center rounded-xl">
                    <Users className="h-5 w-5 text-[color:var(--emerald-deep)]" />
                  </div>
                  <CardTitle>צוות</CardTitle>
                </div>
                <CardDescription className="font-light">
                  שיתופי פעולה חלקים בין חברי הצוות.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm font-light">
                  {["הרשאות גמישות", "היסטוריית שינויים", "תגובות מוטמעות"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[color:var(--emerald-brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Utility group example */}
        <section className="space-y-8">
          <SectionTitle eyebrow="07 · דוגמת שימוש" title="Search bar" />
          <div className="surface rounded-full flex items-center gap-2 p-2">
            <div className="relative flex-1">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--muted-foreground)]" />
              <Input
                className="border-0 bg-transparent pe-11 focus-visible:ring-0"
                placeholder="חפש דוא״ל, פרויקט או לקוח..."
              />
            </div>
            <Button variant="emerald" size="default">חיפוש</Button>
          </div>
        </section>

        <footer className="border-t border-[color:var(--border)] pt-10 pb-6 text-center">
          <p className="text-xs font-light text-[color:var(--muted-foreground)] tracking-wider">
            TENARCH · Design System v1.0
          </p>
        </footer>
      </main>
    </div>
  );
}
