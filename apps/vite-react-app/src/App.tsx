import { useState } from "react";
import "./App.css";
import { Citrus } from "@monorepo/icons";
import ReactLogo from "@monorepo/pro-components/react-logo";
import { Button, Input } from "@monorepo/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white/80 p-10 shadow-xl">
        <ReactLogo />
        <h1 className="mt-4 mb-4 font-bold text-2xl text-gray-800">
          欢迎使用 Monorepo 模版
        </h1>
        <p className="mb-6 text-center text-gray-500">
          Vite + React + Monorepo 快速启动
        </p>
        <div className="mb-4 flex gap-2">
          <Button className="bg-amber-500" />
          <Input />
        </div>
        <Citrus color="red" fontSize="24" />
        <div className="card mt-4 w-full">
          <button
            className="mb-2 w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            onClick={() => setCount((c) => c + 1)}
            type="button"
          >
            count is {count}
          </button>
          <p className="text-gray-400 text-sm">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div className="mt-2 text-gray-400 text-xs">
          Click on the Vite and React logos to learn more
        </div>
      </div>
    </div>
  );
}

export default App;
