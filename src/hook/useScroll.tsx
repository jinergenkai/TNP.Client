import { useEffect, useRef, useState } from "react";
import { scroller } from 'react-scroll';

interface Props {
  sections: string[];
  duration: number;
}

const useScroll = (
  { sections, duration }: Props
) => {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false); // Cờ để theo dõi trạng thái cuộn
  // const sections = ['section1', 'section2', 'section3'];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLElement>): void => {
    const { scrollTop } = event.currentTarget;
    const reducedScroll: number = Math.floor(scrollTop / 10); // Giảm 50% lượng cuộn
    setScrollPosition(reducedScroll);
  };

  const handleWheel = (event: { deltaY: number; }) => {
    if (isScrolling.current) return; // Nếu đang cuộn, không làm gì cả

    if (event.deltaY > 0) {
      // Cuộn xuống
      console.log('cuộn xuống');
      setCurrentSection((prevSection) => Math.min(prevSection + 1, sections.length - 1));
    } else {
      // Cuộn lên
      console.log('cuộn lên');
      setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
    }
  };

  //isScrolling.current = false after 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      isScrolling.current = false;
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    if (isScrolling.current) return;

    isScrolling.current = true; // Bắt đầu cuộn
    const section = sections[currentSection];
    scroller.scrollTo(section, {
      duration: duration,
      delay: 0,
      smooth: 'easeInOutQuart',
      onAfter: () => {
        isScrolling.current = false; // Cuộn kết thúc
      },
    });
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);



  return {
    currentSection,
    sections,
    handleScroll,
    scrollPosition,
    
  };
};

export default useScroll;

