import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/**
 * @description Button styles with variants
 * @variants {primary, secondary, danger, outline}
 * @defaultVariants {intent: 'primary'}
 */
const buttonStyles = cva(
  [
    "hover:cursor-pointer rounded-full text-md",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      intent: {
        primary:
          "uppercase font-thin border-2 border-[#F59047] bg-transparent px-5 py-1.5 text-white transition-all duration-300 ease-in-out shadow-[inset_0_0_15px_rgba(245,144,71,0.4)] hover:shadow-[inset_0_0_25px_rgba(245,144,71,0.5)]",
        secondary:
          "uppercase font-thin border-2 border-[#ffffff] rounded-full bg-transparent px-5 py-1.5 text-white hover:border-white transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]",
        tertiary:
          "uppercase text-sm mb-2 px-6 py-3 text-white rounded-full bg-[#F4802F] transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(245,144,71,0.5)] hover:shadow-[0_0_25px_rgba(245,144,71,0.4)]",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

/**
 * Type for Button Styles Props
 */
export type ButtonStylesProps = VariantProps<typeof buttonStyles>;

/**
 * Function to get the correct button styles dynamically
 * @param opts Button style options (intent + additional classes)
 * @returns Merged class string
 */
export function getButtonStyles({
  intent,
  className,
}: ButtonStylesProps & { className?: string }): string {
  return twMerge(buttonStyles({ intent }), className);
}
