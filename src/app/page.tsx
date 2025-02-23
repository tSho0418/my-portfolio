import Image from "next/image";
import {
  FrontendImageList,
  BackendImageList,
  ToolImageList,
  OtherImageList,
} from "./components/ImageList";
import Heading from "./components/layouts/Heading";
import { Slider } from "./components/Slider";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative max-w-full mx-auto">
        <Image
          className="flex items-center justify-center p-3 sm:p-6 w-full h-auto max-w-full object-contain"
          width={1500}
          height={1000}
          src="/jerryfish.jpg"
          alt="jerryfish"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">Tatsuno Shonosuke</p>
        </div>
      </div>

      <Heading title="About" />
      <h1
        id="About"
        className="text-center font-bold text-xl sm:text-2xl md:text-3xl p-4 scroll-mt-64"
      >
        Tatsuno Shonosuke / 辰野昇之介
      </h1>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-left p-3 sm:p-6 border-b-4 ">
        <p className="text-sm sm:text-base leading-relaxed">
          明治大学理工学部情報科学科の辰野昇之介です。現在学部3年生でソフトウェア工学研究室に所属しています。
          プログラミング歴は3年、最近は保守性を考慮したコーディングについて関心を持っております。
          現段階では大学院への進学を希望しており、修士卒業後はITエンジニアとして社会の問題をITで解決していきたいと思っております。よろしくお願いします。
        </p>
      </div>
      <div className="flex justify-center py-6">
        <a
          className="text-blue-500 hover:underline text-lg sm:text-lg"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tSho0418"
        >
          GitHub
        </a>
      </div>

      <Slider />

      <Heading title="Skills" />
      <div className="py-3 scroll-mt-64" id="Skills">
        <div className="text-center justify-center font-serif text-3xl sm:text-3xl">
          Frontend
        </div>
        <FrontendImageList />
        <div
          id="content"
          className="basis-6 max-w-3xl w-full mx-auto  flex items-center text-left py-3 border-b-4"
        >
          <ul className="list-disc ml-5 sm:ml-10 text-sm sm:text-base">
            <li>
              <strong>HTML, CSS, Javascript： </strong>ウェブアプリ作成
            </li>
            <li>
              <strong>React.js： </strong> ポートフォリオの作成
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-center justify-center font-serif text-3xl sm:text-3xl py-10">
          Backend
        </div>
        <BackendImageList />
        <div className="basis-6 max-w-3xl w-full mx-auto  flex items-left text-left py-3 border-b-4">
          <ul className="list-disc ml-5 sm:ml-10 text-sm sm:text-base">
            <li>
              <strong>TypeScript： </strong>
              主にサーバーサイドのプログラミングに使用している言語
            </li>
            <li>
              <strong>Node.js： </strong>Webアプリの開発に用いる環境
            </li>
            <li>
              <strong>Express.js： </strong>時間割アプリの開発に使用
            </li>
            <li>
              <strong>Nunjacks： </strong>主に授業での掲示板アプリ開発に使用
            </li>
            <li>
              <strong>SQLite： </strong>掲示板アプリに使用
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-center justify-center font-serif text-3xl py-10 sm:text-3xl">
          Tools
        </div>
        <ToolImageList />
        <div
          id="content"
          className="basis-6 max-w-3xl w-full mx-auto  flex items-left text-left py-3 border-b-4"
        >
          <ul className="list-disc ml-5 sm:ml-10 text-sm sm:text-base">
            <li>
              <strong>VSCode： </strong>コーディング環境
            </li>
            <li>
              <strong>GitLab： </strong>研究室での集団開発や資料共有に使用
            </li>
            <li>
              <strong>Ubuntu： </strong>主な開発環境
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-center justify-center font-serif text-3xl py-10 sm:text-3xl">
          Others
        </div>
        <OtherImageList />
        <div
          id="content"
          className="basis-6 max-w-3xl w-full mx-auto  flex items-left text-left p-3 border-b-4"
        >
          <ul className="list-disc ml-5 sm:ml-10 text-sm sm:text-base">
            <li>
              <strong>Slack： </strong>
              演習授業やアルバイトでのコミュニケーションツール
            </li>
            <li>
              <strong>Unity： </strong>ゲーム開発
            </li>
            <li>
              <strong>Blender： </strong>
              ゲームに登場するオブジェクトのモデリング
            </li>
          </ul>
        </div>
      </div>

      <Heading title="Qualifications" />
      <div
        id="Qualifications"
        className="basis-6 max-w-3xl w-full mx-auto  flex items-center justify-center text-left"
      >
        <ul className="list-disc ml-5 sm:ml-10 text-lg sm:text-xl">
          <li>TOEIC L&Rテスト スコア755 （2022/11）</li>
          <li>ITパスポート （2023/6）</li>
          <li>基本情報技術者試験 （2023/10）</li>
          <li>応用情報技術者試験 （2024/4）</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
