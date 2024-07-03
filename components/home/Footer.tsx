import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import BaseImage from '../image/BaseImage';

function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
      target={target}
      type={type}
    >
      {title}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations('Footer');

  const SERVICES = [
    {
      title: t('contactUs'),
      href: 'https://www.airanking.ai',
    },
  ];

  const FRIENDS = [
    {
      title: t('AiRanking'),
      href: 'https://www.airanking.ai',
    },
    {
      title: t('tap4'),
      href: 'https://tap4.ai',
    },
  ];

  const LEGAL = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];

  return (
    <footer className='footer bg-white p-10 text-base-content'>
      <aside>
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
        <div className='flex flex-col items-center lg:items-stretch'>
          <h1 className='text-xl font-bold text-black lg:h-8 lg:text-[16px]'>{t('title')}</h1>
          <h2 className='text-xs text-black'>{t('subTitle')}</h2>
        </div>
      </aside>
      <nav>
        <h6 className='footer-title text-black/90'>{t('service')}</h6>
        {SERVICES.map((item) => (
          <InfoLink key={item.href} href={item.href} title={item.title} />
        ))}
      </nav>
      <nav>
        <h6 className='footer-title text-black/90'>{t('friends')}</h6>
        {FRIENDS.map((item) => (
          <a
            href={item.href}
            key={item.href}
            target='_blank'
            rel='noreferrer'
            className='text-xs hover:opacity-70 lg:text-sm'
            title={item.title}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className='footer-title text-black/90'>{t('legal')}</h6>
        {LEGAL.map((item) => (
          <InfoLink key={item.href} href={item.href} title={item.title} />
        ))}
      </nav>
    </footer>
  );
}
