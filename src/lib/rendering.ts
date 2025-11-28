import chalk from "chalk";

export function renderAnalysis(text: string): string {
  return text.replace(/\*(?!\s)([^*]+?)\*/g, (_, content) => chalk.bold(content));
}
