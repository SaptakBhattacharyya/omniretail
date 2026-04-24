import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboardStats } from '../api/dashboardApi';
import { rejectNegotiation } from '../api/negotiationsApi';

const StatCard = ({ label, value, suffix, icon, trend, trendLabel, extra }) => (
  <div className="col-span-12 md:col-span-4 bg-zinc-900/50 backdrop-blur-md rounded-xl border border-zinc-800 p-card-padding relative overflow-hidden group hover:border-outline-variant transition-colors duration-300 flex flex-col justify-between min-h-[160px]">
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <span className="font-inter text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{label}</span>
        <div className="font-manrope text-[48px] font-extrabold text-on-surface tracking-tight mt-1 leading-none">
          {value?.toLocaleString('en-IN') ?? '—'}
          {suffix && <span className="text-[32px] text-on-surface-variant">{suffix}</span>}
        </div>
      </div>
      <div className="w-10 h-10 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary-container text-[20px]">{icon}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-4">
      {trend && (
        <span className="flex items-center text-secondary font-inter text-xs font-semibold bg-secondary/10 px-1.5 py-0.5 rounded">
          <span className="material-symbols-outlined text-[14px]">trending_up</span>
          {trend}
        </span>
      )}
      {trendLabel && <span className="font-inter text-sm text-outline">{trendLabel}</span>}
      {extra}
    </div>
  </div>
);

const SkeletonBar = ({ className = '' }) => (
  <div className={`bg-zinc-800 animate-pulse rounded ${className}`} />
);

