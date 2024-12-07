import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: [
      { url: '/Favicon/favicon.ico' },
    ]
  }
};

export default function RootLayout(props: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {props.children}
      </body>
    </html>
  );
}


