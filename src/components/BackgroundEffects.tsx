const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Static Ambient Glow Orbs (Zero JS render cost, pure CSS composition) */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full left-[10%] top-[20%] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)",
        }}
      />

      <div
        className="absolute w-[350px] h-[350px] rounded-full left-[30%] top-[50%] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0.05) 40%, transparent 70%)",
        }}
      />

      {/* Hardware-Accelerated CSS Horizontal Scan Lines */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scanline-down" />
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-scanline-up" />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-primary/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-primary/30 to-transparent" />
      </div>
    </div>
  );
};

export default BackgroundEffects;
