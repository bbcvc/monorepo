import { cn } from "@monorepo/shared";
import type React from "react";
import styles from "./index.module.less";

const Button: React.FC<React.ComponentPropsWithRef<"button">> = (props) => {
  const { className, ...rest } = props;
  return (
    <button className={cn(styles.button, className)} type="button" {...rest}>
      Button1
    </button>
  );
};

export default Button;
