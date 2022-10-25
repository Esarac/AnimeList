import { createUser, signInUser, addData, getData } from "../config/firebase";
import { User, UserWithId } from "../models/login";

export const signIn = async(user: User) => {
    const userCredential = await createUser(user.email, user.password)

    const firestoreUser: UserWithId = {
        uid: userCredential.user.uid,
        authProvider: "local",
        ...user
    }

    await addData("users", firestoreUser.uid, firestoreUser)

    const createdUser: UserWithId = await getUser(userCredential.user.uid) as UserWithId

    return createdUser;
}

export const logIn = async(email: string, password: string) =>{
    const userCredential = await signInUser(email, password);
    
    const user = await getUser(userCredential.user.uid) as UserWithId;

    console.log(user)
    return user;
}

async function getUser(uid: string): Promise<UserWithId | null> {
    const user: UserWithId = (await getData("users", uid)).data() as UserWithId;

    return user;
}