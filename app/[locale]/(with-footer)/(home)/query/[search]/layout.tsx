import { getTranslations } from 'next-intl/server';

import SearchForm from '@/components/home/SearchForm';

export default async function Layout({ children, params }: { children: React.ReactNode; params: { search?: string } }) {
  const t = await getTranslations('Home');

  return (
    <div className='relative mx-auto w-full max-w-pc px-3 lg:px-0'>
      <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-1'>
        <h1 className='font-mono text-2xl font-semibold text-black lg:text-4xl'>{t('title')}</h1>
        <h2 className='text-balance text-xs font-semibold text-black/60 lg:text-sm'>{t('subTitle')}</h2>
      </div>
      <div className='flex w-full items-center justify-center'>
        <SearchForm defaultSearch={decodeURI(params?.search || '')} />
      </div>
      {children}
    </div>
  );
}
