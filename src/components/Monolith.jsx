export const Monolith = () => (
  <div className="flex flex-col gap-0 group">
    {/* The horizontal bar */}
    <div className="w-24 h-6 bg-[#1A1A1A] transition-colors group-hover:bg-[#0047AB]"></div>
    {/* The vertical stem - offset to create the 'T' */}
    <div className="w-6 h-16 bg-[#1A1A1A] ml-9 transition-colors group-hover:bg-[#0047AB]"></div>
  </div>
);