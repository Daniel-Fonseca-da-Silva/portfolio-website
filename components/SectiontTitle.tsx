interface Props {
  title: string;
  titleNo: string;
}

const SectiontTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-xl sm:text-2xl font-semibold flex flex-wrap items-center gap-2 sm:gap-0">
      <span className="text-sm sm:text-base md:text-lg text-textGreen mr-1 sm:mr-2">
        {titleNo}
      </span>
      <span className="flex-1 sm:flex-none">{title}</span>
      <span className="hidden sm:inline-flex sm:w-40 md:w-60 lg:w-72 h-[.5px] bg-gray-600 ml-4 sm:ml-6"></span>
    </h2>
  );
};

export default SectiontTitle;
