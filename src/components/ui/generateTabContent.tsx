import PagesContent from './PagesContent';

const generateTabContent = (title: string, img: string) => {
  return (
    <div className='w-full flex flex-col overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black'>
      <p className='self-start pb-4 flex-shrink-0 text-base sm:text-xl md:text-2xl lg:text-4xl'>
        {title}
      </p>
      <div className='w-full  flex justify-center items-center flex-grow'>
        <PagesContent img={img} />
      </div>
    </div>
  );
};
export default generateTabContent;
