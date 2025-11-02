import { Zap, TrendingUp, Activity, DollarSign } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, change }) => (
  <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-0.5 text-xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      {change && (
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${
          change.startsWith("+") ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
        }`}>
          {change}
        </span>
      )}
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Today at a glance</h2>
        <p className="text-sm text-gray-500">Live overview of energy performance</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Zap} label="Energy (kWh)" value="312.4" change="+6.2%" />
        <StatCard icon={TrendingUp} label="Peak Demand (kW)" value="57.8" change="+1.1%" />
        <StatCard icon={Activity} label="Power Factor" value="0.94" change="-0.02" />
        <StatCard icon={DollarSign} label="Est. Cost" value="$42.31" change="+3.4%" />
      </div>
    </section>
  );
}
