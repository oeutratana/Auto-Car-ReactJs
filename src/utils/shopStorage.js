export const CART_STORAGE_KEY = "autoCarCart";
export const FAVORITES_STORAGE_KEY = "autoCarFavorites";
export const SHOP_STORAGE_EVENT = "autoCarShopStorage";

export function getStoredCarIds(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function setStoredCarIds(key, ids) {
  localStorage.setItem(key, JSON.stringify(ids));
  window.dispatchEvent(new Event(SHOP_STORAGE_EVENT));
}

export function addStoredCarId(key, id) {
  const ids = getStoredCarIds(key);

  if (!ids.includes(id)) {
    setStoredCarIds(key, [...ids, id]);
  }
}

export function toggleStoredCarId(key, id) {
  const ids = getStoredCarIds(key);
  const nextIds = ids.includes(id)
    ? ids.filter((storedId) => storedId !== id)
    : [...ids, id];

  setStoredCarIds(key, nextIds);
  return nextIds.includes(id);
}

export function removeStoredCarId(key, id) {
  setStoredCarIds(
    key,
    getStoredCarIds(key).filter((storedId) => storedId !== id)
  );
}

export function getShopCounts() {
  return {
    cart: getStoredCarIds(CART_STORAGE_KEY).length,
    favorites: getStoredCarIds(FAVORITES_STORAGE_KEY).length,
  };
}
