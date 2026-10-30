import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { linkGroups, type ProfileLink } from "@/data/profile"

function LinkCard({ link }: { link: ProfileLink }) {
  const Icon = link.icon
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="flex-row items-center gap-4 px-4 py-3 transition-colors group-hover:bg-muted">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted group-hover:bg-background">
          <Icon className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{link.title}</p>
          {link.description && <p className="text-xs text-muted-foreground">{link.description}</p>}
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Card>
    </a>
  )
}

export function LinksTab() {
  return (
    <div className="flex flex-col gap-8">
      {linkGroups.map((group) => (
        <section key={group.title} className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">{group.title}</h2>
          {group.links.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </section>
      ))}
    </div>
  )
}
