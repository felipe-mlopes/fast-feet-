import Image from "next/image";

export function Banner() {
  return (
    <section id="banner">
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
