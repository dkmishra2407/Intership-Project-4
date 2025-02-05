import { useWindowSize } from "react-use";

const useWindowSize1 = () => {
  const { width, height } = useWindowSize();

  return <p>Window size: {width} x {height}</p>;
};
