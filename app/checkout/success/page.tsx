// checkout/success/page.tsx
import { redirect } from "next/navigation";

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const payment_id = (await searchParams).payment_id;
  const status = (await searchParams).status;

  console.log("payment id is", payment_id);

  if (status && status === "failed") {
    redirect("/checkout/failed");
  }

  return (
    <div>
      hii
      <div>payment id is : {payment_id}</div>
      <div>status is : {status}</div>
    </div>
  );
}
