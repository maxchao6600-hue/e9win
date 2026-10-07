import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function patch(file) {
  const html = readFileSync(file, "utf8");
  const next = html.replace("<html lang=\"en-MY\">", "<html lang=\"zh-MY\">");
  if (next !== html) writeFileSync(file, next);
}

function walk(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) patch(path);
  }
}

const home = join("out", "zh.html");
if (existsSync(home)) patch(home);
walk(join("out", "zh"));
