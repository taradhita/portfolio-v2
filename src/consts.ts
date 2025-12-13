import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Nadia Taradhita',
  description:
    '',
  href: 'https://taradhita.vercel.app',
  author: 'taradhita',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/taradhita',
    label: 'GitHub',
  },
  {
    href: 'mailto:taradhita@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://linkedin.com/in/nadiataradhita',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
