import { execSync } from "node:child_process";

try {
  // check if exists .git
  execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });

  console.log("build");
} catch (error) {
  console.log("skip build");
  process.exit(1);
}
