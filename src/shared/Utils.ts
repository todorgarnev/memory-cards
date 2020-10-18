const unselectAll = (array: any): any[] => {
  return array.map((item: any) => ({
    key: item.key,
    value: item.value,
    active: item.active,
    selected: item.active && item.selected === true ? false : item.selected
  }));
}

const setSelectedItem = (array: any, itemKey: number): any[] => {
  const updatedArray = [...array];
  const selectedItem: any = updatedArray.findIndex((item: any) => item.key === itemKey);

  updatedArray[selectedItem].selected = true;
  return updatedArray;
}

const setSelectedItemsToUnactive = (array: any, firstItemKey: number, secondItemKey: number): any[] => {
  const updatedArray = [...array];
  const firstSelectedItem: any = updatedArray.findIndex((item: any) => item.key === firstItemKey);
  const secondSelectedItem: any = updatedArray.findIndex((item: any) => item.key === secondItemKey);

  updatedArray[firstSelectedItem].selected = true;
  updatedArray[secondSelectedItem].selected = true;
  updatedArray[firstSelectedItem].active = false;
  updatedArray[secondSelectedItem].active = false;

  return updatedArray;
}

export { unselectAll, setSelectedItem, setSelectedItemsToUnactive };