export default class Store<State> {
    observable: Rx.Observable<State>;
    constructor(
        observable: Rx.Observable<(state: State) => State>,
        initialState: State
    ) {
        this.observable = observable.scan(
            (state, partiallyAppliedReducer) => partiallyAppliedReducer(state),
            initialState
        );
    }
}
