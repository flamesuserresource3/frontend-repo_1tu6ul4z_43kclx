import { Circle, Eye, SlidersHorizontal } from "lucide-react";

const statusStyles = {
  online: {
    dot: "text-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
  },
  offline: {
    dot: "text-gray-400",
    badge: "bg-gray-100 text-gray-600",
  },
  warning: {
    dot: "text-amber-500",
    badge: "bg-amber-50 text-amber-700",
  },
  error: {
    dot: "text-rose-500",
    badge: "bg-rose-50 text-rose-700",
  },
};

const DeviceCard = ({ name, location, status, metrics }) => {
  const style = statusStyles[status];
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${style.badge}`}>
          <Circle className={`h-3 w-3 ${style.dot}`} fill="currentColor" />
          {status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3 text-center">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">{m.label}</p>
            <p className="mt-0.5 text-sm font-semibold text-gray-900">{m.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <Eye className="h-4 w-4" />
          View
        </button>
        <button className="inline-flex items-center gap-1 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800">
          <SlidersHorizontal className="h-4 w-4" />
          Control
        </button>
      </div>
    </div>
  );
};

export default function DeviceGrid() {
  const devices = [
    {
      name: "Main Incomer",
      location: "Building A / Panel 1",
      status: "online",
      metrics: [
        { label: "V", value: "230" },
        { label: "A", value: "18.2" },
        { label: "W", value: "3.9k" },
        { label: "PF", value: "0.95" },
      ],
    },
    {
      name: "Chiller Pump",
      location: "Building B / Basement",
      status: "warning",
      metrics: [
        { label: "V", value: "228" },
        { label: "A", value: "25.6" },
        { label: "W", value: "5.2k" },
        { label: "PF", value: "0.88" },
      ],
    },
    {
      name: "Lighting Panel",
      location: "Building A / L2",
      status: "online",
      metrics: [
        { label: "V", value: "231" },
        { label: "A", value: "9.7" },
        { label: "W", value: "1.8k" },
        { label: "PF", value: "0.97" },
      ],
    },
    {
      name: "Air Handler",
      location: "Building C / Roof",
      status: "offline",
      metrics: [
        { label: "V", value: "—" },
        { label: "A", value: "—" },
        { label: "W", value: "—" },
        { label: "PF", value: "—" },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Devices</h2>
          <p className="text-sm text-gray-500">Live snapshots from your fleet</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search devices..."
            className="w-56 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-gray-400 focus:ring-2"
          />
          <button className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {devices.map((d) => (
          <DeviceCard key={d.name} {...d} />
        ))}
      </div>
    </section>
  );
}
