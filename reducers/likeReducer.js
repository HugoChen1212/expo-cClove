
const initialState = {
  likes: [],
  detail: {},
  favorDetail: {},
  like: []
}

export const petReducer = (state = initialState, action) => {
  if (action.type === 'like_pet'){
    return {
      ...state,
     likes: state.likes.concat(action.pet)
    }
  }
  if (action.type === 'detail_pet'){
    return {
      ...state,
     detail: state.detail
    }
}
  if (action.type === 'favor_detail'){
    return {
      ...state,
     favorDetail: state.favorDetail
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