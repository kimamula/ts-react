export default class Reducers<State> {
    private reducers: {[action: string]: (payload: any, state: State) => State} = {};
    for(action: string): ReducerAccesor<any, State, any> {
        return {
            register: (reducer: (payload: any, state: State) => State) => {
                this.reducers[action] = reducer;
                return this;
            },
            applyPayload: (payload: any) =>
                this.reducers[action] ?
                    this.reducers[action].bind(null, payload) : (state: State) => state
        };
    }
}

export interface ReducerAccesor<Payload, State, Repository> {
    register(reducer: (payload: Payload, state: State) => State): Repository;
    applyPayload(payload: Payload): (state: State) => State;
}
