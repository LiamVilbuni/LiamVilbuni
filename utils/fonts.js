import { Orbitron, IBM_Plex_Mono, Unica_One } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ibm-plex-mono"
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-orbitron"
});
const unicaOne = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-unica-one"
});

export { ibmPlexMono, orbitron, unicaOne };