import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-card-padding inner-glow backdrop-blur-md flex flex-col group hover:border-primary-container transition-all duration-300">
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <img 
          src={product.images[0].url} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        {product.isSurplus && (
          <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-wider">
            Surplus
          </span>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{product.sku}</span>
          <span className="text-[10px] text-on-surface-variant">{product.category}</span>
        </div>
        
        <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-on-surface">₹{product.basePrice.toLocaleString()}</span>
            {product.negotiationEnabled && (
              <span className="text-[10px] text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">handshake</span>
                Negotiable
              </span>
            )}
          </div>
          
          <Link 
            to={`/product/${product._id}`}
            className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
