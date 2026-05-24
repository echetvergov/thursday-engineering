const SystemStatus = () => {
  const systems = [
    { label: 'Cloud_Infra', status: 'Optimal' },
    { label: 'Data_Parser', status: 'Active' },
    { label: 'IoT_Ingest', status: 'Stable' }
  ];

  return (
    <div className="flex gap-6 font-mono text-[9px] uppercase tracking-widest border-l border-black/10 pl-6 ml-6 hidden lg:flex">
      {systems.map((sys) => (
        <div key={sys.label} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
          <span className="opacity-40">{sys.label}:</span>
          <span className="font-bold">{sys.status}</span>
        </div>
      ))}
    </div>
  );
};