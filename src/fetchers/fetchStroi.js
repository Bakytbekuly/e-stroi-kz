import axios from "axios";

export function fetchCategories() {
    return axios.get(`http://e-stroi.kz:8082/catalog/client/category/all?lang=ru`).then(res => res.data)
}

export function fetchProduct(id) {

    return axios.get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=${id}`).then(res => res.data)
}