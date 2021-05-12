import { createStore } from 'vuex'

export interface State {
    count: number
}
// Create a new store instance.
const store = createStore<State>({
    state: {
        count: 0
    }
})
export default store