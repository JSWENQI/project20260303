/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Palette, 
  Hammer, 
  History, 
  Sparkles,
  Share2,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-heritage-paper/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/a5ty/1342X286/%E8%B5%84%E6%BA%90_16%403x.png" 
            alt="夹江年画研究所" 
            className={`h-10 md:h-12 object-contain transition-all ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="hidden md:flex gap-12 items-center">
          {['起源', '艺术', '工艺', '传承'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`text-sm tracking-widest hover:text-heritage-red transition-colors ${isScrolled ? 'text-heritage-ink' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className={`px-6 py-2 rounded-full border text-sm tracking-widest transition-all ${isScrolled ? 'border-heritage-red text-heritage-red hover:bg-heritage-red hover:text-white' : 'border-white text-white hover:bg-white hover:text-heritage-ink'}`}>
            探索更多
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-heritage-ink' : 'text-white'} /> : <Menu className={isScrolled ? 'text-heritage-ink' : 'text-white'} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-heritage-ink">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-heritage-ink z-10" />
        <img 
          src="https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/VNDr/4961X3508/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png" 
          alt="夹江年画研究所工坊实景" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-heritage-gold tracking-[0.5em] text-sm uppercase mb-4 block font-medium">
            Sichuan Intangible Cultural Heritage
          </span>
          <h1 className="text-white text-7xl md:text-9xl font-serif mb-8 leading-tight">
            蜀地瑰宝<br />
            <span className="italic font-light">夹江木版年画</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
            起源于明代，兴盛于清朝。以手工竹纸为材，木版套印为魂，
            勾勒出跨越数百年的民俗记忆与吉祥愿景。
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#艺术"
              className="group bg-heritage-red text-white px-10 py-4 rounded-full flex items-center gap-3 hover:bg-red-700 transition-all text-lg tracking-widest"
            >
              开启艺术之旅
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#起源"
              className="text-white border border-white/30 px-10 py-4 rounded-full hover:bg-white/10 transition-all text-lg tracking-widest backdrop-blur-sm"
            >
              了解历史
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">向下滚动</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/50 w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Vertical Text Accent */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <div className="text-vertical text-white/20 font-serif text-4xl tracking-[1em] select-none">
          岁岁平安 · 吉祥如意
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "手工竹纸",
      desc: "夹江素有“书画纸之乡”美誉，年画采用当地特产手工竹纸，质地坚韧，吸墨均匀。",
      icon: <Sparkles className="w-8 h-8" />,
      img: "https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/7xkd/1080X1620/image.png"
    },
    {
      title: "木版套印",
      desc: "每一张年画都需经过梨木雕版、多色套印，色彩鲜艳而不俗，线条古拙而有力。",
      icon: <Hammer className="w-8 h-8" />,
      img: "https://picsum.photos/seed/woodblock/800/1000"
    },
    {
      title: "民俗叙事",
      desc: "题材涵盖门神、戏曲、神话故事，是研究川西平原民俗文化的“活化石”。",
      icon: <History className="w-8 h-8" />,
      img: "https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/XSNW/1080X1440/image.png"
    }
  ];

  return (
    <section id="艺术" className="py-32 bg-heritage-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-heritage-ink">
              匠心独运<br />
              <span className="text-heritage-red italic">非遗之美</span>
            </h2>
            <p className="text-heritage-ink/60 text-lg leading-relaxed">
              夹江年画不仅是装饰，更是信仰与希望的载体。从选材到成品，每一步都凝聚着民间艺人的智慧与汗水。
            </p>
          </div>
          <div className="text-right">
            <span className="text-8xl font-serif text-heritage-red/10 block leading-none">01</span>
            <span className="text-sm tracking-widest uppercase text-heritage-ink/40">Core Essence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img 
                  src={f.img} 
                  alt={f.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-heritage-red/5 rounded-xl text-heritage-red">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-heritage-ink">{f.title}</h3>
                  <div className="w-12 h-1 bg-heritage-red/20 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "起稿", desc: "艺人根据传统题材或生活场景，在纸上勾勒底稿。" },
    { title: "雕版", desc: "选用质地细腻的梨木，将底稿反贴其上，精细雕琢。" },
    { title: "套印", desc: "分色分版，逐一叠印，确保色彩精准衔接。" },
    { title: "开脸", desc: "最后为人物点睛，赋予画作灵魂与神韵。" }
  ];

  return (
    <section id="工艺" className="py-32 bg-heritage-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden aspect-square"
            >
              <img 
                src="https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/VNDr/4961X3508/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png" 
                alt="Printing Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-heritage-gold/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-heritage-red/20 blur-[100px] rounded-full" />
          </div>

          <div>
            <span className="text-heritage-gold tracking-widest text-sm uppercase mb-4 block">The Craftsmanship</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
              指尖上的<br />
              <span className="italic text-heritage-gold">千锤百炼</span>
            </h2>
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-heritage-gold flex items-center justify-center text-heritage-gold font-serif group-hover:bg-heritage-gold group-hover:text-heritage-ink transition-all">
                      {i + 1}
                    </div>
                    {i !== steps.length - 1 && <div className="w-px h-full bg-heritage-gold/20 mt-4" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-serif mb-2 group-hover:text-heritage-gold transition-colors">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const artworks = [
    { title: "秦琼尉迟恭", category: "门神系列", img: "https://picsum.photos/seed/art1/600/800" },
    { title: "麒麟送子", category: "吉祥系列", img: "https://picsum.photos/seed/art2/600/800" },
    { title: "白蛇传", category: "戏曲系列", img: "https://picsum.photos/seed/art3/600/800" },
    { title: "灶王爷", category: "神祇系列", img: "https://picsum.photos/seed/art4/600/800" },
  ];

  return (
    <section id="起源" className="py-32 bg-heritage-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-6">经典作品赏析</h2>
          <div className="w-24 h-1 bg-heritage-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((art, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4 shadow-lg">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <p className="text-heritage-red text-xs tracking-widest uppercase mb-1">{art.category}</p>
              <h3 className="text-xl font-serif text-heritage-ink">{art.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-heritage-ink text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://test.fukit.cn/autoupload/fr/VrQ63xy91qcHlJKVVBXPJzpZ-8H7BAsStcYtMiH6rzqyl5f0KlZfm6UsKj-HyTuv/20260303/a5ty/1342X286/%E8%B5%84%E6%BA%90_16%403x.png" 
                alt="夹江年画研究所" 
                className="h-12 object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 max-w-md leading-relaxed">
              致力于保护与推广中国非物质文化遗产。夹江年画，不仅是四川的骄傲，更是中华民族宝贵的精神财富。
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-heritage-gold">快速链接</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">非遗地图</a></li>
              <li><a href="#" className="hover:text-white transition-colors">合作咨询</a></li>
              <li><a href="#" className="hover:text-white transition-colors">版权声明</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-heritage-gold">联系我们</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-2">四川省乐山市夹江县</li>
              <li className="flex items-center gap-2">contact@jiajiangart.cn</li>
              <li className="flex gap-4 mt-6">
                <Share2 className="w-5 h-5 cursor-pointer hover:text-heritage-gold transition-colors" />
                <ExternalLink className="w-5 h-5 cursor-pointer hover:text-heritage-gold transition-colors" />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2024 夹江年画文化保护中心. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-heritage-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <ProcessSection />
        <GallerySection />
        
        {/* Call to Action Section */}
        <section id="传承" className="py-32 bg-heritage-red text-white text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 px-6"
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8">让传统文化<br />走进现代生活</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-12">
              加入我们的保护计划，让这份流传百年的艺术在数字时代焕发新生。
            </p>
            <button className="bg-white text-heritage-red px-12 py-5 rounded-full font-medium text-lg tracking-widest hover:bg-heritage-paper transition-all shadow-2xl">
              立即参与
            </button>
          </motion.div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 text-9xl font-serif">福</div>
             <div className="absolute bottom-10 right-10 text-9xl font-serif">禄</div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif opacity-5">禧</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
