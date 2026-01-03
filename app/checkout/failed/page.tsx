import HomeButton from "@/components/button/home-button";

export default function CheckoutFailed() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-5">
      <div className="text-2xl ">Payment Failed</div>
      <HomeButton />
    </div>
  );
}
