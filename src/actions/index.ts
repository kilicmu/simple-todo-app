
export const createReverseShowStateAction = () => {
  return {
    type: 'REVERSE_SHOW_STATE'
  }
}

export const createFinishTargetAction = (id: number) => {
  return {
    type: 'REVERSE_ITEM_STATE',
    data: {
      id
    }
  }
}

export const createAddItemAction = (data: any) => {
  return {
    type: 'ADD_ITEM',
    data: data
  }
}

export const createRemoveTargetAction = (id: number) => {
  return {
    type: 'REMOVE_TARGET',
    data: {
      id
    }
  }
}