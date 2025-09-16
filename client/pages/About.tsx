export default function About() {
  return (
    <div className="container py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
        <div className="md:col-span-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About LegacyForge Marketing</h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded" />
        </div>
        <div className="md:col-span-7 text-muted-foreground text-lg leading-relaxed">
          <p>
            At LegacyForge Marketing, we don’t just market — we build legacies. Our team of tech-driven marketers and IT specialists combine creativity with strategy to help your business grow faster and smarter. Whether you need performance marketing campaigns that deliver measurable ROI, robust IT support to keep operations smooth, or engaging social media management to connect with your audience, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}
