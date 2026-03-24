type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
