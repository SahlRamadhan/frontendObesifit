import { Button } from "@/components/ui/button";

export default function FormPembayaran2() {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <Button
        className="bg-primary text-white font-bold w-full py-2 rounded-md"
        size="lg"
      >
        Kembali ke Dashboard
      </Button>
    </div>
  );
}
