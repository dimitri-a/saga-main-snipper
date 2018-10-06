export default function counter(state = [], action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return state - 1;
    case "RECEIVED_DATA":
      return action.bla;
    case "GET_DATA":
      return state;
    default:
      return state;
  }
}
