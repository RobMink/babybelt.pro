import { execSync } from "child_process";

const commands = {
  win32: [
    "copy .\\dist\\index.html .\\dist\\404.html",
    "echo Windows Copy Completed",
  ],
  other: ["cp ./dist/index.html ./dist/404.html", "echo Unix Copy Completed"],
};

const platformCommands =
  process.platform === "win32" ? commands.win32 : commands.other;
platformCommands.forEach((cmd) => {
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${cmd}`);
    console.error(error);
    process.exit(1);
  }
});
