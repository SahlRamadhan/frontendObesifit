import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import EmailPage from "@/pages/emailpages/EmailPage";
import LoginDokterPage from "@/pages/auth/LoginDokterPage";
import RegisterDokterPage from "@/pages/auth/RegisterDokterPage";
import EmailDokterPage from "./pages/emailpages/EmailDokterPage";
import LoginAdminPage from "./pages/auth/LoginAdminPage";
import Dashboard from "./pages/DashboardPage";
import Register2Page from "./pages/auth/Register2Page";
import PembayaranLanggananPage from "./pages/pembayaranpages/PembayaranLanggananPage";
import TataCaraPembayaranPage from "./pages/pembayaranpages/TataCaraPembayaranPage";
import Pembayaran2Page from "./pages/pembayaranpages/Pembayaran2Page";
import EditProfilPage from "./pages/editpages/EditProfilPage";
import EditProfilDokterPage from "./pages/editpages/EditProfilDokterPage";
import EmailAdminPage from "./pages/emailpages/EmailAdminPage";
import EditProfilAdminPage from "./pages/editpages/EditProfilAdminPage";
import KalkulatorBMIPage from "./pages/kalkulatorpages/KalkulatorBMIPage";
import KalkulatorKaloriPage from "./pages/kalkulatorpages/KalkulatorKaloriPage";
import HasilBMIPage from "./pages/kalkulatorpages/HasilBMIPage";
import HasilKaloriPage from "./pages/kalkulatorpages/HasilKaloriPage";
import KalkulatorBMIDokterPage from "./pages/kalkulatorpages/KalkulatorBMIDokterPage";
import HasilBMIDokterPage from "./pages/kalkulatorpages/HasilBMIDokterPage";
import KalkulatorKaloriDokterPage from "./pages/kalkulatorpages/KalkulatorKaloriDokterPage";
import HasilKaloriDokterPage from "./pages/kalkulatorpages/HasilKaloriDokterPage";
import ListDokterPage from "./pages/dokterkonsultanpages/ListDokterPage";
import ListSesiKonsulPage from "./pages/dokterkonsultanpages/ListSesiKonsulPage";
import DaftarDokterAdminPage from "./pages/kelolapeges/DaftarDokterAdminPage";
import KelolaDokterPage from "./pages/kelolapeges/KelolaDokterPage";
import KelolaPembayaranPage from "./pages/kelolapeges/KelolaPembayaranPage";
import HomeUser from "./pages/homepages/HomeUser";
import ArtikelUser from "./pages/artikelpages/ArtikelUser";
import VideoUser from "./pages/videopages/VideoUser";
import HomeDokter from "./pages/homepages/HomeDokter";
import IsiArtikelUserPage from "./pages/artikelpages/IsiArtikelUserPage";
import IsiVideoUserPage from "./pages/videopages/IsiVideoUserPage";
import ArtikelDokter from "./pages/artikelpages/ArtikelDokter";
import VideoDokter from "./pages/videopages/VideoDokter";
import IsiArtikelDokterPage from "./pages/artikelpages/IsiArtikelDokterPage";
import IsiVideoDokterPage from "./pages/videopages/IsiVideoDokterPage";
import BuatArtikelDokterPage from "./pages/ceratepages/BuatArtikelDokterPage";
import BuatVideoDokterPage from "./pages/ceratepages/BuatVideoDokterPage";
import HomeAdmin from "./pages/homepages/HomeAdmin";
import KelolaPenggunaPage from "./pages/kelolapeges/KelolaPenggunaPage";
import KelolaArtikelPage from "./pages/kelolapeges/KelolaArtikelPage";
import KelolaVideoPage from "./pages/kelolapeges/KelolaVideoPages";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./context/ProviderAuth";
import NotFound from "./pages/404pages/NotFoundPages";
import ListArtikelDokterPage from "./pages/artikelpages/ListArtikelDokterPages";
import ListVideoDokterPage from "./pages/videopages/ListVideoDokter.page";
import ChatPage from "./pages/chatpages/ChatPages";
import ChatDokterPages from "./pages/chatpages/ChatDokterPages";
import KelolaChatPage from "./pages/kelolapeges/KelolaChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/login-dokter",
    element: <LoginDokterPage />,
  },
  {
    path: "/register-dokter",
    element: <RegisterDokterPage />,
  },
  {
    path: "/email-dokter",
    element: <EmailDokterPage />,
  },
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
  {
    path: "/verifyotp",
    element: <Register2Page />,
  },
  {
    path: "/email-admin",
    element: <EmailAdminPage />,
  },
  {
    path: "/homeuser",
    element: (
      <ProtectedRoute role={2}>
        <HomeUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/homedokter",
    element: (
      <ProtectedRoute role={3}>
        <HomeDokter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/homeadmin",
    element: (
      <ProtectedRoute role={1}>
        <HomeAdmin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/pembayaran-langganan",
    element: (
      <ProtectedRoute>
        <PembayaranLanggananPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tatacara-pembayaran",
    element: (
      <ProtectedRoute>
        <TataCaraPembayaranPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/pembayaran2",
    element: (
      <ProtectedRoute>
        <Pembayaran2Page />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-profil",
    element: (
      <ProtectedRoute>
        <EditProfilPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editprofil-dokter",
    element: (
      <ProtectedRoute>
        <EditProfilDokterPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/editprofil-admin",
    element: (
      <ProtectedRoute>
        <EditProfilAdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kalkulator-bmi",
    element: (
      <ProtectedRoute>
        <KalkulatorBMIPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kalkulator-kalori",
    element: (
      <ProtectedRoute>
        <KalkulatorKaloriPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hasil-bmi",
    element: (
      <ProtectedRoute>
        <HasilBMIPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hasil-kalori",
    element: (
      <ProtectedRoute>
        <HasilKaloriPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kalkulatorbmi-dokter",
    element: (
      <ProtectedRoute>
        <KalkulatorBMIDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hasilbmi-dokter",
    element: (
      <ProtectedRoute>
        <HasilBMIDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kalkulatorkalori-dokter",
    element: (
      <ProtectedRoute>
        <KalkulatorKaloriDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hasilkalori-dokter",
    element: (
      <ProtectedRoute>
        <HasilKaloriDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/list-dokter",
    element: (
      <ProtectedRoute>
        <ListDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/list-konsul",
    element: (
      <ProtectedRoute>
        <ListSesiKonsulPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/daftardokter-admin",
    element: (
      <ProtectedRoute>
        <DaftarDokterAdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelola-dokter",
    element: (
      <ProtectedRoute>
        <KelolaDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelola-pembayaran",
    element: (
      <ProtectedRoute>
        <KelolaPembayaranPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/artikeluser",
    element: (
      <ProtectedRoute>
        <ArtikelUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/videouser",
    element: (
      <ProtectedRoute>
        <VideoUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/isiartikeluser/:id",
    element: (
      <ProtectedRoute>
        <IsiArtikelUserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/isivideouser/:id",
    element: (
      <ProtectedRoute>
        <IsiVideoUserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/artikeldokter",
    element: (
      <ProtectedRoute>
        <ArtikelDokter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/videodokter",
    element: (
      <ProtectedRoute>
        <VideoDokter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/isiartikeldokter/:id",
    element: (
      <ProtectedRoute>
        <IsiArtikelDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/isivideodokter/:id",
    element: (
      <ProtectedRoute>
        <IsiVideoDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/buatartikeldokter",
    element: (
      <ProtectedRoute role={3}>
        <BuatArtikelDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/listartikeldokter",
    element: (
      <ProtectedRoute role={3}>
        <ListArtikelDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/buatvideodokter",
    element: (
      <ProtectedRoute>
        <BuatVideoDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/listvideodokter",
    element: (
      <ProtectedRoute>
        <ListVideoDokterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelolapengguna",
    element: (
      <ProtectedRoute>
        <KelolaPenggunaPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelolaartikel",
    element: (
      <ProtectedRoute>
        <KelolaArtikelPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelolavideo",
    element: (
      <ProtectedRoute>
        <KelolaVideoPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat/:sessionId",
    element: <ChatPage />,
  },
  {
    path: "/chat/dokter/:sessionId",
    element: <ChatDokterPages />,
  },
  {
    path: "/kelolachat",
    element: (
      <ProtectedRoute>
        <KelolaChatPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/404",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
