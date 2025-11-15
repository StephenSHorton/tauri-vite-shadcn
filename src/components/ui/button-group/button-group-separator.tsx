import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function ButtonGroupSeparator({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation}
			className={cn(
				"bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
				className,
			)}
			{...props}
		/>
	);
}
