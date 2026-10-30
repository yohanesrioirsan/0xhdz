import {
  AtSign,
  Bird,
  Camera,
  CodeXml,
  Coffee,
  Crosshair,
  Gamepad2,
  Gauge,
  Globe,
  HandHeart,
  Keyboard,
  MonitorPlay,
  Radio,
  type LucideIcon,
} from "lucide-react";

export type ProfileLink = {
  title: string;
  description?: string;
  url: string;
  // lucide no longer ships brand logos, so each platform gets a close generic icon.
  icon: LucideIcon;
};

export type LinkGroup = {
  title: string;
  links: ProfileLink[];
};

// YouTube channel ID for @hadezje_cs (the part after "UC").
const youtubeChannel = "3kVrI89HDnXZIy8aGp-0EQ";

export const profile = {
  name: "0xhdz",
  aliases: ["hadez", "hadezje", "hdz"],
  website: "https://yohanesrioirsan.is-a.dev",
  /** Path under /public. null = initials fallback. */
  avatar:
    "https://i.pinimg.com/736x/15/63/be/1563bec75f9503fda9661df1ab0d2134.jpg" as
      | string
      | null,
  /** Embed URLs (e.g. "https://www.youtube.com/embed/VIDEO_ID"). null = placeholder. */
  // UULV<id> is YouTube's auto-generated playlist of the channel's live streams,
  // newest first, so the embed always opens on the latest (or current) stream.
  latestStreamEmbed:
    `https://www.youtube.com/embed/videoseries?list=UULV${youtubeChannel}` as
      | string
      | null,
  // UULF<id> is the auto-generated playlist of regular uploads (no streams or Shorts).
  latestVideoEmbed:
    `https://www.youtube.com/embed/videoseries?list=UULF${youtubeChannel}` as
      | string
      | null,
};

export const linkGroups: LinkGroup[] = [
  {
    title: "Socials",
    links: [
      {
        title: "Personal Website",
        url: "https://yohanesrioirsan.is-a.dev",
        icon: Globe,
      },
      {
        title: "Instagram",
        url: "https://instagram.com/yohanesrioirsan",
        icon: Camera,
      },
      {
        title: "Threads",
        url: "https://threads.com/yohanesrioirsan",
        icon: AtSign,
      },
      { title: "Twitter", url: "https://x.com/rioirsan31", icon: Bird },
      {
        title: "YouTube",
        description: "Stream VODs and videos",
        url: "https://youtube.com/@hadezje_cs",
        icon: MonitorPlay,
      },
      {
        title: "Twitch",
        description: "Where I occasionally go live",
        url: "https://twitch.tv/itsmehadez",
        icon: Radio,
      },
      {
        title: "GitHub",
        url: "https://github.com/yohanesrioirsan",
        icon: CodeXml,
      },
      {
        title: "Steam",
        url: "https://steamcommunity.com/id/hdzj",
        icon: Gamepad2,
      },
      {
        title: "FACEIT",
        url: "https://www.faceit.com/en/players/hadezje",
        icon: Crosshair,
      },
    ],
  },
  {
    title: "Support Me",
    links: [
      {
        title: "Saweria",
        url: "https://saweria.co/yohanesrioirsan",
        icon: HandHeart,
      },
      {
        title: "Ko-fi",
        url: "https://ko-fi.com/yohanesrioirsan",
        icon: Coffee,
      },
    ],
  },
  {
    title: "Projects for Streamers",
    links: [
      {
        title: "FaceitOBS",
        description: "Realtime Faceit widget",
        url: "https://faceitobs.online",
        icon: Gauge,
      },
      {
        title: "BoardSFX",
        description: "Your keyboard as a soundboard",
        url: "https://boardsfx.fun",
        icon: Keyboard,
      },
    ],
  },
];
