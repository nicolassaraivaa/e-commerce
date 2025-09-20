import Image from "next/image";

const brands = [
  { name: "Nike", src: "/nike.svg" },
  { name: "Adidas", src: "/adidas.svg" },
  { name: "Puma", src: "/puma.svg" },
  { name: "New Balance", src: "/nbalance.svg" },
  { name: "Polo", src: "/polo.svg" },
  { name: "Zara", src: "/zara.svg" },
  { name: "Converse", src: "/converse.svg" },
];

const PatnerBrands = () => {
  return (
    <div className="mt-14 mb-16 flex flex-col gap-5">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full gap-3 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex h-20 w-28 items-center justify-center rounded-3xl border border-gray-500/10 bg-white">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.name === "Polo" ? 20 : 40}
                height={brand.name === "Polo" ? 20 : 40}
                className="object-center"
              />
            </div>
            <p className="mt-2 truncate text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatnerBrands;
