import { UserType } from "../action-types/index"

interface FetchUsers {
    type: UserType.FETCH_USERS,
    payload: {}[] | any
}

export type UserAction = FetchUsers ;