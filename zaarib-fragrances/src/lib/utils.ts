import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return "\u20B9" + price.toLocaleString("en-IN");
}

export function discount(price: number, original: number): number {
  return Math.round((1 - price / original) * 100);
}
