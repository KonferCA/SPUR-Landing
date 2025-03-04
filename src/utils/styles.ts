// ClassNames: used for joining valid class names into a single string
export function cn(
  ...classes: (string | undefined | boolean | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
