import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Icon = () => {
  return (
    <svg
      className="h-6 w-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
      />
    </svg>
  );
};

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/pro.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/pro.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  VISI
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Visi dari UKM PROCLUB adalah menjadi inkubator mahasiswa STT
                  Cipasung di bidang Programming.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MISI
                </h3>

                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li className="flex gap-2">
                    <Icon />
                    Sebagai partner yang berperan aktif dalam pengembangan minat
                    dan bakat mahasiswa.
                  </li>
                  <li className="flex gap-2">
                    <Icon />
                    Menjadi fasilitator guna meningkatkan kualitas mahasiswa di
                    bidang programming.
                  </li>
                  <li className="flex gap-2">
                    <Icon />
                    mempersiapkan anggota yang paham akan kebutuhan didunia
                    industri.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
