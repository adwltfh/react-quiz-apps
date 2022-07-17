import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_SCORE,
    CHANGE_TYPE,
} from "./actionTypes";

const initialState = {
    quiz_categories: "",
    quiz_difficulties: "",
    quiz_types: "",
    amount_numb_of_quest: 20,
    result_score: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
        return {
            ...state,
            quiz_categories: action.payload,
        };
        case CHANGE_DIFFICULTY:
        return {
            ...state,
            quiz_difficulties: action.payload,
        };
        case CHANGE_TYPE:
        return {
            ...state,
            quiz_types: action.payload,
        };
        case CHANGE_AMOUNT:
        return {
            ...state,
            amount_numb_of_quest: action.payload,
        };
        case CHANGE_SCORE:
        return {
            ...state,
            result_score: action.payload,
        };
        default:
        return state;
    }
};

export default reducer;