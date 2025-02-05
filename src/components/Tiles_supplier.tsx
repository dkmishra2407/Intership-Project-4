import { FiBarChart, FiPlay, FiPlayCircle } from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { useWindowSize } from "react-use";
import p1 from '../../assets/Collection/1.jpg';
import p2 from '../../assets/Collection/2.jpg';
import p3 from '../../assets/Collection/3.jpg';
import p4 from '../../assets/Collection/abcd.jpg';

interface Item {
  id: number;
  title: string;
  Icon: IconType;
  imgSrc: string;
  description: string;
}
// import { FiDollarSign, FiPlay, FiBell, FiBarChart } from 'react-icons/fi';

const items: Item[] = [
  {
    id: 1,
    title: "JAQUAR",
    Icon: FiPlayCircle, // Icon representing bathroom fittings
    imgSrc: p1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "KOHLER",  
    Icon: FiPlay, // Icon representing play or interaction
    imgSrc: p2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "CERA",
    Icon: FiBarChart, // Icon representing home or fixtures
    imgSrc: p3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "HINWARE ITALIAN COLLECTION",
    Icon: FiBarChart, // Icon representing analytics or quality
    imgSrc: p4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];


const VerticalAccordion: React.FC = () => {
  const [open, setOpen] = useState<number>(items[0].id);

  return (
    <section className="p-4">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => (
          <Panel key={item.id} open={open} setOpen={setOpen} {...item} />
        ))}
      </div>
    </section>
  );
};

interface PanelProps extends Item {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}

const Panel: React.FC<PanelProps> = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{ writingMode: "vertical-lr" }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        {/* <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div> */}
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: "center", backgroundSize: "cover" }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            {/* <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: { width: "100%", height: "100%" },
  closed: { width: "0%", height: "100%" },
};

const panelVariantsSm = {
  open: { width: "100%", height: "200px" },
  closed: { width: "100%", height: "0px" },
};

const descriptionVariants = {
  open: { opacity: 1, y: "0%", transition: { delay: 0.125 } },
  closed: { opacity: 0, y: "100%" },
};