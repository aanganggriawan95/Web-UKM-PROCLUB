import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const History = () => {
  return (
    <div className="container">
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <div className="w-full px-4 ">
            <section>
              <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                History of Proclub
              </h3>
              <p className="text-justify text-base !leading-relaxed text-body-color md:text-lg">
                Unit Kegiatan Mahasiswa (UKM) adalah sebuah wadah untuk
                menumbuhkan kepekaan terhadap lingkungan sekitar, sesuai dengan
                minat, bakat, dan potensi yang dimiliki. UKM Proclub adalah unit
                kegiatan yang bertujuan untuk meminimalisir gap yang ada di
                dunia kerja dan di lingkungan pendidikan khususnya perguruan
                tinggi. Berdasarkan latar belakang diatas, maka terbentuklah UKM
                Proclub ini pada tanggal 22 Oktober 2022 yang diprakarsai oleh
                Bapak Ahmad Zamakhsyari Sidiq, M.T. atau sering dipanggil Pak
                Ade (Ketua I STT Cipasung tahun itu) beserta para mahasiswa yang
                diundang kala itu. Selanjutnya nama dan desain logo Proclub
                diciptakan oleh Bapak Ade dan Bapak Muhammad Sabar Jamil, S.Si
                (Ketua II STT Cipasung tahun saat itu).
              </p>
            </section>
          </div>

          <div className="w-full rounded-md px-4">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/hsitory.jpg"
                alt="about-image"
                fill
                className="mx-auto  max-w-full rounded-md drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/blog/aang.jpg"
                alt="about-image"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
