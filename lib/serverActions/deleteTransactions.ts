"use server"

import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { revalidatePath } from "next/cache"

