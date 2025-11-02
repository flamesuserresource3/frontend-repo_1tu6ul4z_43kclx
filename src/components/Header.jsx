import { Bell, Settings, User, Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 leading-tight">IoT Energy Monitor</h1>
            <p className="text-xs text-gray-500">Real‑time visibility for your devices</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40">
            <Bell className="h-4 w-4" />
            Alerts
            <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-100 px-1.5 text-xs font-semibold text-emerald-700">3</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <div className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-sm">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
