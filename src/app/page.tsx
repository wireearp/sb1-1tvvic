import { DashboardStats } from '@/components/dashboard/stats'
import { RecentTransactions } from '@/components/dashboard/recent-transactions'
import { PlotOverview } from '@/components/dashboard/plot-overview'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PlotOverview />
        <RecentTransactions />
      </div>
    </div>
  )
}