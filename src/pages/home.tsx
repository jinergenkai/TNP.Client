import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import BigCategoryCard from "../components/type-card";
import AOS from "aos";
import IntroComponent from "../components/swiper";
import ServiceSection from "../components/service";
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
      <IntroComponent image="/intro_video.mp4"></IntroComponent>

      <br />

      {/* mau vang */}
      <div className={`bg-current text-center pt-10 text-3xl`}>
        Building Materials
        <div className="p-10 text-xl">
          Welcome to Huynh Hanh Construction Supplies,
          <br />
          your trusted partner for high-quality bricks and building materials.
        </div>
      </div>

      {/* Infinitely Inspiring */}
      <BigCategoryCard
        key={1}
        title="Wide range of construction materials"
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
      ></BigCategoryCard>

      {/* image with title left, right */}
      <div className="bg-current">
        <img
          src="/use-brick.webp"
          alt="image_alt"
          className="object-cover w-[50%] h-full inline-block"
          data-aos="fade-right"
        />
        <div
          className="inline-block w-[50%] p-10 text-3xl"
          data-aos="fade-left"
        >
          <div className="m-32">
            <div className="py-3 text-4xl font-dejaVuSerif">
              Foundation of the Industry
            </div>
            <div className="text-xl">
              "Founded in 2008, Huynh Hanh Construction Supplies has been
              dedicated to providing top-notch building materials to our valued
              customers. Our mission is to deliver exceptional products and
              services that meet the highest standards of quality and
              reliability."
            </div>
            {/* <br />
        <a href="/shop" className="text-base underline underline-offset-8">
        Tìm hiểu thêm
        </a> */}
          </div>
        </div>
      </div>

      {/* shop by category */}
      {/* <div className="py-10 text-5xl text-center">Shop by Category</div>
      <div className="flex justify-center m-2">
        {[
          "/test_image/11.jpg",
          "/test_image/44.jpg",
          "/test_image/77.jpg",
          "/test_image/11.jpg",
        ].map((image, index) => (
          <div key={index} className="w-[15%] px-1">
            <img
              src={image}
              alt="image_alt"
              className="object-cover w-full h-full"
              data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
            />
            <div className="p-2 text-lg text-center bg-yellow-50">Category</div>
          </div>
        ))}
      </div> */}

      {/* divider */}
      <div className="py-10 text-3xl text-center bg-current">
        <div className="p-10 text-xl">
          Hãy để Huynh Hạnh đồng hành cùng bạn qua từng công trình
          <br />
          hãy bắt đầu hành trình tạo nên sự khác biệt của riêng bạn!
        </div>
      </div>
      <ServiceSection></ServiceSection>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.6571756380413!2d108.43062897572!3d12.670468721407488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171c29ed3e312d3%3A0x8bd995115445caf7!2zWMSDbmcgRMOizIB1IEh1eW5oIEhhzKNuaA!5e0!3m2!1svi!2s!4v1717307771347!5m2!1svi!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer></Footer>
    </div>
  );
}
