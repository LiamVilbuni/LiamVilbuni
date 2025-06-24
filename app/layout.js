import "./globals.css";
import { ibmPlexMono, orbitron, unicaOne } from "@/utils/fonts";

export const metadata = {
  title: "Liam Vilbuni",
  description: "Hi! I am Liam Vilbuni.",
};

export default function RootLayout({ children }) {
  ibmPlexMono.className;
  orbitron.className;
  unicaOne.className;

  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.className} antialiased`}
      >
        <style>
          {`
    :root {
      --font-orbitron: "Orbitron";
      --font-unica-one: "Unica One";
      --font-ibm-plex-mono: "IBM Plex Mono";
      
      --jetblack: #0B0C10;
      --charcoalgray: #1F1F1F;
      --cyberteal: #00F0B5;
      --electricviolet: #7F00FF;
      --snowwhite: #F7F7F7;
      --matrixgreen: #00FF41;
      --smokegray: #3C3F41;
    }
    `}
        </style>
        {children}
      </body>
    </html>
  );
}
