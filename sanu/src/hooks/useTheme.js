import { useState, useEffect, useCallback } from "react";

const THEME_VARS = {
  barbie: {
    "--c1": "#FF1F8E",
    "--c1h": "#FF0080",
    "--c1l": "#FF69B4",
    "--c2": "#E040FB",
    "--c2l": "#F3D9FF",
    "--bubblegum": "#FFB3D9",
    "--cotton": "#FFC8E4",
    "--powder": "#FFE4F3",
    "--lilac": "#E8B4FF",
    "--lavender": "#F3D9FF",
    "--sky": "#B8E4FF",
    "--mint": "#B8FFE4",
    "--lemon": "#FFF4B8",
    "--white-pearl": "#FFF8FC",
    "--text-dark": "#3D1A3A",
    "--text-mid": "#7A3B6E",
    "--text-soft": "#B87BA8",
    "--bg": "#FFF0FA",
    "--bg2": "#FEE8F5",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(255,31,142,0.18)",
    "--shadow-soft": "0 4px 24px rgba(255,105,180,0.12)",
    "--accent-trail": "#FF1F8E",
  },
  ocean: {
    "--c1": "#0077B6",
    "--c1h": "#023E8A",
    "--c1l": "#48CAE4",
    "--c2": "#0096C7",
    "--c2l": "#ADE8F4",
    "--bubblegum": "#90E0EF",
    "--cotton": "#CAF0F8",
    "--powder": "#DBF4FB",
    "--lilac": "#ADE8F4",
    "--lavender": "#E0F7FA",
    "--text-dark": "#012A4A",
    "--text-mid": "#1E6091",
    "--text-soft": "#52B0CC",
    "--bg": "#E0F7FA",
    "--bg2": "#B2EBF2",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(0,119,182,0.2)",
    "--shadow-soft": "0 4px 24px rgba(72,202,228,0.12)",
    "--accent-trail": "#00B4D8",
  },
  dark: {
    "--c1": "#D4AF37",
    "--c1h": "#B8960C",
    "--c1l": "#F0D060",
    "--c2": "#C9956C",
    "--c2l": "#2a1a10",
    "--bubblegum": "#3a2a1a",
    "--cotton": "#2e1e12",
    "--powder": "#1e140c",
    "--lilac": "#2a2040",
    "--lavender": "#1a1428",
    "--text-dark": "#F7E7CE",
    "--text-mid": "#C9956C",
    "--text-soft": "#8a6a4a",
    "--bg": "#1A1210",
    "--bg2": "#231815",
    "--card-bg": "rgba(40,25,15,0.85)",
    "--shadow-main": "0 8px 40px rgba(212,175,55,0.2)",
    "--shadow-soft": "0 4px 24px rgba(212,175,55,0.1)",
    "--accent-trail": "#D4AF37",
  },
  sage: {
    "--c1": "#4CAF82",
    "--c1h": "#2E7D5A",
    "--c1l": "#80C9A0",
    "--c2": "#26A69A",
    "--c2l": "#B2DFDB",
    "--bubblegum": "#A5D6A7",
    "--cotton": "#C8E6C9",
    "--powder": "#E8F5E9",
    "--lilac": "#B2DFDB",
    "--lavender": "#E0F2F1",
    "--text-dark": "#1B4A2A",
    "--text-mid": "#2E7D5A",
    "--text-soft": "#66BB6A",
    "--bg": "#F1F8F3",
    "--bg2": "#E8F5E9",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(76,175,130,0.2)",
    "--shadow-soft": "0 4px 24px rgba(76,175,130,0.12)",
    "--accent-trail": "#4CAF82",
  },
  royal: {
    "--c1": "#7B2FBE",
    "--c1h": "#5B0EA6",
    "--c1l": "#A855F7",
    "--c2": "#9333EA",
    "--c2l": "#EDE9FE",
    "--bubblegum": "#DDD6FE",
    "--cotton": "#EDE9FE",
    "--powder": "#F5F3FF",
    "--lilac": "#C4B5FD",
    "--lavender": "#EDE9FE",
    "--text-dark": "#2E1065",
    "--text-mid": "#6D28D9",
    "--text-soft": "#A78BFA",
    "--bg": "#FAF5FF",
    "--bg2": "#F5F3FF",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(123,47,190,0.2)",
    "--shadow-soft": "0 4px 24px rgba(123,47,190,0.12)",
    "--accent-trail": "#9333EA",
  },
  sunset: {
    "--c1": "#F97316",
    "--c1h": "#EA580C",
    "--c1l": "#FB923C",
    "--c2": "#EC4899",
    "--c2l": "#FDF2F8",
    "--bubblegum": "#FED7AA",
    "--cotton": "#FFEDD5",
    "--powder": "#FFF7ED",
    "--lilac": "#FBCFE8",
    "--lavender": "#FDF2F8",
    "--text-dark": "#431407",
    "--text-mid": "#9A3412",
    "--text-soft": "#C2410C",
    "--bg": "#FFF7ED",
    "--bg2": "#FFEDD5",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(249,115,22,0.2)",
    "--shadow-soft": "0 4px 24px rgba(249,115,22,0.12)",
    "--accent-trail": "#F97316",
  },
  mint: {
    "--c1": "#06B6D4",
    "--c1h": "#0891B2",
    "--c1l": "#67E8F9",
    "--c2": "#10B981",
    "--c2l": "#CCFBF1",
    "--bubblegum": "#A7F3D0",
    "--cotton": "#D1FAE5",
    "--powder": "#ECFDF5",
    "--lilac": "#CCFBF1",
    "--lavender": "#F0FDFA",
    "--text-dark": "#064E3B",
    "--text-mid": "#065F46",
    "--text-soft": "#34D399",
    "--bg": "#F0FDFA",
    "--bg2": "#ECFDF5",
    "--card-bg": "rgba(255,255,255,0.75)",
    "--shadow-main": "0 8px 40px rgba(6,182,212,0.2)",
    "--shadow-soft": "0 4px 24px rgba(6,182,212,0.12)",
    "--accent-trail": "#06B6D4",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState("barbie");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const applyTheme = useCallback((themeName) => {
    const vars = THEME_VARS[themeName] || THEME_VARS.barbie;
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    // Apply body class for any CSS selectors that use body.theme-*
    document.body.className = document.body.className
      .replace(/theme-\S+/g, "")
      .trim();
    if (themeName !== "barbie") {
      document.body.classList.add("theme-" + themeName);
    }
  }, []);

  const setTheme = useCallback(
    (themeName) => {
      setCurrentTheme(themeName);
      applyTheme(themeName);
      setTimeout(() => setIsPanelOpen(false), 600);
    },
    [applyTheme]
  );

  const togglePanel = useCallback(() => {
    setIsPanelOpen((prev) => !prev);
  }, []);

  // Apply default theme on mount
  useEffect(() => {
    applyTheme("barbie");
  }, [applyTheme]);

  return {
    currentTheme,
    isPanelOpen,
    setTheme,
    togglePanel,
  };
}