

import type { ReactNode } from "react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import * as styles from "./content.css";

type ContentProps = {
    children: ReactNode;
};

const scrollbarOptions = {
    scrollbars: {
        autoHide: "leave",
        autoHideDelay: 120,
    },
} as const;

const Content = ({ children }: ContentProps) => {
    return (
        <OverlayScrollbarsComponent
            defer
            className={styles.root}
            options={scrollbarOptions}
        >
            <div className={styles.body}>{children}</div>
        </OverlayScrollbarsComponent>
    );
};

export default Content;
