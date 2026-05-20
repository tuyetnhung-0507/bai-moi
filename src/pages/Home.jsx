import Banner from "../components/Banner";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";
// import ShowFirebase from "../components/product/ShowFirebase";
// NHỚ PHẢI CÓ 2 DÒNG IMPORT NÀY

export default function index() {
  return (
    <>
      <Banner />
      <ShowSPKM />
      <ShowSPBC />
      <ShowSPH />

      {/* <h2 style={{ textAlign: 'center', color: '#ff85a2', marginTop: '40px' }}>
                DANH SÁCH ART TOY TỪ FIREBASE
            </h2>
      <ShowFirebase /> */}
    </>
  );
}