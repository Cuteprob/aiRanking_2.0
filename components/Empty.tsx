export default function Empty({ title }: { title: string }) {
  return (
    <div className='flex flex-col items-center gap-1'>
      <img src='/images/empty.png' alt='empty' className='max-w-[100px]' />
      <span className='whitespace-pre-wrap text-center text-lg text-black'>{title}</span>
    </div>
  );
}
