import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-[100vh] px-4 text-center">
      <h2 className="text-6xl font-bold gradient-title mb-4">Not Found</h2>
      <p className="text-xl font-semibold mb-4">Page not found</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
