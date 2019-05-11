import authReducer from '../../reducers/auth';

test('Should add uid to state', () => {
    const uid = "adsadas9898892312jjdasd23i4123k12io3";
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({uid: uid});
});

test('Should clear the state', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({ uid: 'anything'}, action);
    expect(state).toEqual({});
});