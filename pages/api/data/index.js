export default function handler(req, res) {
  const data = [
    {
      id: 1,
      title: "/yardım",
      desc: "Tüm Komutları Listeler"
    },
    {
      id: 2,
      title: "/ban",
      desc: "Kullanıcıyı Sunucudan Banlar"
    },
    {
      id: 3,
      title: "/kick",
      desc: "Kullanıcıyı Sunucudan Atar"
    },
    {
      id: 4,
      title: "/ayarlar",
      desc: "Sunucunuzun Ayarlarına Bakın"
    },
  ]

  res.status(200).json(data);
}