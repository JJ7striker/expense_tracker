"use server"
import { revalidatePath } from "next/cache";
import { db } from "../firebase/firebase"
import { collection, addDoc } from "firebase/firestore"
import { redirect } from "next/navigation";

export const addNewTransaction = async (formData: FormData) => {
    const amount = formData.get("amount");
    const description = formData.get("description");
    const categories = formData.get("categories");
    const date = formData.get("date");
    const notes = formData.get("notes");
    const transaction = formData.get("transaction");

    const info = {transaction, amount, description, categories, date, notes};

    try {
        const collectionRef = await addDoc(collection(db, "transactions"), info);
        console.log(collectionRef)
        if (collectionRef) {
            revalidatePath("/transactions");
            revalidatePath("/dashboard")
        }
    } catch(err) {
        console.log("Error adding document ", err)
    }
    redirect("/dashboard")
}
