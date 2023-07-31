const ZAPATOS = [
    {
        id: 1,
        titulo: "Botin Tanzania Cognac",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220820-WA0011.jpg",
        stock: 10,
    },
    {
        id: 2,
        titulo: "Botin Nairobi Negro",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220720-WA0042.jpg",
        stock: 10,
    },
    {
        id: 3,
        titulo: "Botin Hazell Verde Musgo",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220618-WA0031_0e98bf0c-4067-422c-9e22-46fde20d08ff.jpg",
        stock: 5,
    },
    {
        id: 4,
        titulo: "Botin Cloe",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/files/image.jpg",
        stock: 6,
    },
    {
        id: 6,
        titulo: "Botín Hanzell Arena",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220625-WA0007_1.jpg",
        stock: 7,
    },
    {
        id: 6,
        titulo: "Mocasines Martina Negro",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20221009-WA0041.jpg",
        stock: 7,
    },
    {
        id: 7,
        titulo: "Mocasines Kenia Leopard",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220622-WA0003.jpg",
        stock: 6,
    },
    {
        id: 8,
        titulo: "Mocasines Kenia Vaquita",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220730-WA0023.jpg",
        stock: 9,
    },
    {
        id: 9,
        titulo: "Mocasines Martina Verde",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220423-WA0012.jpg",
        stock: 6,
    },
    {
        id: 10,
        titulo: "Mocasines Martina Caramelo",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220709-WA0003.jpg",
        stock: 6,
    },
    {
        id: 11,
        titulo: "Sandalia Luisa Animal Print Negro Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220920-WA0054_2.jpg",
        stock: 7,
    },
    {
        id: 12,
        titulo: "Sandalia Luisa Animal Print Beige Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20221030-WA0022.jpg",
        stock: 9,
    },
    {
        id: 13,
        titulo: "Zapato Megan Uva Taco",
        descripcion: "Botín de Caña Media de punta cuadrada, material cuero textura croco en su exterior y forrado de badana en su interior, taco texano de 7cm, suela Neolite",
        categoria: "Charol",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220928-WA0020.jpg",
        stock: 5,
    }
];

export const getZapatos = (id) => {

    const _zapatos = id ? ZAPATOS.filter((zapato) => zapato.categoria.toLowerCase() === id) : ZAPATOS;

    return new Promise((res)=>{
        setTimeout(()=>{
            res(_zapatos);
        },2000);
    });
};

export const getZapato = (id) => {

    const zapato = ZAPATOS.filter((zapato) => zapato.id === id)[0];

    return new Promise((res)=>{
        setTimeout(()=>{
            res(zapato);
        },500);
    });
};