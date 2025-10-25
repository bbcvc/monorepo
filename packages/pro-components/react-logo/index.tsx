import { ReactSvg } from "@monorepo/icons";

export default function ReactLogo() {
  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #e0e7ff 0%, #fff 100%)",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
        padding: "32px 20px 24px 20px",
        borderRadius: "18px",
        maxWidth: 320,
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: "26px",
          background: "linear-gradient(90deg, #6366f1, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 8,
        }}
      >
        组件库-自定义业务组件
      </h1>
      <h2 style={{ color: "#64748b", fontSize: 16, marginBottom: 18 }}>
        👇这是来自icons的图标
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactSvg
          style={{
            width: "90px",
            height: "90px",
            animation: "spin 8s linear infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
