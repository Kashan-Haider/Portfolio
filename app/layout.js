import './globals.css'
import { Raleway } from "@next/font/google";
const roboto = Raleway({
  weight: ["400" , '100' , "300" ,  "600" , "700" , "800" , "900"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <main className={roboto.className}> {children}</main>
        </body>      
    </html>
  )
}
