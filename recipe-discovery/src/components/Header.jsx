import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { Utensils, ArrowLeft } from "lucide-react";

export function Header({ showBackButton = false }) {
	return (
		<header className="bg-background border-b border-border sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{showBackButton && (
							<Link to="/">
								<Button variant="ghost" size="sm" className="hover:bg-muted">
									<ArrowLeft className="w-4 h-4 mr-2" />
									Home
								</Button>
							</Link>
						)}
						<div className="flex items-center gap-2">
							<div className="bg-muted p-2 rounded-lg border">
								<Utensils className="w-6 h-6 text-muted-foreground" />
							</div>
							<Link to="/">
								<h1 className="text-xl">Recipe Discovery</h1>
							</Link>
						</div>
					</div>

					{!showBackButton && (
						<Link to="/">
							<Button variant="ghost" className="hover:bg-muted">
								Back to Home
							</Button>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
