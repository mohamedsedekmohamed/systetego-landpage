import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, ShoppingBag, Activity, Zap, Server, Smartphone, 
  Settings, Megaphone, Tag, ScanLine, CreditCard, LayoutGrid, Monitor, 
  Shirt, Package, Printer, Clock, MapPin, BarChart3, TrendingUp
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const MultiBranchEcosystem = () => {
  // --- States ---
  const [products, setProducts] = useState([
    { id: 1, name: "Basic Cotton T-Shirt (White)", price: 25 },
    { id: 2, name: "Straight Fit Jeans", price: 60 },
    { id: 3, name: "Classic Leather Jacket", price: 120 },
  ]);
  
  const [branchesData, setBranchesData] = useState({
    alex: { name: 'Alexandria Branch', sales: 1250, pendingOrders: 2 },
    cairo: { name: 'Cairo Branch', sales: 3400, pendingOrders: 5 }
  });

  const [activeAdminTab, setActiveAdminTab] = useState('all'); // 'all', 'alex', 'cairo'
  const simulatedBranch = 'alex'; 
  const [activePosTab, setActivePosTab] = useState('pos'); // 'pos', 'stats'

  const [tabletCart, setTabletCart] = useState([]); 
  const [mobileCart, setMobileCart] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [appTheme, setAppTheme] = useState('red');
  const [announcement, setAnnouncement] = useState('');
  const [isSaleActive, setIsSaleActive] = useState(false);

  const themeColors = {
    slate: { bg: 'bg-slate-800', text: 'text-slate-800', border: 'border-slate-800', headerBg: 'bg-slate-950', hover: 'hover:bg-slate-700', pos: 'bg-slate-50', light: 'bg-slate-200' },
    red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', headerBg: 'bg-red-950', hover: 'hover:bg-red-500', pos: 'bg-red-50/50', light: 'bg-red-100' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', headerBg: 'bg-emerald-950', hover: 'hover:bg-emerald-500', pos: 'bg-emerald-50/50', light: 'bg-emerald-100' }
  };
  const currentTheme = themeColors[appTheme];

  const triggerSync = (actionMessage, icon = '📡', color = '#1e293b') => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      if(actionMessage) {
        toast.success(actionMessage, { icon: icon, style: { borderRadius: '12px', background: color, color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } });
      }
    }, 500);
  };

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  
  const handleAddProduct = () => {
    if(newName && newPrice) {
      const newP = { id: Date.now(), name: newName, price: Number(newPrice) };
      triggerSync(`Updated across all branches: ${newName}`, '👗');
      setTimeout(() => setProducts(prev => [newP, ...prev]), 500);
      setNewName(''); setNewPrice('');
    }
  };

  const getFinalPrice = (price) => isSaleActive ? Math.round(price * 0.7) : price;

  const addToTabletCart = (product) => {
    setTabletCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, finalPrice: getFinalPrice(product.price), qty: 1 }];
    });
  };

  const addToMobileCart = (product) => {
    setMobileCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, finalPrice: getFinalPrice(product.price), qty: 1 }];
    });
  };

  const tabletTotal = tabletCart.reduce((sum, item) => sum + (item.finalPrice * item.qty), 0);
  const mobileTotal = mobileCart.reduce((sum, item) => sum + (item.finalPrice * item.qty), 0);

  const handleTabletCheckout = () => {
    if (tabletCart.length === 0) return toast.error("Cart is empty", { style: { background: '#1e293b', color: '#fff' }});
    setIsSyncing(true);
    setTimeout(() => {
      setBranchesData(prev => ({
        ...prev,
        [simulatedBranch]: {
          ...prev[simulatedBranch],
          sales: prev[simulatedBranch].sales + tabletTotal
        }
      }));
      setTabletCart([]);
      setIsSyncing(false);
      triggerSync(`Payment successful. Branch sales updated: $${tabletTotal}`, '🛍️', '#064e3b'); 
    }, 600);
  };

  const handleMobileSend = () => {
    if (mobileCart.length === 0) return toast.error("Cart is empty", { style: { background: '#1e293b', color: '#fff' }});
    setIsSyncing(true);
    setTimeout(() => {
      setBranchesData(prev => ({
        ...prev,
        [simulatedBranch]: {
          ...prev[simulatedBranch],
          pendingOrders: prev[simulatedBranch].pendingOrders + mobileCart.reduce((sum, item) => sum + item.qty, 0)
        }
      }));
      setMobileCart([]);
      setIsSyncing(false);
      triggerSync("Order sent to branch warehouse!", '📦', '#b45309'); 
    }, 600);
  };

  const displayedStats = activeAdminTab === 'all' 
    ? { 
        sales: Object.values(branchesData).reduce((sum, b) => sum + b.sales, 0),
        pendingOrders: Object.values(branchesData).reduce((sum, b) => sum + b.pendingOrders, 0)
      }
    : branchesData[activeAdminTab];

  return (
    <section className="py-20 px-4 md:px-8 border-y border-slate-800/80 overflow-hidden font-sans min-h-screen flex items-center ">
      <Toaster position="top-center" />
      
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 text-one text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} fill="currentColor" className={isSyncing ? "animate-pulse" : ""} /> Multi-Branch System
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 flex justify-center gap-2 flex-wrap tracking-tight">
            Centralized Management <span className="text-red-800 bg-clip-text bg-gradient-to-r from-one to-fuchsia-400">with Independent Stats</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Monitor each branch's sales independently from the admin panel, while cashiers track their branch metrics from their own screens.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* ========================================= */} 
          {/* Admin Monitor */}
          {/* ========================================= */}
          <div className="xl:col-span-5 w-full order-2 xl:order-1">
             <div className={`w-full bg-slate-900 rounded-2xl border-[6px] border-slate-700 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${isSyncing ? 'border-red-500/50 shadow-red-500/20' : ''}`}>
                
                <div className="bg-slate-800 h-10 flex items-center px-4 border-b border-slate-700/50 shrink-0">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                   </div>
                   <div className="mx-auto bg-slate-900/50 rounded-md text-[10px] text-slate-400 px-6 py-1 flex items-center gap-2 font-mono">
                      <Server size={12} /> erp.apparel-group.com
                   </div>
                </div>

                <div className="p-6 overflow-y-auto no-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-900">
                   
                   <div className="flex justify-between items-center mb-6">
                      <h3 className="text-white font-bold text-xl flex items-center gap-2">
                         <Activity className="text-red-500" /> Headquarters (HQ)
                      </h3>
                   </div>

                   {/* Admin Branch Tabs */}
                   <div className="flex gap-2 mb-4 bg-slate-950/50 p-1.5 rounded-xl border border-slate-800/50 w-fit">
                      <button onClick={() => setActiveAdminTab('all')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeAdminTab === 'all' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>All Branches</button>
                      <button onClick={() => setActiveAdminTab('alex')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeAdminTab === 'alex' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Alexandria</button>
                      <button onClick={() => setActiveAdminTab('cairo')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeAdminTab === 'cairo' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Cairo</button>
                   </div>

                   {/* Selected Branch Stats */}
                   <motion.div key={activeAdminTab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-3 mb-8">
                      <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/50 shadow-inner text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-10"><CreditCard size={32}/></div>
                         <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold mb-1">Total Revenue</p>
                         <p className="text-emerald-400 font-mono text-lg sm:text-xl font-black">${displayedStats.sales}</p>
                      </div>
                      <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/50 shadow-inner text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-10"><Package size={32}/></div>
                         <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold mb-1">Pending Orders</p>
                         <p className="text-amber-400 font-mono text-lg sm:text-xl font-black">{displayedStats.pendingOrders}</p>
                      </div>
                      <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/50 shadow-inner text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-10"><Shirt size={32}/></div>
                         <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold mb-1">Active Items</p>
                         <p className="text-red-800 font-mono text-lg sm:text-xl font-black">{products.length}</p>
                      </div>
                   </motion.div>

                   <div className="space-y-6">
                       <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-700/50 flex flex-col justify-between">
                          <h4 className="text-slate-300 text-sm font-bold mb-4 flex items-center gap-2">
                             <Plus size={18} className="text-red-800" /> Add New Product
                          </h4>
                          <div className="space-y-3">
                             <input 
                                type="text" value={newName} onChange={e => setNewName(e.target.value)}
                                placeholder="Product Name (e.g., Denim Jacket)" 
                                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition-all text-sm"
                             />
                             <div className="flex gap-3">
                                <input 
                                   type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)}
                                   placeholder="Price ($)" 
                                   className="w-1/3 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition-all text-sm"
                                />
                                <button onClick={handleAddProduct} className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 text-sm">
                                   Deploy System
                                </button>
                             </div>
                          </div>
                       </div>

                       <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-700/50 space-y-5">
                          <h4 className="text-slate-300 text-sm font-bold flex items-center gap-2">
                             <Settings size={18} className="text-red-800" /> Campaigns & Offers
                          </h4>
                          
                          <div className="flex flex-wrap items-center justify-between gap-4">
                              <div>
                                  <p className="text-slate-500 text-[11px] font-bold mb-2 uppercase tracking-wider">System Theme</p>
                                  <div className="flex gap-3">
                                      {['slate', 'red', 'emerald'].map(color => (
                                          <button
                                              key={color} onClick={() => { setAppTheme(color); triggerSync("System identity unified!", '🎨'); }}
                                              className={`w-8 h-8 rounded-full border-2 transition-all ${appTheme === color ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'} ${color === 'slate' ? 'bg-slate-800 shadow-slate-500/50' : color === 'red' ? 'bg-red-600 shadow-red-500/50' : 'bg-emerald-600 shadow-emerald-500/50'}`}
                                          />
                                      ))}
                                  </div>
                              </div>

                              <div className="flex-1 min-w-[150px] flex items-center justify-between bg-slate-950/50 p-3 rounded-xl border border-slate-700/50">
                                  <div className="flex items-center gap-2">
                                      <Tag size={16} className={isSaleActive ? "text-rose-500" : "text-slate-400"} />
                                      <span className="text-xs font-bold text-slate-300">Activate Flash Sale</span>
                                  </div>
                                  <button onClick={() => { setIsSaleActive(!isSaleActive); triggerSync(!isSaleActive ? "Flash sale started in all branches!" : "Flash sale ended!", '🔥'); }} className={`w-10 h-5 rounded-full transition-colors relative ${isSaleActive ? 'bg-rose-500' : 'bg-slate-700'}`}>
                                      <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isSaleActive ? 'translate-x-5' : 'translate-x-0'}`} />
                                  </button>
                              </div>
                          </div>
                       </div>
                   </div>
                </div>
             </div>
             <div className="hidden xl:block w-24 h-6 bg-slate-800 mx-auto rounded-b-xl shadow-xl"></div>
             <div className="hidden xl:block w-32 h-2 bg-slate-700 mx-auto rounded-full mt-1 opacity-50"></div>
          </div>

          {/* ========================================= */}
          {/* Retail POS Lab */}
          {/* ========================================= */}
          <div className="xl:col-span-7 w-full order-1 xl:order-2 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 relative flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[500px]">
             
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[100px] opacity-10 transition-colors duration-1000 ${currentTheme.bg} pointer-events-none`}></div>

             {/* --- Tablet POS --- */}
             <div className={`w-full max-w-[520px] h-[400px] ${currentTheme.pos} rounded-3xl p-3 shadow-2xl border-[8px] border-slate-900 flex overflow-hidden z-10 transition-colors duration-500 backdrop-blur-md shrink-0`}>
                
                <div className={`${currentTheme.headerBg} w-16 rounded-2xl flex flex-col items-center py-6 gap-6 shadow-inner transition-colors duration-500 shrink-0`}>
                   <div className="text-white"><Monitor size={20}/></div>
                   <button onClick={() => setActivePosTab('pos')} className={`p-2.5 rounded-xl transition-all ${activePosTab === 'pos' ? 'bg-white/15 text-white shadow-md' : 'text-white/40 hover:bg-white/5'}`}><LayoutGrid size={20}/></button>
                   <button onClick={() => setActivePosTab('stats')} className={`p-2.5 rounded-xl transition-all ${activePosTab === 'stats' ? 'bg-white/15 text-white shadow-md' : 'text-white/40 hover:bg-white/5'}`}><BarChart3 size={20}/></button>
                   <div className="mt-auto text-white/40"><Settings size={20}/></div>
                </div>

                <div className="flex-1 flex flex-col px-4 min-w-0">
                   <div className="flex justify-between items-center py-2 mb-2 border-b border-slate-200/50 pb-2">
                      <div className="flex items-center gap-2">
                         <MapPin size={16} className={currentTheme.text} />
                         <h3 className="font-bold text-slate-800 text-sm">Alex Branch POS</h3>
                      </div>
                   </div>

                   {activePosTab === 'pos' ? (
                     <div className="flex-1 overflow-y-auto no-scrollbar pb-2 pt-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           <AnimatePresence initial={false}>
                              {products.map((p) => (
                                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                                  onClick={() => addToTabletCart(p)}
                                  className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 cursor-pointer hover:border-slate-400 active:scale-95 transition-all relative overflow-hidden group"
                                >
                                   <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${currentTheme.light}`}>
                                       <Shirt size={16} className={currentTheme.text} />
                                   </div>
                                   <div className="min-w-0 flex-1">
                                      <p className="font-bold text-slate-800 text-xs mb-0.5 truncate">{p.name}</p>
                                      <p className={`${currentTheme.text} font-black text-xs`}>${isSaleActive ? Math.round(p.price * 0.7) : p.price}</p>
                                   </div>
                                   {isSaleActive && <div className="absolute top-1 right-1 bg-rose-100 px-1.5 py-0.5 rounded text-[8px] font-black text-rose-600 animate-pulse">SALE</div>}
                                </motion.div>
                              ))}
                           </AnimatePresence>
                        </div>
                     </div>
                   ) : (
                     <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col gap-4 py-4">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                           <div className={`w-12 h-12 mx-auto rounded-full ${currentTheme.light} flex items-center justify-center mb-3`}>
                              <TrendingUp size={24} className={currentTheme.text} />
                           </div>
                           <p className="text-slate-500 font-bold text-xs mb-1 uppercase tracking-wider">Branch Sales (Today's Target)</p>
                           <h2 className={`text-4xl font-black ${currentTheme.text}`}>${branchesData.alex.sales}</h2>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                           <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-3">
                              <Package size={24} className="text-amber-600" />
                           </div>
                           <p className="text-slate-500 font-bold text-xs mb-1 uppercase tracking-wider">Fulfilled Warehouse Orders</p>
                           <h2 className="text-3xl font-black text-slate-800">{branchesData.alex.pendingOrders} Orders</h2>
                        </div>
                     </motion.div>
                   )}
                </div>

                <div className="w-[140px] bg-white rounded-2xl border border-slate-200 flex flex-col shadow-sm overflow-hidden shrink-0">
                   <div className={`p-3 border-b border-slate-100 font-bold text-[10px] uppercase tracking-wider text-center text-white ${currentTheme.bg}`}>Customer Cart</div>
                   
                   <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                      {tabletCart.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-slate-300">
                           <ShoppingBag size={24} />
                        </div>
                      ) : (
                        tabletCart.map((item, i) => (
                          <div key={i} className="bg-slate-50 p-2 rounded-lg text-[10px] border border-slate-100">
                             <div className="flex justify-between font-bold text-slate-800 truncate mb-1">
                                <span className="truncate pr-1">{item.name}</span>
                                <span>x{item.qty}</span>
                             </div>
                             <div className={`text-xs font-black ${currentTheme.text}`}>${item.finalPrice * item.qty}</div>
                          </div>
                        ))
                      )}
                   </div>

                   <div className="p-2 border-t border-slate-100 bg-slate-50">
                      <div className="flex justify-between items-center mb-2 px-1 text-xs">
                         <span className="font-bold text-slate-500">Total:</span>
                         <span className="font-black text-slate-900">${tabletTotal}</span>
                      </div>
                      <button onClick={handleTabletCheckout} className={`w-full py-2 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${tabletCart.length > 0 ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-300 cursor-not-allowed'}`}>
                        <CreditCard size={12}/> Checkout & Print
                      </button>
                   </div>
                </div>
             </div>

             {/* --- Mobile App --- */}
             <div className={`w-[260px] h-[500px] ${currentTheme.pos} rounded-[2.5rem] p-3 shadow-2xl border-[10px] border-slate-900 flex flex-col z-20 transition-colors duration-500 backdrop-blur-xl bg-white/50 shrink-0 mx-auto md:mx-0 md:-ml-8 lg:-ml-12`}>
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-40 flex justify-center items-end pb-1">
                    <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
                </div>
                
                <div className={`${currentTheme.headerBg} transition-colors duration-500 -m-3 mb-0 p-5 pt-8 rounded-b-3xl shadow-lg relative z-20`}>
                   <div className="flex justify-between items-center text-white mb-3">
                      <div className="flex items-center gap-1.5">
                         <Smartphone size={16} className={`${currentTheme.text}`} />
                         <span className="font-black text-sm">Seller App</span>
                      </div>
                   </div>
                </div>

                <AnimatePresence>
                    {announcement && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-amber-100 text-amber-900 text-[10px] font-bold text-center py-2 px-4 -mx-3 mb-2 shadow-sm z-10 flex items-center justify-center gap-2 overflow-hidden">
                            <Megaphone size={12} /> <span className="truncate">{announcement}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex-1 overflow-y-auto no-scrollbar pt-3 pb-2">
                   <div className="grid grid-cols-2 gap-2">
                       <AnimatePresence initial={false}>
                          {products.map((p) => (
                            <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} whileTap={{ scale: 0.9 }}
                              onClick={() => addToMobileCart(p)}
                              className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer relative"
                            >
                               {isSaleActive && <span className="absolute top-1 left-1 bg-rose-100 text-rose-600 text-[8px] px-1 py-0.5 rounded font-black animate-pulse">SALE</span>}
                               <div className={`w-8 h-8 rounded-full mb-1.5 flex items-center justify-center ${currentTheme.light}`}>
                                   <Shirt size={14} className={currentTheme.text} />
                               </div>
                               <p className="font-bold text-slate-800 text-[10px] line-clamp-1 mb-0.5">{p.name}</p>
                               <p className="text-slate-400 text-[8px] mb-1">Sizes: S, M, L</p>
                            </motion.div>
                          ))}
                       </AnimatePresence>
                   </div>
                </div>

                <div className="bg-white border-t border-slate-200 -m-3 mt-0 p-3 rounded-b-[2rem] z-20 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                   <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                         <div className={`w-5 h-5 rounded flex items-center justify-center text-white ${currentTheme.bg}`}>{mobileCart.reduce((s,i)=>s+i.qty,0)}</div>
                         Requested Items
                      </div>
                   </div>
                   <button onClick={handleMobileSend} className={`w-full py-2.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-xs ${mobileCart.length > 0 ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-300 cursor-not-allowed'}`}>
                      <Package size={14} /> Request from Warehouse
                   </button>
                   <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mt-2.5"></div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiBranchEcosystem;