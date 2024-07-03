import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Faq from '@/components/Faq';

import SubmitForm from './SubmitForm';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.submit',
  });

  return {
    title: t('title'),
  };
}

export default function Page() {
  const t = useTranslations('Submit');

  return (
    <div className='flex-y-center mx-auto flex max-w-pc'>
      <div className='flex-y-center my-3 flex lg:my-10'>
        <h1 className='font-mono text-2xl font-semibold text-black lg:text-4xl'>{t('title')}</h1>
        <h2 className='text-balance text-xs font-semibold text-black/60 lg:text-sm'>{t('subTitle')}</h2>
      </div>
      <SubmitForm />
      <Faq />
    </div>
  );
}
