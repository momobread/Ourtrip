interface ProductType {
  id: number;
  product_name: string;
  product_content: string;
  product_price: number;
  product_img: string;
  product_category: number;
  product_liked: number;
  product_created_at: Date;
  product_num: string;
  product_lng: Float32Array;
  product_lat: Float32Array;
}

interface PreImgProductType {
  title: string;
  url: string;
}

export type { ProductType, PreImgProductType };
