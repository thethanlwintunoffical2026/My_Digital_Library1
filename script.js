* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #fafafa;
    color: #1a1a1a;
    line-height: 1.6;
    padding: 40px 20px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 50px;
}

h1 {
    font-size: 2.8rem;
    font-weight: 400;
    letter-spacing: -1px;
}

header p {
    font-size: 1.1rem;
    color: #666;
    margin-top: 8px;
}

.search-bar {
    max-width: 600px;
    margin: 0 auto 40px;
}

#search {
    width: 100%;
    padding: 14px 20px;
    font-size: 1.1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
}

#search:focus {
    border-color: #333;
}

.filters {
    text-align: center;
    margin-bottom: 40px;
}

.filter-btn {
    padding: 8px 20px;
    margin: 0 6px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95rem;
}

.filter-btn.active {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
}

.book-card {
    background: white;
    border: 1px solid #eee;
    padding: 10px;
    transition: all 0.2s ease;
}

.book-card:hover {
    border-color: #999;
    box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    transform: translateY(-4px);
}

.book-card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    margin-bottom: 12px;
}

.book-info h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 4px;
}

.book-info p {
    font-size: 0.95rem;
    color: #555;
}

footer {
    text-align: center;
    margin-top: 80px;
    color: #aaa;
    font-size: 0.9rem;
}
