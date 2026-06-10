/*
const product={
    name:"Mô hình ",
    price:250,
    description:"Mô hình trong phim Stranger Things.Vecna , do Jamie Campbell Bower thủ vai , là nhân vật chính và phản diện trong mùa thứ tư và thứ năm của Stranger Things . Anh ta cũng xuất hiện trong Stranger Things VR , và là nhân vật chính diện trong Stranger Things: The First Shadow .",
    image:"../assets/images/vecna.jpg",
    link:"https://shopee.vn/M%C3%B4-h%C3%ACnh-Funko-POP!-Television-Stranger-Things-Season-5-Vecna-1806-i.194849464.47154787441?extraParams=%7B%22display_model_id%22%3A282338865845%2C%22model_selection_logic%22%3A3%7D",

};
*/
const products=[{
    id:"1",
    name:"Mô hình Vecna ",
    price:799,
    description:"Mô hình trong phim Stranger Things.Vecna , do Jamie Campbell Bower thủ vai , là nhân vật chính và phản diện trong mùa thứ tư và thứ năm của Stranger Things . Anh ta cũng xuất hiện trong Stranger Things VR , và là nhân vật chính diện trong Stranger Things: The First Shadow .",
    image:"../assets/images/vecna.jpg",
    link:"trangchitiet.html",
                },
    {
        id:"2",
    name:"Mô hình Demogorgon ",
    price:1300,
    description:" Demogorgon là một thực thể siêu nhiên đáng sợ được biết đến rộng rãi qua loạt phim truyền hình ăn khách Stranger Things của Netflix. ",
    image:"../assets/images/demogorgon.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"3",
    name:"Mô hình Demodog ",
    price:926,
    description:" Demodog là một thuật ngữ xuất hiện trong loạt phim truyền hình nổi tiếng Stranger Things của Netflix. Đây là cách gọi ghép giữa Demogorgon và Dog (chó) để chỉ hình thái chưa trưởng thành của quái vật Demogorgon",
    image:"../assets/images/demodog.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"4",
    name:"Mô hình Eleven ",
    price:9425,
    description:"Trong vũ trụ của phim, cô là một thiếu niên có siêu năng lực ngoại cảm (telekinesis) và thần giao cách cảm, được nuôi dưỡng và thí nghiệm tại Phòng thí nghiệm Quốc gia Hawkins.",
    image:"../assets/images/eleven.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"5",
    name:"Mô hình Will Byers ",
    price:4950,
    description:" Cậu là con trai của Joyce Byers, em trai của Jonathan Byers. Will là một cậu bé nhút nhát, nhạy cảm và rất đam mê hội họa cũng như trò chơi Dungeons & Dragons.Cậu bị kéo vào một chiều không gian song song đầy rùng rợn có tên là Thế giới Lộn ngược (Upside Down)",
    image:"../assets/images/will.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"6",
    name:"Mô hình Max ",
    price:1350,
    description:"Max Mayfield là một trong những nhân vật chính được yêu thích nhất trong loạt phim Stranger Things của Netflix, do nữ diễn viên Sadie Sink thủ vai và đóng vai trò mấu chốt trong cuộc chiến chống lại quái vật Vecna ở những phần sau.",
    image:"../assets/images/max.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"7",
    name:"Mô hình Steve",
    price:921,
    description:"Từ trai hư đến người hùng: Bắt đầu từ mùa 1, Steve là một nam sinh trung học nổi tiếng, kiêu ngạo và có phần nông nổi. Tuy nhiên, qua các mùa phim, anh đã có màn lột xác ngoạn mục, trở thành một người dũng cảm, tốt bụng và đáng tin cậy",
    image:"../assets/images/steve.jpg",
    link:"trangchitiet.html",
                },
                {
    id:"8",
    name:"Mô hình Dustin ",
    price:4765,
    description:"Dustin Henderson là một nhân vật chính hư cấu trong loạt phim truyền hình khoa học viễn tưởng - kinh dị đình đám Stranger Things (Cậu bé mất tích) của Netflix, do nam diễn viên Gaten Matarazzo thủ vai.",
    image:"../assets/images/dustin.jpg",
    link:"trangchitiet.html",
                },
    
];
function createItem(obj)
{
//Xac dinh khung chua product-list
        const listProducts = document.getElementById("product-list");
        //tao 1 container co class ="item"
        const item = document.createElement("div");
        item.setAttribute("class","item");
        //tao 2 khung chua hinh anh va thong tin
        // tao 1 container chua hinh anh co class="image"
        const containerImage = document.createElement("div");
        containerImage.setAttribute("class","image");
        //tao anh
        const img = document.createElement("img");
        img.setAttribute("src",obj.image);
        img.setAttribute("alt",obj.name);
        img.setAttribute("style","width:100%;max-width:150px ");
         img.setAttribute("class","card-img-top rounded-circle");
        //dua vao khung chu anh
        containerImage.appendChild(img);
        // tao 1 container chua thong tin san pham co class="info"
        const containerInfo = document.createElement("div");
        containerInfo.setAttribute("class","info card-body");
        //tao <p> chua ten san pham
            const nameProduct = document.createElement("p");
            nameProduct.innerHTML= obj.name;
            nameProduct.setAttribute("class","card-title text-danger")
        //tao <p> chua gia san pham
            const price = document.createElement("p");
            price.innerHTML = obj.price + "k/mô hình";
            //tao <p> chua mo ta san pham 
                const description = document.createElement("p");
                description.innerHTML=obj.description;
            //gan <a> chua lien ket 
                const linkProduct = document.createElement("a");
                linkProduct.innerHTML ="Xem chi tiết sản phẩm";
                linkProduct.setAttribute("href",obj.link+"?id="+obj.id);

            //gan 4 con vao khung chua info
            containerInfo.appendChild(nameProduct);
            containerInfo.appendChild(price);
            containerInfo.appendChild(description);
            containerInfo.appendChild(linkProduct);

            //Thêm khung chứa image vào item
            item.appendChild(containerImage);
            item.appendChild(containerInfo);

            //Thêm item vào list product
            listProducts.appendChild(item);
}
function loadAllProducts(objArray)
{
    let i = 0;
    for(i=0;i<objArray.length;i++)
    {
createItem(objArray[i]);
    }
}