const Home = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getDashboardStats();
      setStats(data);
    } catch (e) {
      console.error('Dashboard load error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleReject = async (id) => {
    try {
      await rejectNegotiation(id);
      load();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="grid grid-cols-12 gap-gutter">
      {/* WIDGET 1 */}
      {loading ? (
        <div className="col-span-12 md:col-span-4 bg-zinc-900/50 rounded-xl border border-zinc-800 p-card-padding min-h-[160px] flex flex-col gap-4">
          <SkeletonBar className="h-3 w-24" />
          <SkeletonBar className="h-12 w-32" />
          <SkeletonBar className="h-3 w-20" />
        </div>
      ) : (
        <StatCard label="Total Offers" value={stats?.totalOffers} icon="handshake" trend="Live" trendLabel="all time" />
      )}

      {/* WIDGET 2 */}
      {loading ? (
        <div className="col-span-12 md:col-span-4 bg-zinc-900/50 rounded-xl border border-zinc-800 p-card-padding min-h-[160px] flex flex-col gap-4">
          <SkeletonBar className="h-3 w-24" />
          <SkeletonBar className="h-12 w-32" />
          <SkeletonBar className="h-3 w-20" />
        </div>
      ) : (
        <StatCard label="Acceptance Rate" value={stats?.acceptanceRate} suffix="%" icon="task_alt" trendLabel="of all negotiations" />
      )}

      {/* WIDGET 3 */}
      {loading ? (
        <div className="col-span-12 md:col-span-4 bg-zinc-900/50 rounded-xl border border-zinc-800 p-card-padding min-h-[160px] flex flex-col gap-4">
          <SkeletonBar className="h-3 w-24" />
          <SkeletonBar className="h-12 w-32" />
          <SkeletonBar className="h-3 w-20" />
        </div>
      ) : (
        <StatCard label="Wasted Trips Avoided" value={stats?.wastedTripsAvoided} icon="route" trendLabel="rejected negotiations" />
      )}

      {/* WIDGET 4: Active Negotiations */}
      <div className="col-span-12 lg:col-span-8 bg-zinc-900/50 backdrop-blur-md rounded-xl border border-zinc-800 relative overflow-hidden flex flex-col h-[500px]">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="px-card-padding pt-6 pb-4 border-b border-zinc-800/50 flex items-center justify-between z-10 bg-zinc-900/80 backdrop-blur-sm sticky top-0">
          <div className="flex items-center gap-3">
            <h3 className="font-manrope text-[24px] font-bold text-on-surface">Active Negotiations</h3>
            {!loading && (
              <span className="bg-primary-container/20 text-primary-container px-2 py-0.5 rounded-full font-inter text-xs font-semibold uppercase">
                {stats?.activeNegotiations?.length ?? 0} Active
              </span>
            )}
          </div>
          <button onClick={() => navigate('/negotiations')} className="font-inter text-xs font-semibold uppercase text-primary-container hover:text-primary transition-colors flex items-center gap-1 outline-none">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-card-padding py-2 space-y-1 custom-scrollbar">
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-zinc-800/30">
                <SkeletonBar className="w-12 h-12 rounded-lg" />
                <div className="flex-1 flex flex-col gap-2">
                  <SkeletonBar className="h-3 w-40" />
                  <SkeletonBar className="h-3 w-24" />
                </div>
                <SkeletonBar className="w-16 h-8 rounded-full" />
              </div>
            ))
          ) : stats?.activeNegotiations?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant gap-2">
              <span className="material-symbols-outlined text-[48px]">handshake</span>
              <p className="font-inter text-sm">No active negotiations</p>
            </div>
          ) : (
            stats?.activeNegotiations?.map((neg) => (
              <div key={neg._id} className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-surface-container-high/50 transition-colors border border-transparent hover:border-zinc-800">
                <div className="flex items-center gap-4 w-1/3">
                  <img alt={neg.productName} className="w-12 h-12 rounded-lg object-cover border border-zinc-800" src={neg.productImage} />
                  <div>
                    <p className="font-inter text-base text-on-surface font-medium truncate">{neg.productName}</p>
                    <p className="font-inter text-sm text-outline">SKU: {neg.productSku}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-1/4">
                  <span className="font-inter text-xs font-semibold uppercase text-on-surface-variant mb-1">Current Offer</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-manrope text-[24px] font-bold text-on-surface">₹{neg.currentOffer?.toLocaleString('en-IN')}</span>
                    <span className="font-inter text-sm text-error line-through">₹{neg.basePrice?.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end w-1/4">
                  <span className="font-inter text-sm text-on-surface flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-zinc-700">
                      <span className="material-symbols-outlined text-[14px] text-outline">person</span>
                    </div>
                    {neg.customerName}
                  </span>
                  <span className="font-inter text-xs font-semibold uppercase text-primary-container mt-1">
                    Round {neg.roundsUsed}/{neg.roundsTotal}
                  </span>
                </div>
                <div className="flex items-center gap-2 w-auto justify-end">
                  <button onClick={() => handleReject(neg._id)} className="w-9 h-9 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-outline hover:text-error hover:border-error/50 hover:bg-error/10 transition-all outline-none">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                  <button onClick={() => navigate(`/negotiation/${neg._id}`)} className="h-9 px-4 rounded-full bg-primary-container text-on-primary-container font-inter text-xs font-semibold uppercase hover:bg-primary transition-colors shadow-[0_0_15px_rgba(96,165,250,0.2)] outline-none">
                    Review
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* WIDGET 5: Live Inventory Sync */}
      <div className="col-span-12 lg:col-span-4 bg-zinc-900/50 backdrop-blur-md rounded-xl border border-zinc-800 relative overflow-hidden flex flex-col h-[500px]">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="px-card-padding pt-6 pb-4 border-b border-zinc-800/50 flex items-center justify-between z-10 bg-zinc-900/80 backdrop-blur-sm sticky top-0">
          <div className="flex flex-col gap-1">
            <h3 className="font-manrope text-[24px] font-bold text-on-surface flex items-center gap-2">
              Live Sync
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
              </span>
            </h3>
            <p className="font-inter text-sm text-outline">
              {loading ? '—' : `${stats?.totalOrders ?? 0} orders · ${stats?.totalCustomers ?? 0} customers`}
            </p>
          </div>
          <button onClick={load} className="w-8 h-8 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center text-outline hover:text-on-surface transition-colors outline-none">
            <span className="material-symbols-outlined text-[18px]">sync</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-card-padding py-4 relative custom-scrollbar">
          <div className="absolute left-[39px] top-6 bottom-6 w-[1px] bg-zinc-800" />
          <div className="space-y-6 relative">
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border-2 border-zinc-900 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.5)]" />
              </div>
              <div className="flex-1 pt-1.5">
                <div className="flex items-start justify-between">
                  <p className="font-inter text-sm text-on-surface font-medium">Database Connected</p>
                  <span className="font-inter text-xs font-semibold uppercase text-outline">Live</span>
                </div>
                <p className="font-inter text-sm text-outline mt-0.5">MongoDB Atlas · Cluster0</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-inter text-xs font-semibold uppercase">Connected</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border-2 border-zinc-900 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
              </div>
              <div className="flex-1 pt-1.5">
                <div className="flex items-start justify-between">
                  <p className="font-inter text-sm text-on-surface font-medium">Active Negotiations</p>
                  <span className="font-inter text-xs font-semibold uppercase text-outline">Now</span>
                </div>
                <p className="font-inter text-sm text-outline mt-0.5">{loading ? '...' : `${stats?.activeNegotiations?.length ?? 0} sessions in progress`}</p>
              </div>
            </div>
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border-2 border-zinc-900 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              </div>
              <div className="flex-1 pt-1.5">
                <div className="flex items-start justify-between">
                  <p className="font-inter text-sm text-on-surface font-medium">Orders Processed</p>
                  <span className="font-inter text-xs font-semibold uppercase text-outline">Total</span>
                </div>
                <p className="font-inter text-sm text-outline mt-0.5">{loading ? '...' : `${stats?.totalOrders ?? 0} orders`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
