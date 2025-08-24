import { Link } from "react-router-dom";
import { Badge } from "./ui/Badge";

export function RecipeCard({ recipe }) {
	return (
		<Link to={`/recipe/${recipe.idMeal}`}>
			<div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
				<div className="h-48 bg-muted flex items-center justify-center relative border-b">
					<img
						src={recipe.strMealThumb}
						alt={recipe.strMeal}
						className="w-full h-full object-cover"
					/>
					<div className="absolute top-2 right-2">
						<Badge variant="secondary">{recipe.strCategory}</Badge>
					</div>
				</div>

				<div className="p-4">
					<h3 className="mb-2">{recipe.strMeal}</h3>
					<p className="text-muted-foreground text-sm mb-3 line-clamp-2">
						{recipe.strInstructions}
					</p>
				</div>
			</div>
		</Link>
	);
}
