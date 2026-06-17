const products = [
    {
        id: "1",
        name: "Mô hình Vecna",
        price: 799,
        description: "Mô hình nhân vật phản diện quyền năng Vecna trong Stranger Things.",
        // Thêm thuộc tính details ở đây
        details: "<b>Kích thước:</b> 18cm<br><b>Chất liệu:</b> Nhựa PVC cao cấp<br><b>Hãng:</b> Funko POP!<br><b>Phụ kiện:</b> Đế đứng đi kèm",
        image: "../assets/images/vecna.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "2",
        name: "Mô hình Demogorgon",
        price: 1300,
        description: "Demogorgon là một thực thể siêu nhiên đáng sợ từ Thế giới Lộn ngược.",
        details: "<b>Kích thước:</b> 22cm<br><b>Chất liệu:</b> Nhựa PVC siêu bền<br><b>Hãng:</b> Bandai<br><b>Đặc điểm:</b> Các khớp tay chân có thể cử động linh hoạt",
        image: "../assets/images/demogorgon.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "3",
        name: "Mô hình Demodog",
        price: 926,
        description: "Demodog là hình thái chưa trưởng thành (dạng chó) của quái vật Demogorgon.",
        details: "<b>Kích thước:</b> 12cm<br><b>Chất liệu:</b> Nhựa Vinyl an toàn<br><b>Hãng:</b> McFarlane Toys<br><b>Trọng lượng:</b> 150g",
        image: "../assets/images/demodog.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "4",
        name: "Mô hình Eleven",
        price: 9425,
        description: "Thiếu niên có siêu năng lực ngoại cảm và thần giao cách cảm tại phòng thí nghiệm Hawkins.",
        details: "<b>Kích thước:</b> 15cm<br><b>Chất liệu:</b> PVC & ABS cao cấp<br><b>Phiên bản:</b> Đặc biệt (Có hiệu ứng chảy máu mũi)<br><b>Hãng:</b> Good Smile Company",
        image: "../assets/images/eleven.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "5",
        name: "Mô hình Will Byers",
        price: 4950,
        description: "Cậu bé nhạy cảm bị kéo vào chiều không gian song song đầy rùng rợn Upside Down.",
        details: "<b>Kích thước:</b> 15cm<br><b>Chất liệu:</b> Nhựa PVC<br><b>Hãng:</b> Funko POP!<br><b>Phụ kiện:</b> Bản đồ Hawkins thu nhỏ",
        image: "../assets/images/will.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "6",
        name: "Mô hình Max",
        price: 1350,
        description: "Max Mayfield - nhân vật mấu chốt trong cuộc chiến chống lại quái vật Vecna.",
        details: "<b>Kích thước:</b> 16cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Hasbro<br><b>Phụ kiện:</b> Máy nghe nhạc cassette và tai nghe mini",
        image: "../assets/images/max.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "7",
        name: "Mô hình Steve",
        price: 921,
        description: "Steve Harrington - từ một nam sinh kiêu ngạo trở thành người hùng dũng cảm bảo vệ các em nhỏ.",
        details: "<b>Kích thước:</b> 17cm<br><b>Chất liệu:</b> PVC bền cứng<br><b>Hãng:</b> McFarlane Toys<br><b>Phụ kiện:</b> Cây gậy đinh thương hiệu",
        image: "../assets/images/steve.jpg",
        link: "trangchitiet.html"
    },
    {
        id: "8",
        name: "Mô hình Dustin",
        price: 4765,
        description: "Dustin Henderson - cậu bé thông minh, hài hước và là bộ não của cả nhóm.",
        details: "<b>Kích thước:</b> 15cm<br><b>Chất liệu:</b> Nhựa Vinyl<br><b>Hãng:</b> Funko POP!<br><b>Đặc điểm:</b> Mô hình đội chiếc mũ thắt lưng quen thuộc",
        image: "../assets/images/dustin.jpg",
        link: "trangchitiet.html"
    }
];

// Hàm tạo item trang chính (Không đổi logic cũ, chỉ đổi innerHTML cho description)
function createItem(obj)
{
        const listProducts = document.getElementById("product-list");
        const item = document.createElement("div");
        item.setAttribute("class","item col-md-3 mb-4"); // Thêm class Bootstrap để chia cột cho đẹp nếu cần
        
        const containerImage = document.createElement("div");
        containerImage.setAttribute("class","image text-center");
        
        const img = document.createElement("img");
        img.setAttribute("src",obj.image);
        img.setAttribute("alt",obj.name);
        img.setAttribute("style","width:100%;max-width:150px ");
        img.setAttribute("class","card-img-top rounded-circle");
        containerImage.appendChild(img);
        
        const containerInfo = document.createElement("div");
        containerInfo.setAttribute("class","info card-body");
        
        const nameProduct = document.createElement("p");
        nameProduct.innerHTML= obj.name;
        nameProduct.setAttribute("class","card-title text-danger fw-bold");
        
        const price = document.createElement("p");
        price.innerHTML = obj.price + "k/mô hình";
        
        const description = document.createElement("p");
        description.innerHTML = obj.description; // Giữ mô tả ngắn ở trang chính
        
        const linkProduct = document.createElement("a");
        linkProduct.innerHTML ="Xem chi tiết sản phẩm";
        linkProduct.setAttribute("class", "btn btn-sm btn-outline-danger");
        linkProduct.setAttribute("href",obj.link+"?id="+obj.id);

        containerInfo.appendChild(nameProduct);
        containerInfo.appendChild(price);
        containerInfo.appendChild(description);
        containerInfo.appendChild(linkProduct);

        item.appendChild(containerImage);
        item.appendChild(containerInfo);
        listProducts.appendChild(item);
}

function loadAllProducts(objArray)
{
    for(let i=0; i<objArray.length; i++) {
        createItem(objArray[i]);
    }
}