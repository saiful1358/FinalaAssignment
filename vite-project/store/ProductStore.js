// import { create } from 'zustand';
// import axios from "axios";


// const ProductStore = create((set) => ({

//     products: [],


//    BrandList:null,
//     BrandListRequest:async () => {
//         let res=await axios.get('/api/v1/ProductBrandList');
//         if(res.data['status']==="success"){
//             set({BrandList:res.data['data']});
//         }
//     },

//     fetchProducts: async () => {
//         try {
//             const res = await axios.get('/api/v1/creatProducts');
//             set({ products: res.data });
//         } catch (error) {
//             console.error("Error fetching products", error);
//         }
//     },

//     addProduct: async (product) => {
//         try {
//             const res = await axios.post('/api/v1/creatProducts', product);
//             set((state) => ({ products: [...state.products, res.data.product] }));
//         } catch (error) {
//             console.error("Error adding product", error);
//         }
//     }



// }))

// export default ProductStore;


// import { create } from "zustand";
// import axios from "axios";

// const useProductStore = create((set) => ({
//     products: [],
//     BrandList: null,

//     // Fetch Brand List
//     BrandListRequest: () => {
//         axios.get("/api/v1/ProductBrandList")
//             .then((res) => {
//                 if (res.data["status"] === "success") {
//                     set({ BrandList: res.data["data"] });
//                 }
//             })
//             .catch((error) => console.error("Error fetching brand list:", error));
//     },

//     // Fetch Products
//     fetchProducts: () => {
//         axios.get("/api/v1/getProducts")
//             .then((res) => set({ products: res.data }))
//             .catch((error) => console.error("Error fetching products:", error));
//     },

//     // Add Product
//     addProduct: (product) => {
//         axios.post("/api/v1/creatProducts", product)
//             .then((res) => {
//                 if (res.data && res.data.product) {
//                     set((state) => ({ products: [...state.products, res.data.product] })); // Use "product" instead of "products"
//                 } else {
//                     console.error("Invalid response format:", res.data);
//                 }
//             })
//             .catch((error) => console.error("Error adding product:", error));
//     }
// }));

// export default useProductStore;


import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
    products: [],
    BrandList: [], // ✅ Initialize as an empty array

    // Fetch Brand List
    BrandListRequest: async () => {
        try {
            const res = await axios.get("/api/v1/ProductBrandList");
            if (res.data && res.data.status === "success" && Array.isArray(res.data.data)) {
                set({ BrandList: res.data.data });
            } else {
                console.error("Invalid brand list response:", res.data);
                set({ BrandList: [] }); // ✅ Ensure state is not null
            }
        } catch (error) {
            console.error("Error fetching brand list:", error);
            set({ BrandList: [] });
        }
    },

    // Fetch Products
    fetchProducts: async () => {
        try {
            const res = await axios.get("/api/v1/getProducts");
            if (res.data && Array.isArray(res.data)) {
                set({ products: res.data });
            } else {
                console.error("Invalid products response:", res.data);
                set({ products: [] });
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            set({ products: [] });
        }
    },

    // Add Product
    addProduct: async (product) => {
        try {
            const res = await axios.post("/api/v1/creatProducts", product);
            if (res.data && res.data.product) {
                set((state) => ({ products: [...state.products, res.data.product] }));
            } else {
                console.error("Invalid response format:", res.data);
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }
}));

export default useProductStore;




