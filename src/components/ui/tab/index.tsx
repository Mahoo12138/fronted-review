import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { TabsRootProps, TabsListProps, TabsTabProps, TabsPanelProps } from "@base-ui/react/tabs";
import * as styles from "./tabs.css";

function mergeClass<S>(
    base: string,
    className: string | ((state: S) => string | undefined) | undefined,
): string | ((state: S) => string) {
    if (typeof className === "function") {
        return (state: S) => [base, className(state)].filter(Boolean).join(" ");
    }
    return [base, className].filter(Boolean).join(" ");
}

export const Tabs = ({ className, ...props }: TabsRootProps) => (
    <BaseTabs.Root className={mergeClass(styles.root, className)} {...props} />
);

export const TabsList = ({ className, ...props }: TabsListProps) => (
    <BaseTabs.List className={mergeClass(styles.list, className)} {...props} />
);

export const TabsTrigger = ({ className, ...props }: TabsTabProps) => (
    <BaseTabs.Tab className={mergeClass(styles.tab, className)} {...props} />
);

export const TabsContent = ({ className, keepMounted = true, ...props }: TabsPanelProps) => (
    <BaseTabs.Panel keepMounted={keepMounted} className={mergeClass(styles.panel, className)} {...props} />
);
