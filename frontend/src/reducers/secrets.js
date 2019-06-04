const initialState = [];

export default function secrets(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_SECRETS':
    return [...state, action.secrets];

    default:
      return state;
  }
}
