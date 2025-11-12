export default function Error() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-5">
      <p className="text-8xl font-bold">404</p>
      <div className="text-center">
        <p className="text-4xl font-semibold text-secondary">
          Sorry, something went wrong
        </p>
        <p className="text-xl font-semibold text-muted-foreground pt-2">
          Please try again later
        </p>
      </div>
    </div>
  );
}
