const topikLain = {
  text: 'Topik Lain',
  link: '/topik-lain',
  items: [
    { text: 'Umroh', link: '/umroh/' },
    { text: 'Sholat', link: '/sholat/' },
    { text: 'Tujuan Hidup', link: '/tujuan-hidup/' },
  ]
}

const umroh = {
  '/umroh/': [
    {
      text: 'Perjalanan Umroh',
      items: [
        { text: 'Persiapan', link: '/umroh/' },
        { text: 'Berangkat', link: '/umroh/berangkat' },
        { 
          text: 'Madinah', 
          link: '/umroh/madinah', 
          items: [
            { text: 'Keutamaan Masjid Nabawi', link: '/umroh/madinah#keutamaan-masjid-nabawi' },
            { text: 'Keutamaan Raudhah', link: '/umroh/madinah#keutamaan-raudhah' },
            { text: 'Ziarah Masjid Quba', link: '/umroh/madinah#ziarah-masjid-quba' },

          ] 
        },
        { 
          text: 'Makkah', 
          link: '/umroh/makkah', 
          items: [
            { text: 'Ibadah Umroh' },
            { text: 'Keutamaan Masjidil Haram' },
            { text: 'Ziarah Arafah, Muzdalifah dan Mina' },

          ] 
        },
        { text: 'Pulang', link: '/umroh/pulang' },
      ]
    },
    topikLain
  ],
}

const sholat = {
  '/sholat/': [
    {
      text: 'Sholat',
      items: [
        { text: 'Persiapan Hati', link: '/sholat/' },
        { text: 'Wudhu', link: '/sholat/wudhu' },
        { text: 'Sholat Fardhu', link: '/sholat/fardhu' }
      ]
    },
    topikLain
  ]
}

const sidebars = {
  ...umroh,
  ...sholat
} 

export default sidebars;