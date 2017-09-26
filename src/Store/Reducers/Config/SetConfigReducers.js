export function setConfigReducer(configState, action) {
    return Object.assign({}, configState, {
        ...configState,
        ...action.config
    });
}