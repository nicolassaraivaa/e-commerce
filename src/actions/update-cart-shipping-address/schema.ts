import { z } from "zod";

const updateCartShippingAddressSchema = z.object({
  shippingAddressId: z.uuid(),
});

export type UpdateCartShippingAddressSchema = z.infer<
  typeof updateCartShippingAddressSchema
>;

export default updateCartShippingAddressSchema;
