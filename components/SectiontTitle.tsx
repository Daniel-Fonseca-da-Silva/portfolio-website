interface Props {
  title: string;
  titleNo: string;
}

const SectiontTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl sm:text-3xl md:text-4xl font-bold flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <span className="text-base sm:text-lg md:text-xl text-textGreen font-mono font-semibold">
        {titleNo}.
      </span>
      <span className="flex-1 sm:flex-none text-textLight">{title}</span>
      <span className="hidden sm:inline-flex sm:w-40 md:w-60 lg:w-72 h-[2px] bg-gradient-to-r from-textGreen/50 via-textGreen to-transparent ml-4 sm:ml-6"></span>
    </h2>
  );
};

export default SectiontTitle;
