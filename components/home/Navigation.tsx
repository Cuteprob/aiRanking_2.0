'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

import BaseImage from '../image/BaseImage';
import LocaleSwitcher from '../LocaleSwitcher';
import MenuBtn from './MenuBtn';
import NavigationDrawer from './NavigationDrawer';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const NavLinks = NAV_LINKS.map((item) => ({
    ...item,
    label: t(`${item.code}`),
  }));

  return (
    <>
      <header className='bg-frosted-glass sticky left-0 top-0 z-50 flex h-[64px] bg-white px-5 blur-[60%] filter lg:px-0'>
        <nav className='mx-auto flex max-w-pc flex-1 items-center'>
          <div className='flex items-center'>
            <Link className='hover:opacity-80' href='/' title={t('title')}>
              <BaseImage
                src='/images/airanking629.png'
                alt={t('title')}
                title={t('title')}
                width={64}
                height={64}
                className='size-[58px] pb-1 pt-1 lg:size-16'
              />
            </Link>
            <h1 className='ml-2 font-mono text-2xl font-bold text-[#6219F0]'>AiRanking</h1>
          </div>
          {/* pc */}
          <div className='ml-auto flex h-full items-center gap-x-[46px]'>
            <ul className='hidden h-full flex-1 capitalize lg:flex lg:gap-x-12'>
              {NavLinks.map((item) => (
                <Link key={item.code} href={item.href} title={item.code}>
                  <li
                    className={cn(
                      'flex h-full items-center text-black/80 hover:text-[#6219F0]/70',
                      pathname === item.href && 'text-[#6219F0]',
                      pathname.includes(item.href) && item.href !== '/' && 'text-[#6219F0]',
                    )}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className='flex items-center gap-x-3'>
              <LocaleSwitcher />
            </div>
          </div>
          {/* mobile */}
          <div className='mx-3 flex items-center gap-x-4 lg:hidden'>
            <MenuBtn open={open} onClick={() => setOpen(!open)} />
          </div>
        </nav>
      </header>
      <NavigationDrawer open={open} setOpen={setOpen} />
    </>
  );
}
