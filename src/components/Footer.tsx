export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="font-serif text-lg text-foreground">
          Blade <span className="text-accent">&</span> Beard
        </div>
        <p>© {new Date().getFullYear()} Blade & Beard. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="transition-colors hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
