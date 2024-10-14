// Product data
const products = [

    {
        id: 1,
        name: "Bearing Cages",
        description: "Standard bearing cages.",
        price: 250,
        url: "https://m.indiamart.com/proddetail/2850317401733.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=218"
    },
    {
        id: 2,
        name: "Aluminium Bearing Cage",
        description: "Bearing cage made of aluminium.",
        price: 450,
        url: "https://m.indiamart.com/proddetail/2850434214348.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=219"
    },
    {
        id: 3,
        name: "Nar E Rickshaw Hydraulic Loader",
        description: "Hydraulic loader for E-Rickshaw.",
        price: 140000,
        url: "https://m.indiamart.com/proddetail/20816995797.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=222"
    },
    {
        id: 4,
        name: "E Rickshaw Loader",
        description: "Standard E-Rickshaw loader.",
        price: 95000,
        url: "https://m.indiamart.com/proddetail/2853974016912.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=223"
    },
    {
        id: 5,
        name: "4 Loop Jumbo Bag",
        description: "Large capacity jumbo bag with 4 loops.",
        price: 270,
        url: "https://m.indiamart.com/proddetail/1192924755.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=226"
    },
    {
        id: 6,
        name: "Electronic Spices Battery Holder",
        description: "Battery holder for various types including AA, AAA, Lithium, 2025, 2032, 1.5V, 3.7V, 18650, 32650.",
        price: 5,
        url: "https://m.indiamart.com/proddetail/23316641462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=230"
    },
    {
        id: 7,
        name: "Dust Control Acrylic Dry Mop",
        description: "Acrylic dry mop for dust control.",
        price: 198,
        url: "https://m.indiamart.com/proddetail/22407770733.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=234"
    },
    {
        id: 8,
        name: "RING BLOWER 1HP",
        description: "1 horsepower ring blower.",
        price: 13500,
        url: "https://m.indiamart.com/proddetail/22586338012.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=238"
    },
    {
        id: 9,
        name: "INDUSTRIAL VACCUME CLEANER BT 80 WDVC",
        description: "Industrial vacuum cleaner, model BT 80 WDVC.",
        price: 19500,
        url: "https://m.indiamart.com/proddetail/26522161097.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=242"
    },
    {
        id: 10,
        name: "Hijama ELECTRONIC PUMP",
        description: "Electronic pump for Hijama therapy.",
        price: 1300,
        url: "https://m.indiamart.com/proddetail/24218826512.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=246"
    },
    

{
    id: 11,
    name: "High Quality PU Leather Fancy Keychain",
    description: "Fancy keychain made of high-quality PU leather.",
    price: 92,
    url: "https://m.indiamart.com/proddetail/14059913412.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=250"
},
{
    id: 12,
    name: "Promotional Leather Keychains",
    description: "Leather keychains suitable for promotional purposes.",
    price: 7,
    url: "https://m.indiamart.com/proddetail/2854576520155.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=251"
},
{
    id: 13,
    name: "Round Shape Card USB Pendrive Shell CS003",
    description: "USB pendrive shell in a round card shape, model CS003.",
    price: 165,
    url: "https://m.indiamart.com/proddetail/25694207412.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=254"
},
{
    id: 14,
    name: "Wooden Card Pendrive",
    description: "USB pendrive in a wooden card design.",
    price: 185,
    url: "https://m.indiamart.com/proddetail/23579517530.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=255"
},
{
    id: 15,
    name: "Linear Bearing Cage",
    description: "Bearing cage for linear motion applications.",
    price: 0,
    url: "https://m.indiamart.com/proddetail/2848958509797.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=220"
},
{
    id: 16,
    name: "Electric Cargo E Rickshaw Loader",
    description: "Electric loader for cargo E-Rickshaw.",
    price: 190000,
    url: "https://m.indiamart.com/proddetail/2853612358391.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=224"
},
{
    id: 17,
    name: "Plastic Jumbo Bag",
    description: "Large capacity jumbo bag made of plastic.",
    price: 261,
    url: "https://m.indiamart.com/proddetail/21831889433.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=227"
},
{
    id: 18,
    name: "Jumbo Bags 1000 Kg",
    description: "Jumbo bags with 1000 kg capacity.",
    price: 200,
    url: "https://m.indiamart.com/proddetail/2851767715088.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=228"
},
{
    id: 19,
    name: "Coin Cell Battery Holder",
    description: "Holder for coin cell batteries.",
    price: 3,
    url: "https://m.indiamart.com/proddetail/2852886130455.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=231"
},
{
    id: 20,
    name: "18650 Cell Holder For Lithium Ion Battery",
    description: "Holder for 18650 lithium-ion batteries, also serves as a spacer.",
    price: 3,
    url: "https://m.indiamart.com/proddetail/2850650906033.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=232"
},
{
    id: 21,
    name: "Woolen Dry Mop Set Bleach",
    description: "Woolen dry mop set with bleach.",
    price: 165,
    url: "https://m.indiamart.com/proddetail/2853452813630.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=235"
    },
    {
    id: 22,
    name: "Dry Mop Bracket -RK",
    description: "Bracket for dry mop, model RK.",
    price: 191,
    url: "https://m.indiamart.com/proddetail/22503739462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=236"
    },
    {
    id: 23,
    name: "Double Stage Ring Blower",
    description: "Ring blower with double stage operation.",
    price: 15000,
    url: "https://m.indiamart.com/proddetail/2850109062755.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=239"
    },
    {
    id: 24,
    name: "3hp Ring Blower",
    description: "Ring blower with 3 horsepower.",
    price: 41500,
    url: "https://m.indiamart.com/proddetail/26488791855.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=240"
    },
    {
    id: 25,
    name: "Vacuum Cleaner",
    description: "Standard vacuum cleaner.",
    price: 17499,
    url: "https://m.indiamart.com/proddetail/2852647071662.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=243"
    },
    {
    id: 26,
    name: "1200 W Vacuum Cleaner",
    description: "Vacuum cleaner with 1200 watts power.",
    price: 14501,
    url: "https://m.indiamart.com/proddetail/23166016991.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=244"
    },
    {
    id: 27,
    name: "Cupping Hijama Pen",
    description: "Pen device for Hijama cupping therapy.",
    price: 499,
    url: "https://m.indiamart.com/proddetail/24798437462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=247"
    },
    {
    id: 28,
    name: "Hijama Therapy Cupping Set",
    description: "Set for Hijama cupping therapy.",
    price: 8,
    url: "https://m.indiamart.com/proddetail/2851356562691.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=248"
    },
    {
    id: 29,
    name: "Leather key chain",
    description: "Simple leather keychain.",
    price: 6,
    url: "https://m.indiamart.com/proddetail/24775933855.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=252"
    },
    {
    id: 30,
    name: "Mini Card Plastic Body Pen Drive",
    description: "USB pen drive in a mini card plastic body.",
    price: 160,
    url: "https://m.indiamart.com/proddetail/2850565729255.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=256"
    },
    {
        id: 31,
        name: "12 Volt - 3 Amp. Bis Certified Adapter",
        description: "BIS certified adapter with 12V and 3A output.",
        price: 149,
        url: "https://m.indiamart.com/proddetail/2850332096573.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=258"
        },
        {
        id: 32,
        name: "12v5a Power Supply Adapter",
        description: "Power supply adapter with 12V and 5A output.",
        price: 290,
        url: "https://m.indiamart.com/proddetail/23022510073.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=259"
        },
        {
        id: 33,
        name: "SMPS AC DC Adapter",
        description: "Switched-Mode Power Supply (SMPS) AC to DC adapter.",
        price: 60,
        url: "https://m.indiamart.com/proddetail/25753551791.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=260"
        },
        {
        id: 34,
        name: "Metal Ball Pen",
        description: "Standard metal ball pen.",
        price: 45,
        url: "https://m.indiamart.com/proddetail/2849486862748.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=266"
        },
        {
        id: 35,
        name: "Metal Ball Pen",
        description: "Premium metal ball pen.",
        price: 80,
        url: "https://m.indiamart.com/proddetail/25958066648.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=267"
        },
        {
        id: 36,
        name: "Kellys Fashion Metal Pen",
        description: "Fashionable metal pen by Kellys.",
        price: 50,
        url: "https://m.indiamart.com/proddetail/26505263073.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=268"
        },
        {
        id: 37,
        name: "Oxford Blue Synthetic Enamel Paint",
        description: "Synthetic enamel paint in Oxford Blue color.",
        price: 145,
        url: "https://m.indiamart.com/proddetail/26170590288.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=270"
        },
        {
        id: 38,
        name: "Synthetic Paints",
        description: "General synthetic paints.",
        price: 100,
        url: "https://m.indiamart.com/proddetail/2849513058348.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=271"
        },
        {
        id: 39,
        name: "Surfotect Synthetic Topcoat",
        description: "Synthetic topcoat paint by Surfotect.",
        price: 210,
        url: "https://m.indiamart.com/proddetail/2851064743355.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=272"
        }


];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <a href="${product.url}" class="more-details" target="_blank">More Details</a>
        `;
        productList.appendChild(productCard);
    });
}

// Display products when the page loads
window.addEventListener('DOMContentLoaded', displayProducts);