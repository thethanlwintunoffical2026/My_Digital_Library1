const books = [
    {
        title: "စာအုပ်နာမည် ၁",
        author: "စာရေးသူ နာမည်",
        category: "fiction",
        cover: "images/book1.jpg",
        link: "#",
        desc: "ဤစာအုပ်အကြောင်း တိုတိုရှင်းရှင်း ဖော်ပြချက်..."
    },
    // ဒီမှာ မင်းစာအုပ်တွေ ထပ်ထည့်ပါ (category: fiction / nonfiction / other)
    // ဥပမာ နောက်ထပ် object တစ်ခု ထည့်ရင် comma မမေ့နဲ့
];

const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

function renderBooks(filteredBooks) {
    bookGrid.innerHTML = '';
    filteredBooks.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        `;
        card.addEventListener('click', () => showModal(book));
        bookGrid.appendChild(card);
    });
}

function showModal(book) {
    modalBody.innerHTML = `
        <img src="${book.cover}" style="width:100%; border-radius:12px; margin-bottom:20px;">
        <h2>${book.title}</h2>
        <p style="opacity:0.9; font-size:1.1rem;">${book.author}</p>
        <p style="margin-top:15px;">${book.desc || 'ဤစာအုပ်ကို ဖတ်ရှုရန် အောက်ပါ လင့်ခ်ကို နှိပ်ပါ။'}</p>
        <a href="${book.link}" target="_blank" style="display:inline-block; margin-top:20px; padding:12px 30px; background:#ffd700; color:#0a0a1f; border-radius:50px; text-decoration:none; font-weight:bold;">📥 ဖတ်ရန် / ဒေါင်းလုဒ်</a>
    `;
    modal.style.display = 'block';
}

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Filter & Search
let currentFilter = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        applyFilter();
    });
});

function applyFilter() {
    let filtered = books;
    if (currentFilter !== 'all') {
        filtered = books.filter(b => b.category === currentFilter);
    }
    const term = searchInput.value.toLowerCase();
    if (term) {
        filtered = filtered.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term)
        );
    }
    renderBooks(filtered);
}

searchInput.addEventListener('input', applyFilter);

// Initial render
renderBooks(books);
