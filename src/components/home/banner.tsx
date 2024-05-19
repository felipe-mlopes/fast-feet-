import Image from "next/image";

export function Banner() {
  return (
    <section
      id="banner"
      className="py-8 border-b-[1px] md:border-b-0 border-gray-light"
    >
      <Image
        src={"/img/package.jpg"}
        alt=""
        width={1980}
        height={360}
        className="rounded"
      />
    </section>
  );
}
