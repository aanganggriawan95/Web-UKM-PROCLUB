import SectionTitle from "../Common/SectionTitle";
import kegiatan from "./kegiatanData";
import SingleKegiatan from "./singleKegiatan";

const Kegiatan = () => {
  return (
    <section
      id="kegiatan"
      className="relative z-20 bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Activities"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {kegiatan.map((kegiatan) => (
            <div key={kegiatan.id} className="w-full">
              <SingleKegiatan kegiatan={kegiatan} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Kegiatan;
