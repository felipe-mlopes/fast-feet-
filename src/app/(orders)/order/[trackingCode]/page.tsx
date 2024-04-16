import { getOrderByTrackingCode } from "@/data/actions/orders";

export default async function TrackingCode({
  params,
}: {
  params: { trackingCode: string };
}) {
  const { order } = await getOrderByTrackingCode(params.trackingCode);

  return (
    <>
      {!order
        ? "Não existe pedido com o código informado."
        : JSON.stringify(order)}
    </>
  );
}
