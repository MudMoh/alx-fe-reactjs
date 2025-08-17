import * as React from "react";
import { cn } from "./utils";

/**
 * A container component with a card-like appearance.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the card.
 */
function Card({ className, ...props }) {
	return (
		<div
			data-slot="card"
			className={cn(
				"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
				className
			)}
			{...props}
		/>
	);
}

/**
 * The header section of a card.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the header.
 */
function CardHeader({ className, ...props }) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className
			)}
			{...props}
		/>
	);
}

/**
 * The title of a card.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the title.
 */
function CardTitle({ className, ...props }) {
	return (
		<h4
			data-slot="card-title"
			className={cn("leading-none", className)}
			{...props}
		/>
	);
}

/**
 * The description or subtitle for a card.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the description.
 */
function CardDescription({ className, ...props }) {
	return (
		<p
			data-slot="card-description"
			className={cn("text-muted-foreground", className)}
			{...props}
		/>
	);
}

/**
 * A container for actions within the card header.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the action container.
 */
function CardAction({ className, ...props }) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className
			)}
			{...props}
		/>
	);
}

/**
 * The main content area of a card.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the content.
 */
function CardContent({ className, ...props }) {
	return (
		<div
			data-slot="card-content"
			className={cn("px-6 [&:last-child]:pb-6", className)}
			{...props}
		/>
	);
}

/**
 * The footer section of a card.
 * @param {object} props The component props.
 * @param {string} [props.className] Optional class names to add to the footer.
 */
function CardFooter({ className, ...props }) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

// Export all the card-related components for use in other files
export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
};
