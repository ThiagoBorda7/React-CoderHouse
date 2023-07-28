const ZAPATOS = [
    {
        id: 1,
        titulo: "Botin Tanzania Cognac",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220820-WA0011.jpg",
        stock: 10,
    },
    {
        id: 2,
        titulo: "Botin Nairobi Negro",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220720-WA0042.jpg",
        stock: 10,
    },
    {
        id: 3,
        titulo: "Botin Hazell Verde Musgo",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220618-WA0031_0e98bf0c-4067-422c-9e22-46fde20d08ff.jpg",
        stock: 5,
    },
    {
        id: 4,
        titulo: "Botin Cloe",
        categoria: "Botines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/files/image.jpg",
        stock: 6,
    },
    {
        id: 5,
        titulo: "Mocasines Martina Negro",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20221009-WA0041.jpg",
        stock: 7,
    },
    {
        id: 6,
        titulo: "Mocasines Kenia Leopard",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220622-WA0003.jpg",
        stock: 6,
    },
    {
        id: 7,
        titulo: "Mocasines Kenia Vaquita",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220730-WA0023.jpg",
        stock: 9,
    },
    {
        id: 8,
        titulo: "Mocasines Martina Caramelo",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220709-WA0003.jpg",
        stock: 6,
    },
    {
        id: 9,
        titulo: "Mocasines Martina Verde",
        categoria: "Mocasines",
        precio: 1000,
        imagen: "https://flaviashoemaker.com/cdn/shop/products/IMG-20220423-WA0012.jpg",
        stock: 6,
    },
];

export const getZapatos = () => {

    return new Promise((res)=>{
        setTimeout(()=>{
            res(ZAPATOS);
        },2000);
    });
};