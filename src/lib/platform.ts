export const isPlatformSupported = process.platform === "darwin" || process.platform === "linux";

export const isSudo = process.getuid && process.getuid() === 0 && process.geteuid && process.geteuid() === 0;
