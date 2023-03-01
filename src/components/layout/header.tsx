import type { FC } from "react";

import { LocaleSwitcher } from "./locale-switcher";

type Props = {
  someProp?: string;
};
export const Header: FC<Props> = () => {
  return (
    <header>
      <LocaleSwitcher />
    </header>
  );
};
