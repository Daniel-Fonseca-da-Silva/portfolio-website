import { HiFolderDownload } from "react-icons/hi";
import { RiExternalLinkLine } from "react-icons/ri";

interface Props {
  title: string;
  des: string;
  link: string;
  listItem: string[];
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <HiFolderDownload className="text-4xl hover:text-textGreen" />
          <RiExternalLinkLine className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h3 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h3>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
