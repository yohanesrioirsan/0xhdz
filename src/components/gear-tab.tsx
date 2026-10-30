import { ExternalLink, ImageOff, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gear, gearCategories, type GearItem } from "@/data/gear"

function GearCard({ item }: { item: GearItem }) {
  return (
    <Card className="gap-0 overflow-hidden py-0">
      <div className="flex aspect-[4/3] items-center justify-center bg-muted">
        {item.image ? (
          <img src={item.image} alt={item.name} className="size-full object-contain p-4" loading="lazy" />
        ) : (
          <ImageOff className="size-8 text-muted-foreground/50" aria-label="No image" />
        )}
      </div>
      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-1 flex-col items-start gap-2">
          {item.recommended && (
            <Badge variant="secondary">
              <Star className="fill-current" />
              Recommended
            </Badge>
          )}
          <p className="text-sm leading-snug font-medium">{item.name}</p>
        </div>
        {item.link ? (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            nativeButton={false}
            render={<a href={item.link.url} target="_blank" rel="noopener noreferrer sponsored" />}
          >
            {item.link.title}
            <ExternalLink />
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full" disabled>
            Not available
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function GearTab() {
  return (
    <Tabs defaultValue="main-system">
      <TabsList variant="line" className="w-full justify-start overflow-x-auto">
        {gearCategories.map((c) => (
          <TabsTrigger key={c.value} value={c.value} className="flex-none">
            {c.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {gearCategories.map((c) => {
        const items =
          c.value === "recommended" ? gear.filter((g) => g.recommended) : gear.filter((g) => g.category === c.value)
        return (
          <TabsContent
            key={c.value}
            value={c.value}
            className="mt-2 grid animate-in grid-cols-1 gap-4 duration-300 fade-in sm:grid-cols-2 md:grid-cols-3"
          >
            {items.map((item) => (
              <GearCard key={item.name} item={item} />
            ))}
          </TabsContent>
        )
      })}
      <p className="mt-4 text-xs text-muted-foreground">
        Some links are referral links. Buying through them supports me at no extra cost to you.
      </p>
    </Tabs>
  )
}
