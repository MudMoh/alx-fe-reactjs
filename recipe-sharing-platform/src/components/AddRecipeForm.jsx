import React, { useState } from "react";

const AddRecipeForm = () => {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [instructions, setInstructions] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!title) newErrors.title = "Title is required";
		if (!ingredients) newErrors.ingredients = "Ingredients are required";
		if (ingredients.split("\n").length < 2)
			newErrors.ingredients = "Please list at least two ingredients.";
		if (!instructions) newErrors.instructions = "Instructions are required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Handle form submission, e.g., send data to an API
			console.log({ title, ingredients, instructions });
			// Reset form
			setTitle("");
			setIngredients("");
			setInstructions("");
			setErrors({});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-center text-gray-800">
				Add a New Recipe
			</h2>

			<div>
				<label
					htmlFor="title"
					className="block text-sm font-medium text-gray-700">
					Recipe Title
				</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className={`mt-1 block w-full px-3 py-2 bg-white border ${
						errors.title ? "border-red-500" : "border-gray-300"
					} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
				/>
				{errors.title && (
					<p className="mt-2 text-sm text-red-600">{errors.title}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="ingredients"
					className="block text-sm font-medium text-gray-700">
					Ingredients (one per line)
				</label>
				<textarea
					id="ingredients"
					value={ingredients}
					onChange={(e) => setIngredients(e.target.value)}
					rows="4"
					className={`mt-1 block w-full px-3 py-2 bg-white border ${
						errors.ingredients ? "border-red-500" : "border-gray-300"
					} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}></textarea>
				{errors.ingredients && (
					<p className="mt-2 text-sm text-red-600">{errors.ingredients}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="instructions"
					className="block text-sm font-medium text-gray-700">
					Preparation Steps
				</label>
				<textarea
					id="instructions"
					value={instructions}
					onChange={(e) => setInstructions(e.target.value)}
					rows="6"
					className={`mt-1 block w-full px-3 py-2 bg-white border ${
						errors.instructions ? "border-red-500" : "border-gray-300"
					} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}></textarea>
				{errors.instructions && (
					<p className="mt-2 text-sm text-red-600">{errors.instructions}</p>
				)}
			</div>

			<div>
				<button
					type="submit"
					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Add Recipe
				</button>
			</div>
		</form>
	);
};

export default AddRecipeForm;
