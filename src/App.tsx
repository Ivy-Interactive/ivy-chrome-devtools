import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Ivy Chrome DevTools</h1>
        <p className="text-slate-600 dark:text-slate-400">A Chrome DevTools extension for debugging and profiling</p>
      </header>
      
      <main className="space-y-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <div className="flex gap-2">
            <Button variant="default">Analyze Performance</Button>
            <Button variant="outline">Clear Data</Button>
            <Button variant="secondary">Refresh</Button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
          <p className="text-slate-600 dark:text-slate-400">No data recorded yet. Click "Analyze Performance" to start.</p>
        </div>
      </main>
      
      <footer className="mt-6 text-sm text-slate-600 dark:text-slate-400">
        Ivy Chrome DevTools v1.0.0
      </footer>
    </div>
  );
}

export default App;
