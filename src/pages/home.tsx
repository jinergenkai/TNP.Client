import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
// import BigCategoryCard from "../components/type-card";
import AOS from "aos";
import IntroComponent from "../components/swiper";
// import ServiceSection from "../components/service";
import GalleryCard from "../components/gallery-card";
import Statistic from "../components/statistic";
// import InfiniteScroll from "../components/infinite-scroll";
// import ServiceSection from "../components/service";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="relative">
      <Header></Header>
      <IntroComponent image="/banner2.jpg"></IntroComponent>

      {/* mau vang */}
      {/* <div className={`bg-current text-center pt-10 text-3xl`}>
        Building Materials
        <div className="p-10 text-xl">
        </div>
      </div> */}




      <div className="flex my-32">
        <div className="flex-1 mx-32" data-aos="fade-right">
          <div className="text-5xl font-bold leading-tight">
            <span className="mr-4 text-blue">TÂM NGÂN PHÁT
            </span>
            tự tin giữ vị trí chủ lực trên thị trường sắt thép Bà Rịa - Vũng Tàu
          </div>
          <div
            className="m-5 mt-10 text-gray-700"
          >
            Cùng các doanh nghiệp đầu mối kinh doanh sắt thép khác và hơn 120 thương nhân phân phối sắt thép, Tâm Ngân Phát bảo đảm đầy đủ và kịp thời các chủng loại sắt thép phục vụ phát triển kinh tế - xã hội, an ninh quốc phòng và nhu cầu tiêu dùng của nhân dân.
          </div>

        </div>
        <div className="flex flex-col flex-1 gap-8 m-auto">

          <Statistic value={20} title={"Đơn vị\n thành viên"} titleWidth={200} body={"Trực tiếp kinh doanh \ntrên toàn quốc"}></Statistic>
          <Statistic value={100} title={"Đơn vị\n thành viên"} titleWidth={200} body={"Trực tiếp kinh doanh \ntrên toàn quốc"}></Statistic>
          <Statistic value={4000} title={"Đơn vị\n thành viên"} titleWidth={200} body={"Trực tiếp kinh doanh \ntrên toàn quốc"}></Statistic>

        </div>
      </div>





      {/* Infinitely Inspiring
      <BigCategoryCard
        key={1}
        title="SẢN PHẨM VÀ DỊCH VỤ"
        item={[
          {
            image: "./test_image/3-removebg-preview.png",
            title: "High-quality bricks",
            description:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            image: "./test_image/2-removebg-preview.png",
            title: "Sand and gravel",
            description:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            image: "./test_image/6-removebg-preview.png",
            title: "Cement",
            description:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ]}
      ></BigCategoryCard> */}

      {/* image with title left, right */}
      <div className="flex flex-row h-full bg-current">
        <img
          // src="/use-brick.webp"
          src="images/ren-sat.jpeg"
          alt="image_alt"
          className="object-cover w-[50%]"
          data-aos="fade-right"
        />
        <div
          className="w-[45%] p-10 text-3xl"
          data-aos="fade-left"
        >
          <div className="m-32 text-white">
            <div className="py-3 text-4xl font-dejaVuSerif ">
              Nền tảng của sự phát triển
            </div>
            <div className="text-sm">
              Được thành lập vào năm ****, Công ty TÂM NGÂN PHÁT đã cam kết cung cấp các vật liệu sắt thép hàng đầu cho khách hàng quý giá của chúng tôi. Sứ mệnh của chúng tôi là mang đến những sản phẩm và dịch vụ xuất sắc, đáp ứng các tiêu chuẩn cao nhất về chất lượng và độ tin cậy."


            </div>
            {/* <br />
        <a href="/shop" className="text-base underline underline-offset-8">
        Tìm hiểu thêm
        </a> */}
          </div>
        </div>
      </div>

      {/* shop by category */}
      <div className="w-screen py-10 text-4xl font-bold text-center">

        Sản phẩm & Dịch vụ</div>
      {/* <InfiniteScroll></InfiniteScroll> */}
      <div className="flex justify-center m-2">
        {[
          "/test_image/1.png",
          "/test_image/2.png",
          "/test_image/1.png",
          "/test_image/2.png",
        ].map((image, index) => (
          <GalleryCard key={index} image={image} name={"Grinding Side Trimmer Knife"} href={""} />
        ))}
      </div>



      {/* divider */}
      <div className="py-10 text-3xl text-center bg-current">
        <div className="p-10 text-xl text-brown">
          Hãy để TÂM NGÂN PHÁT đồng hành cùng bạn qua từng công trình
          <br />
          hãy bắt đầu hành trình tạo nên sự khác biệt của riêng bạn!
        </div>
      </div>
      {/* <ServiceSection></ServiceSection> */}

      <div className="w-screen text-3xl font-bold text-center">
        <div className="p-10" data-aos="fade-down">
          LÃNH ĐẠO CỦA CHÚNG TÔI
        </div>
        <div className="flex items-center justify-center gap-10 align-middle" data-aos="fade-up">
          {[1, 2, 3].map(() => (
            <div className="text-xl">
              <img src="./images/chu-doanh-nghiep.png" className="w-[50%] m-auto p-4" />
              <div>Ông Tâm Ngân Phát</div>
              <div className="font-light">Chủ doanh nghiệp</div>
            </div>
          ))
          }
        </div>

        <div className="p-10"></div>

        <iframe
          src="https://www.google.com/maps/place/Ch%E1%BB%A3+Tr%E1%BA%A3ng+C%C3%A1t/@10.6410225,107.0887392,15z/data=!4m2!3m1!1s0x0:0x1ab165bdc10ea909?sa=X&ved=1t:2428&ictx=111"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

      <Footer></Footer>
    </div>
  );
}
