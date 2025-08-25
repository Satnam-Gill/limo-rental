// components/BookingCTA.tsx
export default function BookingCTA({ bookingCTA }: { bookingCTA?: { heading: string; text: string; ctas: { label: string; href: string }[] } }) {
  if (!bookingCTA) return null;
  return (
    <section className="py-12 bg-secondary text-white text-center">
      <h2 className="text-2xl font-bold mb-4">{bookingCTA.heading}</h2>
      <p className="mb-6">{bookingCTA.text}</p>
      <div className="flex justify-center gap-4">
        {bookingCTA.ctas.map((c, idx) => (
          <a
            key={idx}
            href={c.href}
            className="px-6 py-3 bg-primary text-black font-semibold rounded shadow hover:brightness-110 transition-colors"
          >
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}
