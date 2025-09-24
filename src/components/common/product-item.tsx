import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { removeProductFromCart } from "@/actions/remove-cart-product";
import { productTable, productVariantTable } from "@/db/schema";
import { cn } from "@/lib/utils";
import { formatPriceFromCents } from "@/utils/formatted-price-cents";

interface ProductItemProps {
  product: typeof productTable.$inferInsert & {
    variants: (typeof productVariantTable.$inferInsert)[];
  };
  textConteinerClassName?: string;
}

export const ProductItem = ({
  product,
  textConteinerClassName,
}: ProductItemProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link
      href={`/product-variant/${firstVariant.slug}`}
      className="flex flex-col gap-4"
    >
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        sizes="100vw"
        width={0}
        height={0}
        className="h-auto w-full rounded-3xl"
      />
      <div
        className={cn(
          "flex max-w-[200px] flex-col gap-1",
          textConteinerClassName,
        )}
      >
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-medium">
          {formatPriceFromCents(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
