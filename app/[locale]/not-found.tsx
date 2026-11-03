import NotFoundBody from "@/app/components/NotFoundBody";

// [locale] 레이아웃 안에서 렌더링되지만 404 화면에는 푸터·광고 칸을 보이지 않는다.
export default function NotFound() {
  return (
    <>
      <style>{"footer,aside{display:none}"}</style>
      <NotFoundBody />
    </>
  );
}
