import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

// Display face for headings, sans for everything else.
// The CSS variables are applied on <main> in page.tsx and read by globals.css.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
