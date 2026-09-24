import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  { ignores: ["_research/**", "next-env.d.ts", ".next/**", "out/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { rules: { "@next/next/no-img-element": "off" } },
];

export default eslintConfig;
