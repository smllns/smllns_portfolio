import Image from 'next/image';

const PagesContent = ({ img }: { img: string }) => {
  return (
    <div className='relative w-full h-auto max-w-[90%] mx-auto'>
      <Image
        src={img}
        alt='project page'
        width={1000}
        height={1000}
        className='w-full  object-contain rounded-xl'
      />
    </div>
  );
};
export default PagesContent;
