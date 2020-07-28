import Productoverviewscreen from "../screens/shop/ProductOverViewScreen";

class Product {
    constructor(id, ownerid, title, imgurl,description,price){
        this.id = id;
        this.ownerid = ownerid;
        this.title = title;
        this.imgurl = imgurl;
        this.description = description;
        this.price = price;

    }
}

export default Product;