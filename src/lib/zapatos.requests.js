const ZAPATOS = [
    {
        titulo: "Botin Tanzania Cognac",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "botines",
        precio: 40000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220820-WA0011.jpg",
        stock: 10,
    },
    {
        titulo: "Botin Nairobi Negro",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "botines",
        precio: 45000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220720-WA0042.jpg",
        stock: 8,
    },
    {
        titulo: "Botin Hazell Verde Musgo",
        descripcion: "Botín de caña Media con cordones Material Gamuzón forrado en su interior de badana y suela de cuero con huella antideslizante. Altura de taco 5cm.",
        categoria: "botines",
        precio: 50000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220618-WA0031_0e98bf0c-4067-422c-9e22-46fde20d08ff.jpg",
        stock: 5,
    },
    {
        titulo: "Botin Cloe",
        descripcion: "Botines elásticados en cuero croco caimán, taco de 7cm",
        categoria: "botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/files/image.jpg",
        stock: 6,
    },
    {
        titulo: "Botín Hanzell Arena",
        descripcion: "Botín de caña Media con cordones Material Gamuzón forrado en su interior de badana y suela de cuero con huella antideslizante. Altura de taco 5cm.",
        categoria: "botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220625-WA0007_1.jpg",
        stock: 7,
    },
    {
        titulo: "Mocasines Martina Negro",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20221009-WA0041.jpg",
        stock: 7,
    },
    {
        titulo: "Mocasines Kenia Leopard",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220622-WA0003.jpg",
        stock: 6,
    },
    {
        titulo: "Mocasines Kenia Vaquita",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220730-WA0023.jpg",
        stock: 9,
    },
    {
        titulo: "Mocasines Martina Verde",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220423-WA0012.jpg",
        stock: 6,
    },
    {

        titulo: "Mocasines Martina Caramelo",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220709-WA0003.jpg",
        stock: 6,
    },
    {
        titulo: "Sandalia Luisa Animal Print Negro Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220920-WA0054_2.jpg",
        stock: 7,
    },
    {
        titulo: "Sandalia Luisa Animal Print Beige Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20221030-WA0022.jpg",
        stock: 9,
    },
    {
        titulo: "Zapato Megan Uva Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220928-WA0020.jpg",
        stock: 5,
    }
];

import { collection, getDocs, getDoc, addDoc, doc, where, query} from "firebase/firestore";
import { db } from "./config";

const zapatosRef = collection(db, "Items");

export const getZapatos = async (categoria) => {

    const q = categoria ? query(zapatosRef, where('categoria', '==', categoria)) : zapatosRef;
    let zapatos = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=> {
        zapatos = [...zapatos, { ...doc.data(), id: doc.id}];
    });
    return zapatos;
};

export const getZapato = async (id) => {
    const document = doc(db, 'Items', id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return { id: docSnap.id, ...docSnap.data()};

    return null;
};

export const cargarData = async () => {
    ZAPATOS.forEach(async (zapato)=> {
        await addDoc(zapatosRef, zapato)
    });
}