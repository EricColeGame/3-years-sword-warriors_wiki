"use client";

// 站点 Logo 需要在加载失败时隐藏自身，以便露出底层的文字兜底（SiteHeader 中的 "3SW"）。
// onError 属事件处理器，无法在 Server Component 中序列化（静态导出会直接构建失败），
// 故按本仓库既有约定（参见 ClientThemeToggle）拆成独立的 "use client" 组件。
export function ClientLogoImage({ alt }: { alt: string }) {
  return (
    <img
      src="/images/logo.png"
      alt={alt}
      className="h-full w-full object-cover"
      onError={(event) => {
        (event.target as HTMLElement).style.display = "none";
      }}
    />
  );
}
