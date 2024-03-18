const productlist = [
  {
    id: 1,
    image: "/product/blue-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "500",
  },
  {
    id: 2,
    image: "/product/white-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "200",
  },
  {
    id: 3,
    image: "/product/white-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "400",
  },
  {
    id: 4,
    image: "/product/blue-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "200",
  },
  {
    id: 5,
    image: "/product/white-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "1000",
  },
  {
    id: 6,
    image: "/product/blue-shirt.jpg",
    name: "เสื้อนักศึกษาผู้ชาย",
    size: "s,m,l,xl,xxl",
    price: "200",
  },
];

export const getProducts = async () => {
  return productlist;
};

export const getProduct = async (id) => {
  return productlist.find((productlist) => productlist.id === id);
};
