import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { useDecreaseCartProduct } from "@/hooks/mutations/use-decrease-cart-product";
import { useIncreaseCartProduct } from "@/hooks/mutations/use-increase-cart-product";
import { useRemoveProductFromCartMutation } from "@/hooks/mutations/use-remove-product-from-cart";
import { formatPriceFromCents } from "@/utils/formatted-price-cents";

import { Button } from "../ui/button";

interface CartItemProps {
  id: string;
  productName: string;
  productVariantName: string;
  productVariantId: string;
  productVariantImageUrl: string;
  productVariantPriceInCents: number;
  quantity: number;
}

const CartItem = ({
  id,
  productName,
  productVariantId,
  productVariantImageUrl,
  productVariantName,
  productVariantPriceInCents,
  quantity,
}: CartItemProps) => {
  const removeProductFromCartMutation = useRemoveProductFromCartMutation(id);
  const decreaseProductQuantityMutation = useDecreaseCartProduct(id);
  const increaseProductQuantityMutation =
    useIncreaseCartProduct(productVariantId);

  const handleDeleteClick = () => {
    removeProductFromCartMutation.mutate(undefined, {
      onSuccess: () => {
        toast.success("Produto removido do carrinho");
      },
      onError: () => {
        toast.error("Erro ao remover produto do carrinho");
      },
    });
  };

  const handleDecreaseQuantity = () => {
    decreaseProductQuantityMutation.mutate(undefined, {
      onError: () => {
        toast.error("Erro ao diminuir a quantidade do produto");
      },
    });
  };

  const handleIncreaseQuantity = () => {
    increaseProductQuantityMutation.mutate(undefined, {
      onError: () => {
        toast.error("Erro ao aumentar a quantidade do produto");
      },
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={productVariantImageUrl}
          alt={productVariantName}
          width={78}
          height={78}
          className="rounded-lg"
        />

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{productName}</p>
          <p className="text-muted-foreground text-xs font-medium">
            {productVariantName}
          </p>
          <p className="text-sm font-bold">
            {formatPriceFromCents(productVariantPriceInCents)}
          </p>
          <div className="flex w-[100px] items-center justify-between rounded-lg border p-1">
            <Button
              className="h-4 w-4"
              variant={"ghost"}
              onClick={handleDecreaseQuantity}
            >
              <MinusIcon />
            </Button>

            <p className="text-xs font-medium">{quantity}</p>

            <Button
              className="h-4 w-4"
              variant={"ghost"}
              onClick={handleIncreaseQuantity}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-2">
        <Button
          variant={"outline"}
          className="h-6 w-6"
          onClick={handleDeleteClick}
        >
          <TrashIcon className="text-red-800" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
