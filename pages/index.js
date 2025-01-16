import AnimWrapper from "@components/AnimWrapper";
import { getFluidImage } from "@components/image/imageFunctions";
import Markdown from "@components/utils/Markdown";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("@components/Lottie"), {
  ssr: false,
});
import Formic from "@components/Formic";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Start from "@components/Start";
import Slider from "@components/Slider";
gsap.registerPlugin(ScrollTrigger);

export default function Index({ data }) {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const containerRef = useRef(null);
  const itemRefs2 = useRef([]);
  itemRefs.current = [];

  const addToRefs2 = (el) => {
    if (el && !itemRefs2.current.includes(el)) {
      itemRefs2.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.from(itemRefs2.current, {
          duration: 0.8,
          autoAlpha: 0,
          ease: "power2.out",
          y: 50,
          stagger: 0.2,
          scrollTrigger: containerRef.current,
        });
        itemRefs.current.forEach((el, i) => {
          if (i !== 0) {
            gsap.to(sectionRef.current, {
              keyframes: {
                "0%": { backgroundColor: data.itemsOne[i - 1]?.item.color },
                "70%": { backgroundColor: data.itemsOne[i]?.item.color },
              },
              ease: "none",
              scrollTrigger: {
                ease: "none",
                trigger: el,
                // markers: true,
                scrub: true,
                end:
                  i === data.itemsOne.length - 1
                    ? "bottom-=50%"
                    : "bottom-=30%",
              },
            });
          }
          gsap.set(sectionRef.current, {
            backgroundColor: data.itemsOne[0]?.item.color,
          });
        }, 200);
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Start src={data.intro} />
      <Slider data={data} />

      <div ref={sectionRef} className="">
        {data.itemsOne.map(({ item }, i) => (
          <div
            style={{
              // backgroundColor:
              //   i === 0 ? data.itemsOne[i]?.item.color : undefined,
              color: i < 4 ? "#fff" : "#000",
            }}
            ref={(el) => addToRefs(el)}
            className="flex items-center justify-center w-full min-h-[70vh] md:min-h-[100.01vh] px-5 "
            key={item.heading}
          >
            <AnimWrapper
              start="top 70%"
              y={50}
              className="items-center w-full md:flex"
            >
              <div className="flex-1">
                <p className="text-4xl text-center capitalize md:text-right lg:text-6xl xl:text-7xl md:text-4xl font-display">
                  {item.heading}
                </p>
              </div>
              <img
                src={item.icon}
                alt="icon"
                className="h-40 mx-auto my-6 lg:w-40 md:my-0 md:mx-8"
              />
              <div className="flex-1">
                <p className="font-medium text-center md:max-w-xs md:mr-auto md:text-left">
                  {item.text}
                </p>
              </div>
            </AnimWrapper>
          </div>
        ))}
      </div>
      <div id="storia" className="bg-[#E9DFD5]">
        <div className="page-container  md:!py-32 !space-y-0 !max-w-[90rem] lg:flex lg:space-x-12 items-center">
          <AnimWrapper y={-100} className="lg:w-[60%]">
            <img
              src={data.imageOne}
              alt="boxes"
              className="object-contain w-full max-w-2xl mx-auto"
            />
          </AnimWrapper>
          <div className="lg:w-[40%] lg:flex items-center flex-1 pt-10 lg:pt-0">
            <AnimWrapper delay={0.4} className="">
              <h2 className="pb-4 text-5xl md:pb-6 lg:text-6xl xl:text-7xl md:text-5xl font-display">
                {data.headingTwo}
              </h2>
              <p className="text-lg font-medium md:text-xl">{data.textOne}</p>
            </AnimWrapper>
          </div>
        </div>
      </div>
      <div
        id="caffe"
        className="page-container !pt-0 md:!py-32 !space-y-0 !max-w-[90rem] lg:flex lg:space-x-0"
      >
        <DynamicComponent
          className="scale-[1] lg:hidden mb-8"
          animationData={data.anim}
        />
        <AnimWrapper className="lg:w-[73%]">
          <h3 className="text-xl font-bold md:whitespace-pre-line">
            {data.headingThree}
          </h3>
          <Markdown className="text-lg font-medium markdown-text md:text-xl">
            {data.textTwo}
          </Markdown>
        </AnimWrapper>
        <div className="lg:w-[27%] flex-1 relative  hidden lg:flex">
          <div className="absolute inset-0 h-full ">
            <DynamicComponent
              className="scale-[1.15]"
              animationData={data.anim}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E9DFD5]">
        <div className="page-container  md:!py-32 !space-y-0 !max-w-[90rem] items-center">
          <h4 className="mb-16 text-xl font-bold md:text-2xl md:whitespace-pre-line">
            {data.headingFour}
          </h4>

          <div
            ref={containerRef}
            className="grid w-full grid-cols-2 gap-8 place-content-around md:gap-12 md:grid-cols-12"
          >
            {data.itemsTwo.map(({ item }, i) => (
              <div
                ref={(el) => addToRefs2(el)}
                className={`${i === 3 ? "md:!col-start-3" : ""} ${
                  i === 4 ? "md:!col-start-7" : ""
                } text-center md:max-w-[18.125rem] md:col-span-4 mx-auto flex h-full flex-col`}
                key={item.icon}
              >
                <img
                  src={item.icon}
                  alt={item.heading}
                  className="object-contain h-full mx-auto max-h-[7rem] md:max-h-[9rem]"
                />
                <p className="pt-6 text-xl font-medium md:text-2xl">
                  {item.heading}
                </p>
                <p className="pt-2 font-medium text- md:text-">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page-container !py-0">
        <h4
          id="contatti"
          className="py-6 text-5xl md:py-8 lg:text-6xl xl:text-7xl md:text-5xl font-display"
        >
          {data.headingFive}
        </h4>
      </div>
      <div className="md:flex">
        <div className="relative md:w-1/2">
          <div className="absolute flex items-center justify-center w-full center-xy">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.46)",
              }}
              className=" mdtranslate-x-1/2 backdrop-blur-lg -translate-y-[80%] md:-translate-y-[75%] rounded-3xl border-black border p-5"
            >
              <div className="flex items-center justify-center">
                <Markdown className="m-auto text- markdown-text md:text-lg">
                  {data.mapText}
                </Markdown>
              </div>
            </div>
          </div>

          <iframe
            src={data.map}
            className="w-full h-[35rem] md:h-screen"
            allowFullScreen=""
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex items-center justify-center p-5 md:w-1/2">
          <AnimWrapper className="max-w-xl p-4 mx-auto my-12 border-2 border-black lg:px-12 lg:py-8 md:my-8 rounded-3xl">
            <h6 className="text-xl font-medium md:text-2xl">
              {data.headingSix}
            </h6>
            <Formic />
          </AnimWrapper>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`../cms/pages/homepage.json`);
  const seo = await import(`../cms/config/seo.json`);
  const header = await import(`../cms/config/header.json`);

  data.default.itemsZero[0].item.image = await getFluidImage(
    data.default.itemsZero[0].item.image
  );
  data.default.itemsZero[1].item.image = await getFluidImage(
    data.default.itemsZero[1].item.image
  );
  data.default.itemsZero[2].item.image = await getFluidImage(
    data.default.itemsZero[2].item.image
  );
  data.default.intro = await getFluidImage(data.default.intro);
  return {
    props: {
      data: data.default,
      seo: seo.default,
      header: header.default,
    },
  };
}
