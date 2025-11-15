import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function NavigationMenuList({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				"group flex flex-1 list-none items-center justify-center gap-1",
				className,
			)}
			{...props}
		/>
	);
}
