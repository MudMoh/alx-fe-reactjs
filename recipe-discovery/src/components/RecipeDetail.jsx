import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
	ArrowLeft,
	Star,
	Bookmark,
	Share2,
	Printer,
	Heart,
} from "lucide-react";
import { Separator } from "./ui/separator";

export function RecipeDetail({ recipe, onBack }) {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		if (recipe[`strIngredient${i}`]) {
			ingredients.push(
				`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
			);
		}
	}

	const instructions = recipe.strInstructions
		.split("\n")
		.filter((instruction) => instruction.trim() !== "");

	return (
		<div className="bg-background">
			<div className="container mx-auto px-4 py-8">
				{/* Header with back button */}
				<div className="mb-6">
					<Button
						variant="ghost"
						onClick={onBack}
						className="mb-4 hover:bg-muted">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Recipes
					</Button>

					<div className="flex items-center gap-2 mb-2">
						<h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
						<Badge variant="secondary">{recipe.strCategory}</Badge>
						<div className="flex items-center gap-1 ml-2">
							<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
							<span className="text-sm text-muted-foreground">4.8</span>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-3 mb-6">
						<Button size="sm">
							<Heart className="w-4 h-4 mr-2" />
							Save Recipe
						</Button>
						<Button variant="outline" size="sm">
							<Share2 className="w-4 h-4 mr-2" />
							Share
						</Button>
						<Button variant="outline" size="sm">
							<Printer className="w-4 h-4 mr-2" />
							Print
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
					{/* Left column - Image and recipe info */}
					<div>
						<div className="w-full h-80 rounded-xl overflow-hidden mb-6 shadow-lg">
							<img
								src={recipe.strMealThumb}
								alt={recipe.strMeal}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Ingredients */}
						<div className="bg-card rounded-xl border p-6 shadow-sm">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold">Ingredients</h3>
								<Badge variant="outline" className="text-sm">
									{ingredients.length} items
								</Badge>
							</div>
							<ul className="space-y-3 mb-6">
								{ingredients.map((ingredient, index) => (
									<li
										key={index}
										className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
										<div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5"></div>
										<span className="text-sm leading-relaxed">
											{ingredient}
										</span>
									</li>
								))}
							</ul>

							<Separator className="my-4" />

							<Button variant="outline" className="w-full" size="sm">
								<Bookmark className="w-4 h-4 mr-2" />
								Add to Shopping List
							</Button>
						</div>
					</div>

					{/* Right column - Instructions */}
					<div className="space-y-6">
						<div className="bg-card rounded-xl border p-6 shadow-sm">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-lg font-semibold">Instructions</h3>
								<Badge variant="outline" className="text-sm">
									{instructions.length} steps
								</Badge>
							</div>

							<ol className="space-y-6">
								{instructions.map((instruction, index) => (
									<li key={index} className="flex gap-4">
										<span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
											{index + 1}
										</span>
										<div className="flex-1">
											<span className="text-sm leading-relaxed pt-1">
												{instruction}
											</span>
											{index < instructions.length - 1 && (
												<div className="mt-4 border-b border-border"></div>
											)}
										</div>
									</li>
								))}
							</ol>

							{/* Completion Message */}
							<div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg text-center">
								<div className="text-lg mb-1">🎉</div>
								<h4 className="text-sm font-semibold text-green-800 mb-1">
									Congratulations!
								</h4>
								<p className="text-xs text-green-700">
									You've completed the recipe! Enjoy your delicious creation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
