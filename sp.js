const banners = [
    {
        link: "https://s.shopee.vn/9A8HL6sj8C",
        img: "https://photo-link-talk.zadn.vn/photolinkv2/720/aHR0cHM6Ly9kb3duLXZuLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvcHJvbW8tZGltLTAxMDA3YWVhMTAzOTYyM2ZlYjcyNjVmYTYzZjJiNTU3NTkyNA==",
        name: "Loa bluetooth Choice JS-0004 không dây di động",
    },
    {
        link: "https://s.shopee.vn/4pzIGYFAoK",
        img: "https://photo-link-talk.zadn.vn/photolinkv2/720/aHR0cHM6Ly9kb3duLXZuLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvcHJvbW8tZGltLTAxMDBjZWNiMmFjODNhNDY1NDdiNDdhOTYxZWRhODdjYzkyNg==",
        name: "Loa vi tính Bluetooth Bubzone thùng gỗ BASS cực đã-loa máy tính cao cấp cho laptop, máy tính, tivi, điện thoại",
    },
    {
        link: "https://s.shopee.vn/AA0odFpdpI",
        img: "https://photo-link-talk.zadn.vn/photolinkv2/720/aHR0cHM6Ly9kb3duLXZuLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvdm4tMTExMzQyMDctN3I5OG8tbHluYm51cjlidTc1NzA=",
        name: "Loa Bluetooth Z5 - Loa êm màu đèn led tặng kèm cáp sạc sapin ",
    },
];

// Random một phần tử từ danh sách
const randomBanner = banners[Math.floor(Math.random() * banners.length)];

// Render nội dung vào trang
const contentDiv = document.getElementById("random-content");
contentDiv.innerHTML = `
    <div class="shopee-banner">
        <a href="${randomBanner.link}" target="_blank">
            <img src="${randomBanner.img}" alt="${randomBanner.name}">
        </a>
        <h2>${randomBanner.name}</h2>
       <div class="shopee-banner2">
          <a href="${randomBanner.link}" target="_blank">Mua ngay</a>
       </div>
    </div>
`;
