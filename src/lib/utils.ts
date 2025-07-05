import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


// local storage utils

export function saveSelectedPlan(planId: string) {
    localStorage.setItem('selectedPlan', planId);
}

export function getSelectedPlan() {
    return localStorage.getItem('selectedPlan');
}

export function clearSelectedPlan() {
    localStorage.removeItem('selectedPlan');
}

export function isLoggedIn() {
    if (typeof document === 'undefined') return false;
    return document.cookie.includes('auth-token');
}
