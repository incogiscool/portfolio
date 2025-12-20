import { cn } from "@/lib/utils";

export default function BentoGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 grid-rows-6 gap-2 h-full", className)}>
      <div className="col-span-1 row-span-6 bg-gray-200 border overflow-hidden relative group">
        <img
          src="/train.JPG"
          alt="Gallery image"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div className="col-span-1 row-span-6 bg-gray-200 border overflow-hidden relative group">
        <img
          src="/acq-big-check.JPG"
          alt="Acquisition check"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div className="bg-gray-200 col-span-1 row-span-3 border overflow-hidden relative group">
        <img
          src="/flight-computer.jpeg"
          alt="Gallery image"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div className="bg-gray-200 col-span-1 row-span-3 border overflow-hidden relative group">
        <img
          src="/failed-cold-flow.jpeg"
          alt="Gallery image"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}
