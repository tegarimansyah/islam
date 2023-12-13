import { defineConfig } from 'vitepress'
import sidebars from './sidebars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tegar Belajar Islam",
  description: "Terlahir Muslim, Dan Memperdalamnya",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'About',
        items:[
          { text: 'Tentang Islam', link: '/about' },
          { text: 'Tegar Imansyah', link: 'https://tegar.my.id' },
        ]
      },
      { 
        text: 'Interaktif',
        items:[
          { text: "Memperbaiki Bacaan Al Qur'an", link: '/iqro' },
          { text: "Membaca Arti Al Qur'an", link: '/arti-quran' },
          { text: "Membaca Al Matsurat", link: '/al-matsurat' },
          { text: "Merangkai Do'a", link: '/doa' },
        ]
      },
      { 
        text: 'Karya Lain',
        items:[
          { text: 'Personal Development', link: 'https://konsisten.id' },
          { text: 'Business Consultation', link: 'https://talangemas.id' },
          { text: 'Business Digital', link: 'https://urusan.id' },
          { text: 'Cloud Technology', link: 'https://bongkar.cloud' },
        ]
      },
    ],

    sidebar: sidebars,
    
    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <title>Personal Website</title>  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>'}, link: 'https://tegar.my.id', ariaLabel:"Tegar's Personal Website" },
      { icon: 'twitter', link: 'https://twitter.com/tegar_imansyah', ariaLabel:"Tegar's twitter" },
      { icon: 'github', link: 'https://github.com/tegarimansyah', ariaLabel:"Tegar's Github" },
    ]
  },
  cleanUrls: true,
  srcDir: './src'
})
