import Banner from "../components/Banner";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";
// NHỚ PHẢI CÓ 2 DÒNG IMPORT NÀY

export default function index() {
  return (
    <>
      <Banner />
      <ShowSPKM />
      <ShowSPBC />
      <ShowSPH />
    </>
  );
}