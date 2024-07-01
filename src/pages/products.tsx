import { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';

const Products = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false); // Cờ để theo dõi trạng thái cuộn
  const sections = ['section1', 'section2', 'section3'];

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
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    if (isScrolling.current) return;

    isScrolling.current = true; // Bắt đầu cuộn
    const section = sections[currentSection];
    scroller.scrollTo(section, {
      duration: 2000,
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

  return (
    <div className="app">
      <div id="section1" className="h-screen bg-blue-500">Section 1</div>
      <div id="section2" className="h-screen bg-red-500">Section 2</div>
      <div id="section3" className="h-screen bg-green-500">Section 3</div>
    </div>
  );
};

export default Products;
