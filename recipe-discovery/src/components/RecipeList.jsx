import React from "react";
// These imports are assumed to be available from your project
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, X } from "lucide-react";

/**
 * A component for searching and filtering a list of items by a search term and category.
 * @param {object} props The component props.
 * @param {string} props.searchTerm The current search term.
 * @param {function} props.onSearchChange A function to call when the search term changes.
 * @param {string|null} props.selectedCategory The currently selected category.
 * @param {function} props.onCategoryChange A function to call when the category changes.
 * @param {string[]} props.categories A list of available categories.
 */
export function RecipeList({
	searchTerm,
	onSearchChange,
	selectedCategory,
	onCategoryChange,
	categories,
}) {
	return (
		<div className="space-y-4">
			<div className="relative">
				{/* Search icon */}
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
				{/* Input field for search term */}
				<Input
					placeholder="Search recipes..."
					value={searchTerm}
					onChange={(e) => onSearchChange(e.target.value)}
					className="pl-10"
				/>
			</div>

			<div className="flex flex-wrap gap-2">
				{/* Button to show all items (no category filter) */}
				<Button
					variant={selectedCategory === null ? "default" : "outline"}
					size="sm"
					onClick={() => onCategoryChange(null)}>
					All Recipes
				</Button>
				{/* Map over categories to create a button for each */}
				{categories.map((category) => (
					<Button
						key={category}
						variant={selectedCategory === category ? "default" : "outline"}
						size="sm"
						onClick={() => onCategoryChange(category)}>
						{category}
					</Button>
				))}
			</div>

			{/* Display active filters if a search term or category is selected */}
			{(searchTerm || selectedCategory) && (
				<div className="flex items-center gap-2">
					<span className="text-sm text-muted-foreground">Active filters:</span>
					{searchTerm && (
						<Badge variant="secondary" className="flex items-center gap-1">
							Search: {searchTerm}
							{/* Clear search term button */}
							<X
								className="w-3 h-3 cursor-pointer"
								onClick={() => onSearchChange("")}
							/>
						</Badge>
					)}
					{selectedCategory && (
						<Badge variant="secondary" className="flex items-center gap-1">
							{selectedCategory}
							{/* Clear category filter button */}
							<X
								className="w-3 h-3 cursor-pointer"
								onClick={() => onCategoryChange(null)}
							/>
						</Badge>
					)}
				</div>
			)}
		</div>
	);
}
