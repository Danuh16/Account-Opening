import { FIRST_PAGE } from "../Actions/actions";

export function firstPage(state={},action){
    switch(action.type)
    {
       case FIRST_PAGE:
        return action.FIRST_PAGE
        default:
        return state

    }



}