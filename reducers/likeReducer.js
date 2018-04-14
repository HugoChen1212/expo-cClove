
const initialState = {
  likes: [],
  detail: {}
}

export const petReducer = (state = initialState, action) => {
  if (action.type == 'like_pet'){
    return {
     likes: state.likes
    }
  }
  if (action.type == 'detail_pet'){
    return {
     detail: state.detail
    }
  }

  return state;
}