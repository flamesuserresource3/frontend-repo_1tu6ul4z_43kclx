import Header from "./components/Header";
import StatsOverview from "./components/StatsOverview";
import DeviceGrid from "./components/DeviceGrid";
import AnalyticsPreview from "./components/AnalyticsPreview";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
      <Header />

      <main className="space-y-8 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 p-6 text-white shadow-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold">Welcome back, Admin</h2>
                <p className="text-emerald-100/90 text-sm">Here’s a quick snapshot of your energy performance today.</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                Live data connected
                <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              </div>
            </div>
          </div>
        </div>

        <StatsOverview />
        <DeviceGrid />
        <AnalyticsPreview />
      </main>

      <footer className="mt-8 border-t border-gray-200/70 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Energy Monitor — Built for real‑time insight and control.
        </div>
      </footer>
    </div>
  );
}

export default App;
