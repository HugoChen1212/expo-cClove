
const initialState = {
  likes: [],
  detail: {},
  favorDetail: {},
  like: []
}


export const onlyUnique=(value, index, self)=> {
        return self.indexOf(value) === index;
      }


export const petReducer = (state = initialState, action) => {

  if (action.type === 'like_pet'){
     const uniqueItem = state.likes.concat(action.pet).filter(onlyUnique);

    return {
      ...state,
     likes: uniqueItem
    }
  }


  if (action.type === 'delete_favor'){
      const index = action.index
      const newArray = [...state.likes]
      newArray.splice(index, 1);
    return {
      ...state,
      likes: newArray
    }
  }


  return state;
}

