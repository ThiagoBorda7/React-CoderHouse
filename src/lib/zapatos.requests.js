import { collection, getDocs, getDoc, doc, where, query, updateDoc, deleteDoc, writeBatch, increment } from "firebase/firestore";
import { db } from "./config";

const zapatosRef = collection(db, "Items");

export const getZapatos = async (categoria) => {

    const q = categoria ? query(zapatosRef, where("categoria", "==", categoria)) : zapatosRef;

    let zapatos = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        zapatos = [...zapatos, { ...doc.data(), id: doc.id }];
    });
    return zapatos;
};

//LEER

export const getZapato = async (id) => {
    const document = doc(db, "Items", id);
    const docSnap = await getDoc(document);

    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

    return null;
};

//ACTUALIZAR

export const updateZapato = async (id, item) => {
    const newZapato = await updateDoc(doc(db, "Items", id), item);
    return;
};

//ELIMINAR

export const deleteZapato = async (id) => {
    return await deleteDoc((db, "Items", id));
}

//LOTE

export const updateLoteZapatos = async (Items) => {
    const batch = writeBatch(db);

    Items.forEach(({id, cant})=>{
        batch.update(doc(db, "Items", id), {
            stock: increment(-cant)
        })
    })

    batch.commit();
}