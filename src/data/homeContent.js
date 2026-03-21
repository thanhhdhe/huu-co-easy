import heroImage from '@/assets/images/hero.jpg'
import logoImage from '@/assets/images/logo.png'
import bookCoverImage from '@/assets/images/book-cover.png'
import introSceneImage from '@/assets/images/intro-scene.png'
import qrImage from '@/assets/images/qr.png'
import chapter1Image from '@/assets/images/chapter-1.png'
import chapter2Image from '@/assets/images/chapter-2.png'
import chapter3Image from '@/assets/images/chapter-3.png'
import chapter4Image from '@/assets/images/chapter-4.png'
import mascotImage from '@/assets/images/mascot.png'
import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import tiktokIcon from '@/assets/icons/tiktok.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import mailIcon from '@/assets/icons/mail.svg'
import locationIcon from '@/assets/icons/location.svg'

export const assets = {
  hero: heroImage,
  logo: logoImage,
  bookCover: bookCoverImage,
  introScene: introSceneImage,
  chapter1: chapter1Image,
  chapter2: chapter2Image,
  chapter3: chapter3Image,
  chapter4: chapter4Image,
  mascot: mascotImage,
  qr: qrImage,
  iconFacebook: facebookIcon,
  iconInstagram: instagramIcon,
  iconTiktok: tiktokIcon,
  iconPhone: phoneIcon,
  iconMail: mailIcon,
  iconLocation: locationIcon,
}

export const chapters = [
  { id: '01', title: 'Tổ ong ốm yếu', image: assets.chapter1 },
  { id: '02', title: 'Hai khu vườn kỳ lạ', image: assets.chapter2 },
  { id: '03', title: 'Bí mật của bác giun đất', image: assets.chapter3 },
  { id: '04', title: 'Ong nâu trở về', image: assets.chapter4 },
]

export const guideSteps = [
  { id: '01', text: 'Truy cập website', align: 'left' },
  {
    id: '02',
    text: 'Nhấn AR Camera và cấp quyền truy cập camera',
    align: 'left',
  },
  {
    id: '03',
    text: 'Chiếu camera vào trang truyện có ký hiệu (có thể xoay ngang nếu thiếu không gian)',
    align: 'left',
  },
  { id: '04', text: 'Tận hưởng những câu chuyện tranh sinh động', align: 'left' },
]

export const contacts = [
  { icon: assets.iconFacebook, text: 'Hữu Cơ Easy', group: 'social' },
  // { icon: assets.iconInstagram, text: '@huucoeasyvoigeng', group: 'social' },
  { icon: assets.iconTiktok, text: 'huucoeasy', group: 'social' },
  { icon: assets.iconPhone, text: '0243 227 2806', href: 'tel:02432272806', group: 'direct' },
  {
    icon: assets.iconMail,
    text: 'huucoeasy@gmail.com',
    href: 'mailto:huucoeasy@gmail.com',
    group: 'direct',
  },
  {
    icon: assets.iconLocation,
    text: 'Tầng 11 - Cung Tri Thức, Số 1 Tôn Thất Thuyết, Quận Cầu Giấy, Hà Nội',
    href: 'https://maps.google.com/?q=Tang+11+Cung+Tri+Thuc+So+1+Ton+That+Thuyet+Quan+Cau+Giay+Ha+Noi',
    group: 'direct',
  },
]
