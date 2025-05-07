import { GroceryItem } from "../data/groceries";

const RECENTLY_VIEWED_KEY = "recently_viewed";

export const addToRecentlyViewed = (item: GroceryItem) => {
  let viewed = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
  viewed = viewed.filter((i: GroceryItem) => i.id !== item.id);
  viewed.unshift(item); // most recent on top
  if (viewed.length > 10) viewed = viewed.slice(0, 10); // limit to 10 items
  localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(viewed));
};

export const getRecentlyViewed = (): GroceryItem[] => {
  return JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
};
