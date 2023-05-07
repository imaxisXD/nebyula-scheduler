import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}



