import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white/80 p-10 shadow-xl">
        {/* <img alt="logo" className="mb-6 h-32 animate-spin-slow" src={logo} /> */}
        <picture>
          <img
            alt="logo"
            className="mb-6 animate-spin-slow"
            height={128}
            src={logo}
            width={128}
          />
        </picture>

        <h1 className="mb-4 font-bold text-2xl text-gray-800">
          欢迎使用 Monorepo 模版
        </h1>
        <p className="mb-6 text-center text-gray-500">
          快速开始你的多包开发之旅
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            React 官网
          </a>
          <a
            className="rounded-lg bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-600"
            href="https://tanstack.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            TanStack 官网
          </a>
        </div>
      </div>
    </div>
  );
}

// 自定义动画
// 在 styles.css 里加上：
// .animate-spin-slow { animation: spin 8s linear infinite; }
// @keyframes spin { to { transform: rotate(360deg); } }
// .animate-spin-slow { animation: spin 8s linear infinite; }
// @keyframes spin { to { transform: rotate(360deg); } }
