import {Product} from "../entity/product";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let listProduct = await Product.find();
        return listProduct;
    }

    add = async (product) => {
        await Product.create(product);
    }
    findById = async (id) => {
        let listProduct: any[] = await Product.find();
        for (let i = 0; listProduct.length > i; i++) {
            if (listProduct[i]._id == id) {
                return listProduct[id];
            }
        }
    }
    update = async (id, product) => {
        await Product.updateOne({_id:id},{$set:{name:product.name}})
    }
    delete = async (id) => {
        return Product.deleteOne({_id : id})
    }

}

export default new ProductService();