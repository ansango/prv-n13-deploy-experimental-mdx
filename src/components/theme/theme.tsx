import type { FC, ReactNode } from "react";

import localFont from "next/font/local";

export const caviar = localFont({
  src: [
    {
      path: "../../assets/fonts/CaviarDreams.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/CaviarDreams-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/CaviarDreams-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/CaviarDreams-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

type Props = {
  children: ReactNode;
};

export const Theme: FC<Props> = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --caviar: ${caviar.style.fontFamily};
            --color-primary: #416729;
            --color-secondary: theme("colors.indigo.500");
            --color-text: theme("colors.gray.900");
            --color-text-offset: theme("colors.gray.600");
            --color-background: theme("colors.gray.50");
            --color-background-offset: theme("colors.gray.100");
            --color-border: theme("colors.gray.900" / 10%);
          }
        `}
      </style>
      {children}
    </>
  );
};
