import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./globals.css";

const MontBlack = localFont({
  src: [
    {
      path: "/public/fonts/Montserrat-Black.otf",
      style: "normal",
    },
  ],
  variable: "--font-mont-black",
});

const MontRegular = localFont({
  src: [
    {
      path: "/public/fonts/Montserrat-Regular.otf",
      style: "normal",
    },
  ],
  variable: "--font-mont-regular",
});

const MontBold = localFont({
  src: [
    {
      path: "/public/fonts/Montserrat-Bold.otf",
      style: "normal",
    },
  ],
  variable: "--font-mont-bold",
});

export const metadata = {
  title: "Hispano Seguros",
  description:
    "Somos una agencia de seguros dedicada a servir a la comunidad hispana en Estados Unidos. Entendemos los desafíos que enfrentan los migrantes al adaptarse a un nuevo sistema de salud. Por eso, ofrecemos una atención personalizada y accesible en su idioma, ayudando a nuestros clientes a proteger a sus familias y su bienestar con la tranquilidad y confianza que merecen. Nuestra misión es ser su apoyo en cada paso del camino, facilitando su integración y bienestar en su nuevo hogar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${MontRegular.variable} ${MontBold.variable} ${MontBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
