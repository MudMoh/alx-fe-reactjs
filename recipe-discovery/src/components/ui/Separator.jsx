import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "./utils";

/**
 * A horizontal or vertical line to visually separate content.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the separator.
 * @param {'horizontal' | 'vertical'} [props.orientation] The orientation of the separator.
 * @param {boolean} [props.decorative] If true, the separator is purely for decoration and won't be announced by screen readers.
 */
function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator-root"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
				className
			)}
			{...props}
		/>
	);
}

export { Separator };
