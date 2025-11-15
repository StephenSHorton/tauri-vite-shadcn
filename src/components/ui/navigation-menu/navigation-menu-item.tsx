import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function NavigationMenuItem({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn("relative", className)}
			{...props}
		/>
	);
}
