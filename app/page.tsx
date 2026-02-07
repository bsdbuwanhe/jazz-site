"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 动画配置：优雅的上浮
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-jazz-black selection:bg-bluenote selection:text-white overflow-hidden">
      
      {/* 1. 顶部导航 */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white">
        <div className="text-2xl font-display uppercase tracking-wider">Blue Note</div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          {['Artists', 'Releases', 'History', 'Store'].map((item) => (
            <a key={item} href="#" className="hover:text-bluenote transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* 2. Hero 区域 (核心视觉) */}
      <section className="relative h-screen w-full flex items-center justify-center">
        
        {/* 背景图：黑白爵士现场 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop"
            alt="Jazz Background"
            fill
            className="object-cover grayscale brightness-50 contrast-125"
            priority
          />
          {/* 关键：Blue Note 蓝色滤镜遮罩 */}
          <div className="absolute inset-0 bg-bluenote/40 mix-blend-multiply"></div>
        </div>

        {/* 文字内容 */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:grid md:grid-cols-12 gap-8 mt-20">
          
          {/* 左上角小标 */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="md:col-span-12 mb-4"
          >
            <p className="text-bluenote font-bold tracking-[0.3em] uppercase text-sm border-b border-bluenote/50 pb-2 inline-block">
              The Finest In Jazz Since 1939
            </p>
          </motion.div>

          {/* 巨大的主标题 (Anton字体) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="md:col-span-9"
          >
            <h1 className="text-7xl md:text-[9rem] leading-[0.85] font-display uppercase text-off-white drop-shadow-2xl">
              Uncompromising<br />
              <span className="text-bluenote">Expression</span>
            </h1>
          </motion.div>

          {/* 右下角描述与按钮 */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}
            className="md:col-span-3 flex flex-col justify-end pb-2"
          >
            <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light tracking-wide">
              Dedicated to recording the finest in jazz. From the boogaloo to the avant-garde.
            </p>
            <button className="bg-off-white text-jazz-black px-6 py-4 w-full md:w-auto font-bold uppercase tracking-widest text-xs hover:bg-bluenote hover:text-white transition-colors duration-300">
              Explore Catalog
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. 专辑展示区 */}
      <section className="py-24 bg-neutral-900 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-gray-800 pb-6">
             <h2 className="text-4xl md:text-5xl font-display uppercase text-off-white">Latest Vinyl</h2>
             <span className="hidden md:block text-bluenote text-xs font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">View All</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 卡片 1 */}
            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="aspect-square relative mb-4 overflow-hidden bg-gray-800">
                 <Image src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80" alt="Album" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-display uppercase mb-1 group-hover:text-bluenote transition-colors">Midnight Blue</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Kenny Burrell</p>
            </motion.div>

            {/* 卡片 2 (错位) */}
            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer md:mt-12">
              <div className="aspect-square relative mb-4 overflow-hidden bg-gray-800">
                 <Image src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80" alt="Album" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-display uppercase mb-1 group-hover:text-bluenote transition-colors">Blue Train</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">John Coltrane</p>
            </motion.div>

             {/* 卡片 3 */}
            <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="aspect-square relative mb-4 overflow-hidden bg-gray-800">
                 <Image src="https://images.unsplash.com/photo-1621360841013-c768371e93cf?w=800&q=80" alt="Album" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-display uppercase mb-1 group-hover:text-bluenote transition-colors">Moanin'</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Art Blakey</p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}