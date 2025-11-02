import { BarChart3, TrendingUp } from "lucide-react";

function Sparkline({ points, color = "#10b981" }) {
  const width = 160;
  const height = 48;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p - min) / (max - min || 1)) * height;
    return `${x},${y}`;
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={norm.join(" ")}
      />
    </svg>
  );
}

function Bars({ values, color = "#0ea5e9" }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1 h-12">
      {values.map((v, i) => (
        <div
          key={i}
          className="w-3 rounded-t bg-current"
          style={{ height: `${(v / (max || 1)) * 100}%`, color }}
        />
      ))}
    </div>
  );
}

export default function AnalyticsPreview() {
  const daily = [42, 48, 45, 60, 58, 62, 67];
  const hourly = [3, 5, 2, 6, 4, 7, 5, 6, 8, 4, 5, 7];

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
          <p className="text-sm text-gray-500">Quick insight into trends</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <BarChart3 className="h-4 w-4" />
          Open full analytics
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Daily Energy (kWh)</p>
              <p className="text-xl font-semibold text-gray-900">354.2</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
              <TrendingUp className="h-3.5 w-3.5" />
              +4.1%
            </span>
          </div>
          <Sparkline points={daily} />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Hourly Consumption</p>
              <p className="text-xl font-semibold text-gray-900">Last 12 hours</p>
            </div>
          </div>
          <Bars values={hourly} />
        </div>
      </div>
    </section>
  );
}
