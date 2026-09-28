// Builds the site as plain static files in dist/ for GitHub Pages.
// Usage: npm run build:static
import { execSync } from "node:child_process";
import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";

const env = { ...process.env };
delete env.LOVABLE_SANDBOX;
delete env.DEV_SERVER__PROJECT_PATH;

rmSync(".output", { recursive: true, force: true });
rmSync("dist", { recursive: true, force: true });
execSync("npx vite build", { stdio: "inherit", env });

if (!existsSync(".output/public/index.html")) {
  throw new Error("Static pages were not generated (.output/public/index.html missing).");
}

rmSync("dist", { recursive: true, force: true });
cpSync(".output/public", "dist", { recursive: true });
// Photos and video (mirrors their /__l5e/... paths).
cpSync("static-media", "dist", { recursive: true });
if (existsSync("CNAME")) cpSync("CNAME", "dist/CNAME");
// Without this GitHub Pages hides folders starting with "_".
writeFileSync("dist/.nojekyll", "");
cpSync("dist/index.html", "dist/404.html");

console.log("\nStatic site ready in dist/");
