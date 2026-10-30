import { MonitorPlay } from "lucide-react";
import { profile } from "@/data/profile";

function Embed({ title, src }: { title: string; src: string | null }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-medium">{title}</h2>
      <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
        {src ? (
          <iframe
            src={src}
            title={title}
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <MonitorPlay className="size-8 opacity-50" />
            <span className="text-xs">Nothing here yet</span>
          </div>
        )}
      </div>
    </section>
  );
}

export function AboutTab() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-base leading-relaxed">
        <p>
          I occasionally go live, not that often though. Mostly just to cure the
          boredom after spending hours coding at work. Sometimes you just need
          to switch from writing code to clicking heads.
        </p>
      </div>
      <Embed title="My Latest Live Stream" src={profile.latestStreamEmbed} />
      <Embed title="My Latest Video" src={profile.latestVideoEmbed} />
    </div>
  );
}
