// Unified contact information data source
const contactData = {
  company: {
    name: "Guangzhou Nedong Information Technology Co., Ltd.",
    address: "Room 501, Tower B, No. 163 Pingyun Road, Tianhe District, Guangzhou",
    phone: "+8613902337334",
    email: "nd@nedong.cn",
    website: "https://www.nedongtire.com",
    whatsapp: "https://api.whatsapp.com/send?l=en&phone=8613902337334"
  },
  mainContacts: [
    {
      id: 1,
      type: 'phone',
      title: 'Call Us',
      info: '+8613902337334',
      icon: 'fa-phone',
      action: 'Call Now',
      link: 'tel:+8613902337334'
    },
    {
      id: 2,
      type: 'email',
      title: 'Email',
      info: 'nd@nedong.cn',
      icon: 'fa-envelope',
      action: 'Send Email',
      link: 'mailto:nd@nedong.cn'
    },
    {
      id: 3,
      type: 'address',
      title: 'Address',
      info: 'Room 501, Tower B, No. 163 Pingyun Road, Tianhe District, Guangzhou',
      icon: 'fa-map-marker-alt',
      action: 'View Map',
      link: 'https://map.baidu.com/'
    },
    {
      id: 4,
      type: 'whatsapp',
      title: 'WhatsApp',
      info: 'Message us on WhatsApp',
      icon: 'fa-whatsapp',
      action: 'Chat Now',
      link: 'https://api.whatsapp.com/send?l=en&phone=8613902337334'
    }
  ],
  socialContacts: [
    {
      id: 1,
      name: 'Facebook',
      link: '#',
      icon: 'fa-facebook-f',
      description: 'Follow our Facebook page',
      colorClass: 'facebook'
    },
    {
      id: 2,
      name: 'YouTube',
      link: '#',
      icon: 'fa-youtube',
      description: 'Subscribe to our YouTube channel',
      colorClass: 'youtube'
    },
    {
      id: 3,
      name: 'WhatsApp',
      link: 'https://api.whatsapp.com/send?l=en&phone=8613902337334',
      icon: 'fa-whatsapp',
      description: 'Contact us via WhatsApp',
      colorClass: 'whatsapp'
    },
    {
      id: 4,
      name: 'Instagram',
      link: '#',
      icon: 'fa-instagram',
      description: 'Follow our Instagram',
      colorClass: 'instagram'
    },
    {
      id: 5,
      name: 'TikTok',
      link: '#',
      icon: 'fa-tiktok',
      description: 'Follow our TikTok account',
      colorClass: 'tiktok'
    },
    {
      id: 6,
      name: 'WeChat',
      link: '#',
      icon: 'fa-weixin',
      description: 'Follow our official WeChat',
      colorClass: 'wechat'
    },
    {
      id: 7,
      name: 'Facebook Messenger',
      link: '#',
      icon: 'fa-facebook-messenger',
      description: 'Chat with us on Messenger',
      colorClass: 'messenger'
    },
    {
      id: 8,
      name: 'Telegram',
      link: '#',
      icon: 'fa-telegram-plane',
      description: 'Join our Telegram group',
      colorClass: 'telegram'
    },
    {
      id: 9,
      name: 'Snapchat',
      link: '#',
      icon: 'fa-snapchat-ghost',
      description: 'Add us on Snapchat',
      colorClass: 'snapchat'
    },
    {
      id: 10,
      name: 'Douyin',
      link: '#',
      icon: 'fa-tiktok',
      description: 'Follow our Douyin account',
      colorClass: 'douyin'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = contactData;
} else if (typeof window !== 'undefined') {
  window.contactData = contactData;
}