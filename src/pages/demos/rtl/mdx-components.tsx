import type { ComponentProps, ReactNode } from "react";
import { AlertCircle, Info, Lightbulb } from "lucide-react";

import Callout from "@/pages/framework/mobx/components/Callout";
import Code from "@/pages/framework/mobx/components/Code";

type CalloutTone = ComponentProps<typeof Callout>["type"];

const iconMap = {
  info: <Info size={18} />,
  tip: <Lightbulb size={18} />,
  warning: <AlertCircle size={18} />,
  error: <AlertCircle size={18} />,
};

export function MdxCallout({
  type = "info",
  children,
}: {
  type?: CalloutTone;
  children: ReactNode;
}) {
  return (
    <Callout type={type} icon={iconMap[type]}>
      {children}
    </Callout>
  );
}

export function MdxCode({
  code,
  filename,
  lang,
}: {
  code: string;
  filename: string;
  lang: ComponentProps<typeof Code>["lang"];
}) {
  return (
    <Code filename={filename} lang={lang}>
      {code}
    </Code>
  );
}