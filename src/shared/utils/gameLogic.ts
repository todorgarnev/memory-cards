import { ICard } from "../interfaces/ICard";

const unselectAll = (array: ICard[]): ICard[] => {
  return array.map((item: ICard) => ({
    key: item.key,
    value: item.value,
    active: item.active,
    selected: item.active && item.selected === true ? false : item.selected
  }));
}

const checkAllSelected = (array: ICard[]): boolean => {
  return array.every((item: ICard) => item.active === false);
}

const setSelectedItem = (array: ICard[], itemKey: number): ICard[] => {
  const updatedArray = [...array];
  const selectedItem: number = updatedArray.findIndex((item: ICard) => item.key === itemKey);

  updatedArray[selectedItem].selected = true;
  return updatedArray;
}

const setSelectedItemsToUnactive = (array: ICard[], firstItemKey: number, secondItemKey: number): ICard[] => {
  const updatedArray = [...array];
  const firstSelectedItem: number = updatedArray.findIndex((item: ICard) => item.key === firstItemKey);
  const secondSelectedItem: number = updatedArray.findIndex((item: ICard) => item.key === secondItemKey);

  updatedArray[firstSelectedItem].selected = true;
  updatedArray[firstSelectedItem].active = false;
  updatedArray[secondSelectedItem].selected = true;
  updatedArray[secondSelectedItem].active = false;

  return updatedArray;
}

const getInitialGameItems = (size: number): ICard[] => {
  const arr: ICard[] = [];

  for (let i = 0; i < size; i++) {
    arr.push({ key: i, value: Math.floor(i / 2), selected: false, active: true });
  }

  return shuffleArray(arr);
}

const shuffleArray = (array: ICard[]): ICard[] => {
  return array.sort(() => Math.random() - 0.5);
}

export {
  unselectAll,
  setSelectedItem,
  setSelectedItemsToUnactive,
  checkAllSelected,
  getInitialGameItems
};