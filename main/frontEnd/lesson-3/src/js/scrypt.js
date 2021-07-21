import products from "./products";
import Vue from "vue/dist/vue.esm.browser";

const pathImageFolder = './image/';
const currensySymbol = 'грн.';

const catalogVm = new Vue({
    el: '#catalog',
    data: {
        products: products,
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
        outOfStockMessage: 'Нет в наличии'
    },
    methods: {
        // getImage(imageName) {
        //     return this.pathImageFolder + imageName;
        // }
        addToCart(product) {
            console.log(product);

            cart.cartList.push({
                id: product.id,
                sku: product.sku,
                name: product.name,
                img: product.img,
                price: product.price,
                specialPrice: product.specialPrice,
                qty: 1
            });
        }
    },
    computed: {

    },
    watch: {},
});

const cart = new Vue({
    el: '#cart',
    data: {
        cartList: [],
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
    },
    methods: {
        setQtyProduct(product, isIncrement) {
            if (isIncrement) {
                product.qty++;
            } else {
                if (product.qty < 2) {
                    this.removeProduct(this.findProductIndex(product.id));
                    return;
                }
                product.qty--;
            }
        },
        findProductIndex(productId) {
            return this.cartList.map(product => product.id).indexOf(productId);
        },
        removeProduct(productIndex) {
            if (productIndex === -1) return;

            this.cartList.splice(productIndex, 1);
        }
    }
});
