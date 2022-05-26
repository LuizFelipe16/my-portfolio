export const copyToClipboard = (clipText: string) => {
  return navigator.clipboard.writeText(clipText);
}
