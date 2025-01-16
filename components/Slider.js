import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BackgroundImage from "./image/BackgroundImage";

export default function Slider({ data }) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: false,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      {data.itemsZero.map(({ item }) => (
        <BackgroundImage
          containerClassName="h-screen w-screen   z-20 relative flex items-end justify-start"
          image={item.image}
          className="keen-slider__slide"
          sizes="max(100vw, 100vh)"
          loading="eager"
          alt=""
          key={item.text}
        >
          <h1 className="page-container !py-0 text-white my-8 text-3xl md:text-4xl lg:text-6xl font-[900] whitespace-pre-line uppercase">
            {item.text}
          </h1>
        </BackgroundImage>
      ))}
    </div>
  );
}
