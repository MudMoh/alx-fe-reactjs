import { Button } from "./ui/button";
import { Utensils, ArrowLeft } from "lucide-react";

export function Header({ onBackToHome, showBackButton = false }) {
	return (
		<header className="bg-background border-b border-border sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{showBackButton && onBackToHome && (
							<Button
								variant="ghost"
								size="sm"
								onClick={onBackToHome}
								className="hover:bg-muted">
								<ArrowLeft className="w-4 h-4 mr-2" />
								Home
							</Button>
						)}
						<div className="flex items-center gap-2">
							<div className="bg-muted p-2 rounded-lg border">
								<Utensils className="w-6 h-6 text-muted-foreground" />
							</div>
							<h1 className="text-xl">Recipe Discovery</h1>
						</div>
					</div>

					{!showBackButton && onBackToHome && (
						<Button
							variant="ghost"
							onClick={onBackToHome}
							className="hover:bg-muted">
							Back to Home
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
