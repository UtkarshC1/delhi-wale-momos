/* --- COMPLETE DIGITIZED MENU --- */
const menuItems = [
    // --- MOMOS ---
    { id: 1, name: "Virat Kohli Special", category: "momos", desc: "Spicy, crunchy, and loaded.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=400" },
    { id: 2, name: "Veg Momos", category: "momos", desc: "Classic steamed dumplings.", type: "veg", price: { half: 30, full: 50 }, image: "https://images.unsplash.com/photo-1541696490-8744a5702427?q=80&w=400" },
    { id: 3, name: "Cheese Corn Momos", category: "momos", desc: "Cheesy goodness with corn.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400" },
    { id: 4, name: "Paneer Momos", category: "momos", desc: "Soft paneer filling.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=400" },
    { id: 5, name: "Veg Malai Momos", category: "momos", desc: "Rich white gravy.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400" },
    { id: 6, name: "Paneer Malai Momos", category: "momos", desc: "Paneer in creamy malai.", type: "veg", price: { half: 50, full: 80 }, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400" },
    { id: 7, name: "Manchurian Momos", category: "momos", desc: "Tossed in spicy sauce.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=400" },
    { id: 8, name: "Schezwan Momos", category: "momos", desc: "Fiery red spicy sauce.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1541696490-8744a5702427?q=80&w=400" },
    { id: 9, name: "Smokey Paper Momos", category: "momos", desc: "Unique smokey flavor.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=400" },
    { id: 10, name: "Pan Fried Momos", category: "momos", desc: "Crispy fried delight.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=400" },

    // --- ROLLS ---
    { id: 11, name: "Veg Roll", category: "rolls", desc: "Crispy paratha wrap.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400" },
    { id: 12, name: "Noodle Roll", category: "rolls", desc: "Loaded with chowmein.", type: "veg", price: { half: 40, full: 70 }, image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400" },

    // --- LASSI ---
    { id: 13, name: "Mango Lassi", category: "lassi", desc: "Thick mango yogurt.", type: "veg", price: { single: 50 }, image: "https://images.unsplash.com/photo-1543353071-87d37923b307?q=80&w=400" },
    { id: 14, name: "Sweet Lassi", category: "lassi", desc: "Classic sweet delight.", type: "veg", price: { single: 50 }, image: "https://images.unsplash.com/photo-1571167362088-750d03425316?q=80&w=400" },
    { id: 15, name: "Rose Lassi", category: "lassi", desc: "Refreshing rose flavor.", type: "veg", price: { single: 50 }, image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=400" },
    { id: 16, name: "Chocolate Lassi", category: "lassi", desc: "Chocolate lovers special.", type: "veg", price: { single: 50 }, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=400" },
    { id: 17, name: "Kesar Pista Lassi", category: "lassi", desc: "Premium dry fruits.", type: "veg", price: { single: 60 }, image: "https://images.unsplash.com/photo-1543353071-87d37923b307?q=80&w=400" },

    // --- COMBOS ---
    { id: 18, name: "Chilli Paneer Combo", category: "combo", desc: "With Rice or Noodles.", type: "veg", price: { half: 60, full: 99 }, image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=400" },
    { id: 19, name: "Manchurian Combo", category: "combo", desc: "With Rice or Noodles.", type: "veg", price: { half: 60, full: 99 }, image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=400" }
];

/* --- STATE --- */
let cart = [];
let currentOrderToken = "";

/* --- INIT --- */
const menuGrid = document.getElementById('menu-grid');
renderMenu();

/* --- RENDER MENU --- */
function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';
    const items = category === 'all' ? menuItems : menuItems.filter(i => i.category === category);
    
    items.forEach(item => {
        const startPrice = item.price.half || item.price.single;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-box">
                <img src="${item.image}" alt="${item.name}">
                <div class="type-badge ${item.type === 'veg' ? 'veg' : 'non-veg'}">
                    ${item.type === 'veg' ? 'VEG' : 'NON-VEG'}
                </div>
            </div>
            <div class="card-details">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="price-row">
                    <span class="price">₹${startPrice}</span>
                    <button class="add-btn" onclick="handleAddToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterMenu(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(cat);
}

/* --- ADD TO CART LOGIC --- */
const variantModal = document.getElementById('variant-modal');
const modalOptions = document.getElementById('modal-options');

function handleAddToCart(id) {
    const item = menuItems.find(i => i.id === id);
    
    // Direct Add for Lassi (Single Price)
    if(item.price.single) {
        addToCart(item, 'Standard', item.price.single);
        return;
    }

    // Modal for Variants
    modalOptions.innerHTML = '';
    const btnHalf = document.createElement('button');
    btnHalf.innerHTML = `<span>Half</span> <span>₹${item.price.half}</span>`;
    btnHalf.onclick = () => { addToCart(item, 'Half', item.price.half); closeModal('variant-modal'); };
    
    const btnFull = document.createElement('button');
    btnFull.innerHTML = `<span>Full</span> <span>₹${item.price.full}</span>`;
    btnFull.onclick = () => { addToCart(item, 'Full', item.price.full); closeModal('variant-modal'); };

    modalOptions.appendChild(btnHalf);
    modalOptions.appendChild(btnFull);
    variantModal.style.display = 'flex';
}

function closeModal(modalId) { 
    document.getElementById(modalId).style.display = 'none'; 
}

function addToCart(item, variant, price) {
    const existing = cart.find(i => i.id === item.id && i.variant === variant);
    if(existing) existing.qty++;
    else cart.push({ ...item, variant, price, qty: 1 });
    updateCartUI();
    toggleCart(true);
}

/* --- CART UI --- */
function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-count');
    const totalSpan = document.getElementById('cart-total-price');
    
    container.innerHTML = '';
    let total = 0, count = 0;

    cart.forEach((item, idx) => {
        total += item.price * item.qty;
        count += item.qty;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-variant">${item.variant}</div>
                <div style="color:#FFD700; font-weight:bold;">₹${item.price * item.qty}</div>
            </div>
            <div class="cart-controls">
                <button onclick="updateQty(${idx}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="updateQty(${idx}, 1)">+</button>
                <i class="fas fa-trash" style="color:#ff4757; cursor:pointer; margin-left:5px;" onclick="removeFromCart(${idx})"></i>
            </div>
        `;
        container.appendChild(div);
    });

    if(cart.length === 0) container.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">Cart is empty.</p>';
    
    badge.innerText = count;
    totalSpan.innerText = '₹' + total;
}

function updateQty(idx, change) {
    if(cart[idx].qty + change <= 0) removeFromCart(idx);
    else { cart[idx].qty += change; updateCartUI(); }
}

function removeFromCart(idx) { cart.splice(idx, 1); updateCartUI(); }
function clearCart() { if(confirm("Clear cart?")) { cart = []; updateCartUI(); } }

function toggleCart(forceOpen) {
    const sidebar = document.getElementById('cart-sidebar');
    if(forceOpen === true) sidebar.classList.add('active');
    else if(forceOpen === false) sidebar.classList.remove('active');
    else sidebar.classList.toggle('active');
}

/* --- CHECKOUT & IMAGE PREVIEW --- */
function checkout() {
    if(cart.length === 0) return alert("Cart is empty!");
    
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    currentOrderToken = `#DVM-${randomNum}`;
    
    const total = document.getElementById('cart-total-price').innerText;
    document.getElementById('final-pay-amount').innerText = total;
    document.getElementById('generated-token').innerText = currentOrderToken;
    
    toggleCart(false);
    document.getElementById('payment-modal').style.display = 'flex';
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const preview = document.getElementById('image-preview');
        const uploadText = document.getElementById('upload-text');
        preview.src = reader.result;
        preview.style.display = 'block';
        uploadText.innerText = "Screenshot Selected ✅";
        document.getElementById('upload-box-label').style.borderColor = '#2ed573';
    }
    reader.readAsDataURL(event.target.files[0]);
}

/* --- PERFECT WHATSAPP QUERY LOGIC --- */
function sendOrderToWhatsapp() {
    const phoneNumber = "918802925263"; 
    
    // Check for screenshot visual confirmation
    const fileInput = document.getElementById('payment-screenshot');
    if(fileInput.files.length === 0) {
        if(!confirm("⚠️ You haven't attached a screenshot yet. Send anyway?")) return;
    }

    // Build perfect bill format using new lines (\n)
    let msg = `*🧾 DELHI WALE MOMOS - BILL*\n`;
    msg += `*Order Token:* ${currentOrderToken}\n`;
    msg += `-----------------------------------\n`;
    msg += `*ITEM NAME* | *QTY* | *AMT*\n`;
    msg += `-----------------------------------\n`;
    
    cart.forEach(item => {
        let cleanName = item.name.replace("Momos", "").trim();
        // Truncate if too long to keep alignment decent
        if(cleanName.length > 18) cleanName = cleanName.substring(0, 16) + "..";
        
        msg += `▪️ ${cleanName} (${item.variant})\n`;
        msg += `   x${item.qty}  ----------  ₹${item.price * item.qty}\n`; 
    });
    
    const total = document.getElementById('final-pay-amount').innerText;
    msg += `-----------------------------------\n`;
    msg += `*GRAND TOTAL: ${total}*\n`;
    msg += `-----------------------------------\n`;
    msg += `Payment Status: ✅ Online Verified\n`;
    msg += `(Screenshot Attached Below)\n`;
    msg += `-----------------------------------\n`;
    msg += `📍 *Please prepare my order!*`;

    // Encode for URL
    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    
    alert("Opening WhatsApp...\n\nPlease paste/attach the screenshot you selected in the chat!");
    window.open(url, '_blank');
    
    cart = []; updateCartUI(); closeModal('payment-modal');
    // Reset file input preview
    document.getElementById('image-preview').style.display = 'none';
    document.getElementById('upload-text').innerText = "Click to Upload Proof";
    document.getElementById('payment-screenshot').value = "";
    document.getElementById('upload-box-label').style.borderColor = '#444';
}

function scrollToSection(id) { document.getElementById(id).scrollIntoView({behavior:'smooth'}); }