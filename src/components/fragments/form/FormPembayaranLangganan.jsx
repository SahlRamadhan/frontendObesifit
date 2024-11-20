import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FormPembayaranLangganan() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button className="bg-primary text-white font-bold w-full py-2 rounded-md" size="lg" onClick={() => navigate("/tatacara-pembayaran")}>
        Lakukan Pembayaran Sekarang
      </Button>
    </div>
  );
}
