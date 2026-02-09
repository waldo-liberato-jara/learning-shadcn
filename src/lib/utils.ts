import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizeQuantity = (
  rawValue: string,
  stock: number,
): number | null => {
  const sanitized = rawValue.replace(/\D/g, "");

  if (sanitized === "") return null;

  const value = Number(sanitized);

  if (!value || value <= 0) return null;

  return Math.min(value, stock);
};
