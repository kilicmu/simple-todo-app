import { getTimeStamp } from './../utils/timeUtils';
// import localforse from "localforage";



const initivalState = {
  // timeStamp: getTimeStamp(),
  showFinished: false,
  list: []
}

// const initState = (storage: Storage) => {
//   let state = storage.getItem("state")
//   let tState: any;
//   if (!state) {
//     const timeStamp = getTimeStamp();
//     const showFinished = false;
//     const list: any[] = [];
//     tState = { timeStamp, showFinished, list }
//     state = JSON.stringify(tState);
//     storage.setItem('state', state);
//   } else {
//     tState = JSON.stringify(state);
//     const timeStamp = tState.timeStamp;
//     const showFinished = tState.showFinished;
//     let list: any[] = [];
//     if (timeStamp !== getTimeStamp()) {
//       list = [];
//       storage.setItem('state', JSON.stringify({ timeStamp, showFinished, list }));
//     }
//   }
//   return tState
// }


interface IAction {
  type: string;
  data?: any;
}

interface IListItem {
  id: number;
  content: string;
  finished: boolean;
}

interface IState {
  timeStamp: string;
  showFinished: boolean;
  list: IListItem[]
}
export const reducer = (state: any, action: any) => {
  if (state === undefined) {
    state = initivalState;
  }
  switch (action.type) {
    case "REVERSE_SHOW_STATE":
      // storage.setItem('showFinished', !state.showFinished)
      const showFinished = !state.showFinished
      return {
        ...state,
        showFinished
      };
    case "REVERSE_ITEM_STATE":
      const list = state.list.map((i: any) => {
        if (action.data.id === i.id) {
          i.finished = !i.finished
        }
        return i;
      })
      return {
        ...state,
        list
      }
    case "ADD_ITEM":

      return {
        ...state,
        list: [
          ...state.list,
          action.data
        ]
      }
    case "REMOVE_TARGET":
      return {
        ...state,
        list: [...state.list.filter((i: any) => {
          return action.data.id !== i.id;
        })]
      }
    default:
      return state;
  }
}