export default function Home() {
  return (
    <main 
      className="h-screen w-screen overflow-hidden relative"
      style={{
        // This ensures the image is exactly the size of the screen
        backgroundImage: `
          radial-gradient(circle, transparent 30%, rgba(11, 39, 42, 0.5) 100%),
          linear-gradient(to bottom, rgba(11, 39, 42, 0.8) 0%, transparent 50%, rgba(11, 39, 42, 0.8) 100%),
          url('/images/forest.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* This adds a very soft 'blur' layer over the image to make it dreamy */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-celestialTeal/10"></div>

      {/* Absolutely NO text or content. Just the forest. */}
    </main>
  );
}