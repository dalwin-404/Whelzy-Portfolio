export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-6">
        {/* Sleek rotating geometric loader */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 border-[1px] border-white/20 rounded-full" />
          <div className="absolute inset-0 border-[1px] border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin" />
          <span className="font-serif font-bold text-white text-lg">W.</span>
        </div>
        
        {/* Loading text */}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
          Loading
        </span>
      </div>
    </div>
  );
}
