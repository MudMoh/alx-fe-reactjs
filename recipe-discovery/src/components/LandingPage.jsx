import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// These imports are assumed to be available from your project
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
	ChefHat,
	Clock,
	Users,
	Search,
	Star,
	Heart,
	Utensils,
} from "lucide-react";

/**
 * A full-page component for a recipe discovery application.
 * It features a hero section, stats, featured recipes, categories, and a CTA.
 * @param {object} props The component props.
 * @param {function} props.onGetStarted A function to call when the "get started" button is clicked.
 */
export function LandingPage({ onGetStarted }) {
	// Data for the different sections of the landing page
	const features = [
		{
			icon: <Search className="w-8 h-8 text-primary" />,
			title: "Smart Search",
			description:
				"Find recipes by ingredients, cuisine, or dietary preferences with our intelligent search system.",
		},
		{
			icon: <Clock className="w-8 h-8 text-primary" />,
			title: "Quick Filters",
			description:
				"Filter by cooking time, difficulty level, and serving size to find the perfect recipe for any occasion.",
		},
		{
			icon: <ChefHat className="w-8 h-8 text-primary" />,
			title: "Expert Curated",
			description:
				"All recipes are carefully selected and tested by culinary experts to ensure delicious results.",
		},
		{
			icon: <Users className="w-8 h-8 text-primary" />,
			title: "Community Driven",
			description:
				"Join thousands of home cooks sharing their favorite recipes and cooking tips.",
		},
	];

	const categories = [
		{
			name: "Italian",
			count: 25,
			image:
				"https://images.unsplash.com/photo-1673789274287-5441868398cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc1NTM3MjgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Thai",
			count: 18,
			image:
				"https://images.unsplash.com/photo-1668665772043-bdd32e348998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0aGFpJTIwZ3JlZW4lMjBjdXJyeSUyMGZvb2R8ZW58MXx8fHwxNzU1MzcyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Mexican",
			count: 22,
			image:
				"https://images.unsplash.com/photo-1615818449536-f26c1e1fe0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBmb29kfGVufDF8fHx8MTc1NTI5MjIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Dessert",
			count: 30,
			image:
				"https://images.unsplash.com/photo-1736840334919-aac2d5af73e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NTUyODI1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Healthy",
			count: 35,
			image:
				"https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoZWFsdGh5JTIwc2FsYWQlMjBib3dsfGVufDF8fHx8MTc1NTM0NTEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Salad",
			count: 15,
			image:
				"https://images.unsplash.com/photo-1739436776460-35f309e3f887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmcmVzaCUyMGNhZXNhciUyMHNhbGFkfGVufDF8fHx8MTc1NTI5NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
	];

	const stats = [
		{ number: "500+", label: "Recipes" },
		{ number: "50+", label: "Categories" },
		{ number: "10k+", label: "Happy Cooks" },
		{ number: "4.8★", label: "Average Rating" },
	];

	const featuredRecipes = [
		{
			title: "Classic Spaghetti Carbonara",
			time: "20 mins",
			difficulty: "Easy",
			image:
				"https://images.unsplash.com/photo-1673789274287-5441868398cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc1NTM3MjgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			title: "Thai Green Curry",
			time: "30 mins",
			difficulty: "Medium",
			image:
				"https://images.unsplash.com/photo-1668665772043-bdd32e348998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0aGFpJTIwZ3JlZW4lMjBjdXJyeSUyMGZvb2R8ZW58MXx8fHwxNzU1MzcyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			title: "Beef Tacos",
			time: "25 mins",
			difficulty: "Easy",
			image:
				"https://images.unsplash.com/photo-1615818449536-f26c1e1fe0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBmb29kfGVufDF8fHx8MTc1NTI5MjIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1623059265421-2dc2a04f10f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwa2l0Y2hlbiUyMGZvb2QlMjBwcmVwYXJhdGlvbnxlbnwxfHx8fDE3NTUzNjE2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center">
					<div className="absolute inset-0 bg-black/60"></div>
				</div>

				<div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
					<div className="text-center max-w-4xl mx-auto text-white">
						<div className="flex items-center justify-center mb-8">
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
								<Utensils className="w-12 h-12 text-white" />
							</div>
						</div>

						<h1 className="mb-6 text-4xl sm:text-7xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
							Recipe Discovery
						</h1>

						<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
							Discover amazing recipes from around the world. Find your next
							favorite dish with our curated collection of delicious,
							easy-to-follow recipes.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
							<Button
								size="lg"
								onClick={onGetStarted}
								className="text-lg px-8 py-6 h-auto bg-white text-black hover:bg-white/90">
								<ChefHat className="w-5 h-5 mr-2" />
								Start Cooking
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white/10">
								<Heart className="w-5 h-5 mr-2" />
								Browse Favorites
							</Button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
									<div className="text-2xl sm:text-3xl font-bold mb-1 text-white">
										{stat.number}
									</div>
									<div className="text-sm text-white/80">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Featured Recipes Section */}
			<div className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Featured Recipes
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Start your culinary journey with these popular, tried-and-tested
							recipes loved by our community.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{featuredRecipes.map((recipe, index) => (
							<Card
								key={index}
								className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
								<div className="relative overflow-hidden">
									<img
										src={recipe.image}
										alt={recipe.title}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-4 right-4">
										<Badge
											variant="secondary"
											className="bg-white/90 text-black">
											{recipe.difficulty}
										</Badge>
									</div>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-3">{recipe.title}</h3>
									<div className="flex items-center text-muted-foreground">
										<Clock className="w-4 h-4 mr-2" />
										<span>{recipe.time}</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<Button
							size="lg"
							onClick={onGetStarted}
							className="text-lg px-8 py-6 h-auto">
							View All Recipes
						</Button>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-16 sm:py-24">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Why Choose Recipe Discovery?
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Everything you need to create amazing meals, from quick weeknight
							dinners to impressive weekend feasts.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<Card
								key={index}
								className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-muted/50 to-muted/30">
								<CardContent className="p-6 text-center">
									<div className="flex justify-center mb-4">
										<div className="bg-primary/10 p-4 rounded-2xl">
											{feature.icon}
										</div>
									</div>
									<h3 className="text-xl font-semibold mb-3">
										{feature.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/* Categories Section */}
			<div className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Explore Recipe Categories
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							From comfort food classics to international cuisines, find exactly
							what you're craving.
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
						{categories.map((category, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
								<div className="relative">
									{/* <ImageWithFallback
										src={category.image}
										alt={category.name}
										className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
									/> */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
									<div className="absolute bottom-2 left-2 right-2">
										<h3 className="font-semibold text-white text-sm">
											{category.name}
										</h3>
									</div>
								</div>
								<CardContent className="p-3 text-center">
									<Badge variant="outline" className="text-xs">
										{category.count} recipes
									</Badge>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<Button
							variant="outline"
							size="lg"
							onClick={onGetStarted}
							className="text-lg px-8 py-6 h-auto">
							View All Categories
						</Button>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-16 sm:py-24">
				<div className="container mx-auto px-4">
					<div className="relative overflow-hidden border border-border rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10">
						<div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
							{/* <ImageWithFallback
								src="https://images.unsplash.com/photo-1618788856598-1e6fab7a4a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGluZ3JlZGllbnRzJTIwZm9vZHxlbnwxfHx8fDE3NTUzNzI4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt="Colorful ingredients"
								className="w-full h-full object-cover"
							/> */}
						</div>
						<div className="relative z-10 p-8 sm:p-12 text-center">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">
								Ready to Start Cooking?
							</h2>
							<p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
								Join thousands of home cooks who've discovered their new
								favorite recipes. Your next great meal is just a click away.
							</p>
							<Button
								size="lg"
								onClick={onGetStarted}
								className="text-lg px-8 py-6 h-auto">
								<Star className="w-5 h-5 mr-2" />
								Explore Recipes Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function AppWrapper() {
	const navigate = useNavigate();

	// ...all your state and handlers...

	const handleGetStarted = () => {
		navigate("/recipes");
	};

	// ...rest of your App code, pass handleGetStarted to LandingPage...
}

export default function App() {
	return (
		<BrowserRouter>
			<AppWrapper />
		</BrowserRouter>
	);
}
