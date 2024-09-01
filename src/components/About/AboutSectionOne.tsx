import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#2E724F] bg-opacity-10 text-[#2E724F]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="border pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Ketua PRO-CLUB"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Aang Anggriawan"
                paragraph="Sebagai Ketua UKM Proclub untuk periode 2024-2025. Di bawah kepemimpinannya, diharapkan Proclub akan terus berkembang dan menciptakan berbagai inovasi yang inspiratif, dan membawa Proclub meraih prestasi yang lebih gemilang!"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="HTML & CSS" />
                    <List text="Tailwind CSS" />
                    <List text="Bootstrap" />
                    <List text="JavaScript" />
                    <List text="Typescript" />
                    <List text="React JS" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Node JS" />
                    <List text="Express JS" />
                    <List text="MongoDB" />
                    <List text="SQL" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-md px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/testimonials/aang.jpg"
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
    </section>
  );
};

export default AboutSectionOne;
