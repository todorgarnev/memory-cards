const unselectAll = (array: any[]): any[] => {
  return array.map((item: any) => ({
    key: item.key,
    value: item.value,
    active: item.active,
    selected: item.active && item.selected === true ? false : item.selected
  }));
}

const checkAllSelected = (array: any[]): boolean => {
  return array.every((item: any) => item.active === false);
}

const setSelectedItem = (array: any[], itemKey: number): any[] => {
  const updatedArray = [...array];
  const selectedItem: any = updatedArray.findIndex((item: any) => item.key === itemKey);

  updatedArray[selectedItem].selected = true;
  return updatedArray;
}

const setSelectedItemsToUnactive = (array: any[], firstItemKey: number, secondItemKey: number): any[] => {
  const updatedArray = [...array];
  const firstSelectedItem: any = updatedArray.findIndex((item: any) => item.key === firstItemKey);
  const secondSelectedItem: any = updatedArray.findIndex((item: any) => item.key === secondItemKey);

  updatedArray[firstSelectedItem].selected = true;
  updatedArray[secondSelectedItem].selected = true;
  updatedArray[firstSelectedItem].active = false;
  updatedArray[secondSelectedItem].active = false;

  return updatedArray;
}

const getInitialGameItems = (size: number): any[] => {
  const test: any[] = [];

  for (let i = 0; i < size; i++) {
    test.push({ key: i, value: Math.floor(i / 2), selected: false, active: true });
  }

  return shuffleArray(test);
}

const shuffleArray = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
}

export {
  unselectAll,
  setSelectedItem,
  setSelectedItemsToUnactive,
  checkAllSelected,
  getInitialGameItems
};