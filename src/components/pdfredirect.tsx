import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
import image4 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h.jpg'
import image5 from '../../assets/Slider/---a-hero-banner-image-featuring-traditional-india.jpg'
import image6 from '../../assets/Slider/a-vibrant-hero-banner-image-featuring-an-indian-fe.jpg'
import image7 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a- (1).jpg'
import image8 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg'

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
      <Link
        heading="Glossy 12*18"
        subheading="SadhGuru Tiles"
        imgSrc={image1}
        href="https://drive.google.com/uc?export=download&id=1ZvTUmJUiRsNtVEDOQ912Ixp5uqwWWozw"
      />
      <Link
        heading="Tiles 2*6"
        subheading="SadhGuru Tiles"
        imgSrc={image2}
        href="https://drive.google.com/uc?export=download&id=1Zn0EnQJr8_5MKFNl6kjOFckXnDtxrETQ"
      />
      <Link
        heading="Matt 600*600"
        subheading="SadhGuru Tiles"
        imgSrc={image3}
        href="https://drive.google.com/uc?export=download&id=1Qb5XCmkpKV4lH83FPeAkn9Xlq5WgQk_d"
      />
      <Link
        heading="Kitchen 12*18 Glossy"
        subheading="SadhGuru Tiles"
        imgSrc={image4}
        href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
      />
      <Link
        heading="Glossy EL 12*18"
        subheading="SadhGuru Tiles"
        imgSrc={image6}
        href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
      />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};