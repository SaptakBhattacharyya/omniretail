import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="bg-surface text-on-surface font-inter antialiased min-h-screen flex overflow-hidden">
      {/* Left Brand Panel */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b35] via-[#131315] to-[#0a1f1a]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/8 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

        {/* Brand */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary-container/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container text-[20px]">storefront</span>
            </div>
            <span className="text-xl font-black tracking-tight text-white font-manrope">OmniRetail</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)]"></span>
            <span className="font-inter text-xs font-semibold text-secondary uppercase tracking-widest">Real-time inventory + AI negotiation</span>
          </div>
          <h1 className="font-manrope text-[48px] font-extrabold text-white mb-4 leading-[1.1] tracking-tighter">
            Retail,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">reimagined.</span>
          </h1>
          <p className="font-inter text-base text-on-surface-variant max-w-sm">
            Find products in stock at your nearest store. Negotiate prices in real-time. One platform, both channels.
          </p>
        </div>

        {/* Feature pills */}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="w-9 h-9 rounded-lg bg-primary-container/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary-container text-[18px]">location_on</span>
            </div>
            <div>
              <p className="font-inter text-sm font-semibold text-white">Shelf-level Stock Visibility</p>
              <p className="font-inter text-xs text-on-surface-variant">Know exactly what's in stock before you visit.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-[18px]">handshake</span>
            </div>
            <div>
              <p className="font-inter text-sm font-semibold text-white">AI Price Negotiation</p>
              <p className="font-inter text-xs text-on-surface-variant">Make offers. Get fair counter-offers instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Auth Panel */}
      <div className="flex-1 flex items-center justify-center p-8 relative bg-surface-container-low lg:bg-surface">
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-container/20 border border-primary-container/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-container text-[18px]">storefront</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white font-manrope">OmniRetail</span>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-surface-container border border-outline-variant rounded-2xl p-8" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,.05) inset, 0 32px 64px rgba(0,0,0,.6)' }}>
            <div className="mb-8">
              <h2 className="font-manrope text-[32px] font-bold text-white mb-2 leading-tight">{title}</h2>
              <p className="font-inter text-sm text-on-surface-variant">{subtitle}</p>
            </div>
            {children}
          </div>
          <p className="text-center font-inter text-xs font-semibold uppercase tracking-widest text-outline mt-6">
            By continuing you agree to OmniRetail's Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
