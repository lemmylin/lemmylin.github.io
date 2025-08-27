import React from "react";
import { styles } from "../ui/classnames.js";

export default function Badge({ children, dark }) {
  return (
    <span className={styles.badge(dark)}>
      {children}
    </span>
  );
}
