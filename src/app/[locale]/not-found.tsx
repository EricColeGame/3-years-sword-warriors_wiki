"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { routing, type Locale } from "@/i18n/routing";

export default function NotFoundPage() {
  const t = useTranslations("shared");
  const pathname = usePathname();
  const segment = pathname?.split("/")[1] ?? "";
  const locale = routing.locales.includes(segment as Locale) ? segment : routing.defaultLocale;

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t("pageNotFound")}</h1>
        <p className="mt-4 text-muted-foreground">{t("pageNotFoundHint")}</p>
        <Button asChild className="mt-6"><Link href={`/${locale}/progression/3-years-sword-warriors-bosses`}>{t("browseBossGuides")}</Link></Button>
      </div>
    </main>
  );
}
