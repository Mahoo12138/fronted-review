function parseMeta(meta = "") {
  const result: Record<string, string | boolean> = {};

  meta.replace(/([\w-]+)=["']([^"']+)["']/g, (_, k, v) => {
    result[k] = v;
    return "";
  });

  meta.replace(/([\w-]+)=([^\s]+)/g, (_, k, v) => {
    if (!(k in result)) result[k] = v;
    return "";
  });

  meta.split(/\s+/).forEach((token) => {
    if (!token) return;
    if (!token.includes("=") && !token.startsWith("{")) {
      result[token] = true;
    }
  });

  return result;
}
export function parseShikiMetaString(metaString: string) {
  const meta = parseMeta(metaString);
  const props: Record<string, string> = {};

  if (typeof meta.title === "string") props["data-title"] = meta.title;
  if (typeof meta.filename === "string") props["data-filename"] = meta.filename;
  if (meta.tab === true) props["data-tab"] = "true";
  else if (typeof meta.tab === "string") props["data-tab"] = meta.tab;
  if (meta.copy === true || meta.copy === "true") props["data-copy"] = "true";

  return props;
}
