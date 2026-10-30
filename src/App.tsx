import { AboutTab } from "@/components/about-tab"
import { GearTab } from "@/components/gear-tab"
import { LinksTab } from "@/components/links-tab"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profile } from "@/data/profile"

const panelClass = "mt-4 animate-in duration-300 fade-in slide-in-from-bottom-2"

export default function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col px-4 py-8 sm:px-6 sm:py-12">
      <header className="flex items-start gap-4 sm:gap-6">
        <Avatar className="size-20 sm:size-24">
          {profile.avatar && <AvatarImage src={profile.avatar} alt={profile.name} className="object-top" />}
          <AvatarFallback className="text-2xl">YR</AvatarFallback>
        </Avatar>
        <div className="flex-1 pt-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {/* Secret link: looks like plain text, only the cursor gives it away. */}
            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              {profile.name}
            </a>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            also known as {profile.aliases.join(", ")}
          </p>
        </div>
        <ThemeToggle />
      </header>

      <Separator className="my-6" />

      <main className="flex-1">
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about" className="px-4">About</TabsTrigger>
            <TabsTrigger value="gear" className="px-4">Gear</TabsTrigger>
            <TabsTrigger value="links" className="px-4">Links</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className={panelClass}>
            <AboutTab />
          </TabsContent>
          <TabsContent value="gear" className={panelClass}>
            <GearTab />
          </TabsContent>
          <TabsContent value="links" className={panelClass}>
            <LinksTab />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 0xhdz,{" "}
        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          yohanesrioirsan
        </a>
        . All Rights Reserved
      </footer>
    </div>
  )
}
