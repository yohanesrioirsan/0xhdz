export type GearCategory = "main-system" | "gaming" | "monitor";

export type ReferralLink = {
  /** Button label, e.g. "Buy on Tokopedia" */
  title: string;
  url: string;
};

export type GearItem = {
  name: string;
  category: GearCategory;
  recommended?: boolean;
  /** Path under /public (e.g. "/gear/ryzen-7-5700x.png"). null = default placeholder. */
  image: string | null;
  /** null = no store link (e.g. discontinued product). */
  link: ReferralLink | null;
};

export const gearCategories: {
  value: GearCategory | "recommended";
  label: string;
}[] = [
  { value: "main-system", label: "Main System" },
  { value: "gaming", label: "Gaming" },
  { value: "monitor", label: "Monitor" },
  { value: "recommended", label: "Recommended" },
];

// TODO: replace the link urls with your referral links, and set `image` once you have pictures.
export const gear: GearItem[] = [
  // Main System
  {
    name: "Ryzen 7 5700X",
    category: "main-system",
    image: "/images/gear/ryzen7.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnC3HbF/",
    },
  },
  {
    name: "ADATA XPG Spectrix D35G DDR4 (8x2) 16GB",
    category: "main-system",
    image: "/images/gear/adata-ram.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnXNd3g/",
    },
  },
  {
    name: "Zotac Gaming RTX 5060 8GB",
    category: "main-system",
    recommended: true,
    image: "/images/gear/vga.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnXbMaP/",
    },
  },
  {
    name: "MSI Pro Series B550M-A PRO",
    category: "main-system",
    image: "/images/gear/mb.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnXyh4n/",
    },
  },
  {
    name: "ADATA LEGEND 710 PCIe Gen3 x4 512GB",
    category: "main-system",
    recommended: true,
    image: "/images/gear/ssd-adata.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnXsUaJ/",
    },
  },
  {
    name: "APACER AS350 1TB",
    category: "main-system",
    image: "/images/gear/ssd-apacer.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgn48Qtp/",
    },
  },

  // Gaming
  {
    name: "Delux M900 Mini Pro",
    category: "gaming",
    image: "/images/gear/m900.jpg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgncTBrq/",
    },
  },
  {
    name: "TALON Games Raku (L)",
    category: "gaming",
    recommended: true,
    image: "/images/gear/raku.jpg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgn3TpRs/",
    },
  },
  {
    name: "Royal Kludge RK75",
    category: "gaming",
    image: "/images/gear/rk75.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnTXkoK/",
    },
  },
  {
    name: "HyperX AMP 7.1 Soundcard",
    category: "gaming",
    recommended: true,
    image: "/images/gear/amp.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnTuHDA/",
    },
  },

  // Monitor
  {
    name: "ASUS VG259QM5A 240Hz (Main)",
    category: "monitor",
    recommended: true,
    image: "/images/gear/asustuf.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnwYxP2/",
    },
  },
  {
    name: "LG 24GL600F 144Hz (Secondary)",
    category: "monitor",
    image: "/images/gear/lg144.jpeg",
    link: null,
  },
  {
    name: "Oximus Monitor Arm",
    category: "monitor",
    recommended: true,
    image: "/images/gear/oximus.jpeg",
    link: {
      title: "Buy on Tokopedia",
      url: "https://tk.tokopedia.com/ZSgnwumge/",
    },
  },
];
