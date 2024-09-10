
export const routeMapping = {
  '1': '/',

  '21': '/ozgecmis', // Özgeçmiş
  '22': '/yayinlar', // Akademik Çalışmalar Ve Yayınlar
  '23': '/gorseller', // Muayenehane Görselleri
  '31': '/botoks/dudak', // Dudak Botoksu
  '32': '/botoks/cene', // Çene Botoksu
  '33': '/botoks/kas', // Kaş Botoksu
  '34': '/botoks/yuz', // Yüz Botoksu
  '41': '/dolgu/dudak', // Dudak Dolgusu
  '42': '/dolgu/burun', // Burun Dolgusu
  '43': '/dolgu/yanak', // Yanak Dolgusu
  '6': '/ozon-tedavisi', // Ozon Tedavisi
  '7': '/burun-estetigi', // Burun Estetiği
  '8': '/sac-ekimi', // Saç Ekimi
  '9': '/genclik-asisi', // Gençlik Açısı
  '10': '/biorezonans', // Biorezonans
  '11': '/prp', // PRP
};

export const items = [
  {
    key: '1',
    label: 'Anasayfa',
  },
  {
    key: '2',
    label: 'Randevu Al',
  },
  {
    key: '3',
    label: 'Hakkımda',
    children: [
      {
        key: '21',
        label: 'Özgeçmiş',
      },
      {
        key: '23',
        label: 'Muayenehane Görselleri',
      },
    ],
  },

  {
    key: '4',
    label: 'Botoks Uygulamaları',
    children: [
      {
        key: '31',
        label: 'Dudak Botoksu',
      },
      {
        key: '32',
        label: 'Çene Botoksu',
      },
      {
        key: '33',
        label: 'Kaş Botoksu',
      },
      {
        key: '34',
        label: 'Yüz Botoksu',
      },
    ],
  },
  {
    key: '5',
    label: 'Dolgu Uygulamaları',
    children: [
      {
        key: '41',
        label: 'Dudak Dolgusu',
      },
      {
        key: '42',
        label: 'Burun Dolgusu',
      },
      {
        key: '43',
        label: 'Yanak Dolgusu',
      },
    ],
  },
  {
    key: '6',
    label: 'Ozon Tedavisi',
  },
  {
    key: '7',
    label: 'Burun Estetiği',
  },
  {
    key: '8',
    label: 'Saç Ekimi',
  },
  {
    key: '9',
    label: 'Gençlik Açısı',
  },
  {
    key: '10',
    label: 'Biorezonans',
  },
  {
    key: '11',
    label: 'PRP',
  },
 
];


export const itemsen = [
  {
    key: '1',
    label: 'Homepage',
  },
  {
    key: '2',
    label: 'Randevu Al',
  },
  {
    key: '3',
    label: 'About Me',
    children: [
      {
        key: '21',
        label: 'Resume',
      },
      {
        key: '22',
        label: 'Academic Studies and Publications',
      },
      {
        key: '23',
        label: 'Clinic Images',
      },
    ],
  },

  {
    key: '4',
    label: 'Botox Applications',
    children: [
      {
        key: '31',
        label: 'Lip Botox',
      },
      {
        key: '32',
        label: 'Chin Botox',
      },
      {
        key: '33',
        label: 'Eyebrow Botox',
      },
      {
        key: '34',
        label: 'Face Botox',
      },
    ],
  },
  {
    key: '5',
    label: 'Filler Applications',
    children: [
      {
        key: '41',
        label: 'Lip Filler',
      },
      {
        key: '42',
        label: 'Nose Filler',
      },
      {
        key: '43',
        label: 'Cheek Filler',
      },
    ],
  },
  {
    key: '6',
    label: 'Ozone Therapy',
  },
  {
    key: '7',
    label: 'Nose Aesthetics',
  },
  {
    key: '8',
    label: 'Hair Transplant',
  },
  {
    key: '9',
    label: 'Youth Angle',
  },
  {
    key: '10',
    label: 'Bioresonance',
  },
  {
    key: '11',
    label: 'PRP',
  },
];
