"use client";

import { useQuery } from "@tanstack/react-query";
import { ShoppingBasketIcon } from "lucide-react";

import { getCart } from "@/actions/get-cart";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartItem from "./cart-item";

const Cart = () => {
  const { data: cart, isPending: cartIsLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <ShoppingBasketIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 px-5">
          {cartIsLoading && <p>Carregando...</p>}
          {cart?.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              productName={item.productVariant.product.name}
              productVariantName={item.productVariant.name}
              productVariantImageUrl={item.productVariant.imageUrl}
              productVariantPriceInCents={item.productVariant.priceInCents}
              quantity={item.quantity}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
