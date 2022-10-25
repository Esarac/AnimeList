import { createUser, signInUser, addData, getData, updateData } from "../config/firebase";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { User, UserWithId } from "../models/login";
import store from "../config/redux/store";
import { userActions } from "../config/redux/userSlice";
import { Anime } from "../models/animes";

export const signIn = async(user: User) => {
    const userCredential = await createUser(user.email, user.password)

    const firestoreUser: UserWithId = {
        uid: userCredential.user.uid,
        authProvider: "local",
        ...user
    }

    await addData("users", firestoreUser.uid, firestoreUser)

    await updateStoreUser(userCredential.user.uid)
}

export const logIn = async(email: string, password: string) =>{
    const userCredential = await signInUser(email, password);
    
    await updateStoreUser(userCredential.user.uid)
}

export const addFavorite = async(anime: Anime) => {
    const actualUser = store.getState().actual
    if(actualUser){
        await updateData("users", actualUser.uid, {favorites:arrayUnion(anime)})
        await updateStoreUser(actualUser.uid)
    }
}

export const deleteFavorite = async(anime: Anime) => {
    const actualUser = store.getState().actual
    if(actualUser){
        await updateData("users", actualUser.uid, {favorites:arrayRemove(anime)})
        await updateStoreUser(actualUser.uid)
    }
}

async function updateStoreUser(uid: string) {
    const user: UserWithId = (await getData("users", uid)).data() as UserWithId;
    store.dispatch(userActions.logIn(user))
}