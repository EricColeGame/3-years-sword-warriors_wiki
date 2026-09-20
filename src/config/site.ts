export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "3 Years Sword Warriors Wiki",
  shortName: "3 Years Sword Warriors",
  logoText: "3SW",
  tagline: "Complete Guides, Codes, Weapons & Tier Lists",
  description: "Your ultimate guide to 3 Years Sword Warriors on Roblox! Explore active working codes, swords, weapons, best upgrades, combat strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://3-years-sword-warriors.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://3-years-sword-warriors.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/12986400307/Sword-Warriors",
  heroVideoId: "1cSuoITTEOs",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
