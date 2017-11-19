import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../Actions/Types';

const InitialState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return InitialState;
        case EMPLOYEE_SAVE_SUCCESS:
            return InitialState;
        default:
            return state;

    }
};
