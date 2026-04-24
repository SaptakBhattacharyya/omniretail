import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-8 py-4 border-b border-zinc-800">
      <div className="flex items-center gap-4">
        {/* Breadcrumb or Back Button could go here */}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
          <input 
            className="bg-surface-container-low border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all w-64" 
            placeholder="Search inventory..." 
            type="text"
          />
        </div>
        
        <button className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        
        {user ? (
          <div className="flex items-center gap-3 ml-2">
            <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src={user.avatar || "https://lh3.googleusercontent.com/a/default-user=s80-c"} 
              />
            </div>
            <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
          </div>
        ) : (
          <button className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
