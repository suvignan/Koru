import React from 'react';

function App() {
  return (
    <>

      
      <main className="pb-12">
        {/* Hero Section */}
        <section className="relative h-[600px] flex flex-col items-center justify-center px-container-margin pb-stack-lg overflow-hidden border-b border-black">
          <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-lg mb-8">
            <img alt="KORU" className="w-64 md:w-80 object-contain aspect-square mix-blend-multiply" src="/images/000.png" />
            <h1 className="font-display-2xl text-4xl md:text-5xl uppercase tracking-widest text-black pt-2">Koru</h1>
            <h2 className="font-display-xl text-2xl md:text-3xl text-black whitespace-nowrap pb-2">
              Modern Chinese Kitchen.
            </h2>
            <p className="font-body-lg text-lg text-black/80">
              Gourmet flavors delivered with precision.
            </p>
            <p className="font-label-bold text-sm text-black uppercase tracking-[0.25em] pt-4 border-t border-black/20 w-full text-center">
              Premium Cloud Kitchen
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="px-container-margin py-stack-lg space-y-6 border-b border-black">
          <h2 className="font-headline-lg text-headline-lg border-b border-black pb-2">The <span className="italic">Koru</span> Story</h2>
          <p className="text-body-md text-black leading-relaxed">
            Koru brings bold Chinese flavours to Hyderabad with a modern twist. We are a high-velocity, delivery-first cloud kitchen focused on the intersection of traditional culinary heritage and the hyper-modern rhythm of urban life. While our heart beats for delivery, we offer exceptional cloud kitchen experiences at our Banjara Hills flagship.
          </p>
      
        </section>



        {/* Food Gallery Section */}
        <section className="py-stack-lg border-b border-black">
          <div className="px-container-margin flex items-center justify-between mb-6">
            <h2 className="font-headline-lg text-headline-lg text-black font-bold">Our <span className="italic font-normal">Creations</span></h2>
            <span className="text-black font-label-bold text-label-bold underline cursor-pointer hover:text-black/70">View Menu</span>
          </div>
          <div className="overflow-x-auto whitespace-nowrap flex gap-4 px-container-margin no-scrollbar pb-4">
            {[
              { src: 'soup1.jpg', name: 'Hot & Sour Vegitable Soup' },
              { src: 'soup2.jpg', name: 'Classic Egg Drop Soup' },
              { src: 'soup3.jpg', name: 'Manchow Chicken Soup' },
              { src: 'Koru_01012.jpg', name: 'Veg Manchurian Dry' },
              { src: 'Koru_01025.jpg', name: 'Crispy Sweet Corn ' },
              { src: 'Koru_01034.jpg', name: 'Dragon Chicken ' },
              { src: 'Koru_01073.jpg', name: 'Honey Chilli Chicken' },
              { src: 'Koru_01083.jpg', name: 'Chicken 555' },
              { src: 'Koru_01101.jpg', name: 'Classic Panner 65 ' },
              { src: 'Koru_01140.jpg', name: 'Chicken Lollipop Wet' },
              { src: 'Koru_01153.jpg', name: 'Wok tossed Chilli Panner' },
              { src: 'Koru_01192.jpg', name: 'Chicken 65' },
              { src: 'Koru_01221.jpg', name: 'Veg Fried Rice' },
              { src: 'Koru_01230.jpg', name: 'Egg Fried Rice' },
              { src: 'Koru_01253.jpg', name: 'Chilli Garlic Egg Fried Rice' },
              { src: 'noodles1.jpg', name: 'House Chicken Noodles' },
              { src: 'noodles2.jpg', name: 'Chilli Garlic Soft Noodles' },
              { src: 'noodles3.jpg', name: 'Schezwan Chicken Noodles' }
            ].map((item, idx) => (
              <div key={idx} className="inline-block w-64 h-80 shrink-0 border border-black overflow-hidden relative group transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={`/creations/${item.src}`} 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm border-t border-white/10">
                  <p className="text-white font-label-bold tracking-widest text-[11px] uppercase text-center">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="px-container-margin py-stack-lg space-y-stack-md bg-surface-container-low border-y border-black">
          <h2 className="font-headline-lg text-headline-lg text-center">Fastest <span className="italic font-normal">Deliveries</span></h2>
          {/* Trust signals removed */}
          <div className="space-y-3">
            <a className="flex items-center justify-between p-4 border border-red-600 bg-background hover:bg-red-50 transition-colors border-l-4 border-l-red-600" href="https://www.zomato.com/hyderabad/koru-banjara-hills/order" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="Zomato" className="h-5" />
                <span className="font-label-bold uppercase text-black ml-2">Order on Zomato</span>
              </div>
              <span className="material-symbols-outlined text-black">chevron_right</span>
            </a>
            <a className="flex items-center justify-between p-4 border border-[#fc8019] bg-background hover:bg-orange-50 transition-colors border-l-4 border-l-[#fc8019]" href="https://www.swiggy.com/city/hyderabad/koru-banjara-hills-rest1359263" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-3">
                <img src="/images/Swiggy.png" alt="Swiggy" className="h-5 -ml-1 object-contain" />
                <span className="font-label-bold uppercase text-black ml-1">Order on Swiggy</span>
              </div>
              <span className="material-symbols-outlined text-black">chevron_right</span>
            </a>
            <a className="flex items-center justify-between p-4 border border-[#25D366] bg-background hover:bg-green-50 transition-colors border-l-4 border-l-[#25D366]" href="https://wa.me/918179062291" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#25D366]">chat</span>
                <span className="font-label-bold uppercase text-black ml-1">Order on WhatsApp</span>
              </div>
              <span className="material-symbols-outlined text-black">chevron_right</span>
            </a>
          </div>
        </section>




      </main>

      {/* Footer */}
      <footer className="w-full pt-12 pb-12 px-6 bg-surface-container-high flex flex-col items-center text-center space-y-4 border-t border-black">
        <img alt="KORU" className="h-16 object-contain mix-blend-multiply" src="/images/000.png" />
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-label-bold text-base uppercase tracking-wider text-black">Banjara Hills, Hyderabad</p>
          <p className="text-base text-black/60 leading-relaxed">2nd Floor, 8-2-293/191/B, Road No. 14, SV Nagar, GS Nagar, Nandi Nagar, Banjara Hills, Hyderabad, Telangana 500034</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-base text-black/60">
            <span>+91 8179062291</span>
            <span>Velyxofoods@gmail.com</span>
            <span>12:00 Pm – 4:00 AM </span>
            <span className="w-full mt-2 font-label-bold">A Unit Under Velyxo Foods LLP</span>
          </div>
        </div>
        <p className="font-label-bold text-xs tracking-widest text-black/40 pt-4">© 2024 KORU MODERN CHINESE. MINIMALIST GOURMET.</p>
      </footer>


    </>
  );
}

export default App;
