import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { TbArrowDownCircle } from "react-icons/tb";

interface SearchBarProps {
  search: string;
  setSearch: any;
  setPage: any;
}

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  duration: {},
};


export function SearchBar({search, setSearch, setPage}: SearchBarProps) {
  return (
    <motion.div
      className="mt-[2rem] max-w-[400px] md:max-w-[500px] mx-auto select-none"
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <label className="flex items-center justify-center relative z-10">
        <div className="w-full">
          <div className="gap-1 cursor-pointer h-full absolute z-10 bg-gradient-to-r from-[#ca2765] to-[#ec5a68] flex items-center md:gap-2 px-3 py-2 rounded-[7px] w-fit ml-1">
            <span className="text-[18px] md:text-[20px]">Schoenen</span>
            <TbArrowDownCircle fontSize={20} />
          </div>
          <div>
            <input
              type="text"
              className="relative bg-gray-600  pl-44 md:pl-45 py-3 w-full rounded-[7px] text-gray-200 placeholder-gray-200 focus:outline-none"
              placeholder="Search shoes"
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              value={search}
            />
            <BiSearch
              fontSize={20}
              className="absolute top-3 right-2 md:right-5 mt-[3px] text-gray-200"
            />
          </div>
        </div>
      </label>
    </motion.div>
  );
}
