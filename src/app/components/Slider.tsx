"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

export const Slider = () => {
  return (
    <div className="basis-6 max-w-lg w-full mx-auto  flex p-10">
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        <SplideSlide>
          <img className="slide-img" src="/disney.jpg" alt="desney" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="/plain.jpg" alt="plain" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="/baseball.jpg" alt="baseball" />
        </SplideSlide>
      </Splide>

      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
