/* Review Popup Style */
.review-popup {
    position: absolute;
    top: 50%;
    left: 110%; /* စာအုပ်ရဲ့ ညာဘက်ဘေးမှာ ပေါ်မယ် */
    width: 200px;
    background: rgba(0, 255, 65, 0.1);
    border-left: 3px solid var(--neon-green);
    padding: 10px;
    font-size: 0.85rem;
    color: var(--neon-green);
    text-align: left;
    backdrop-filter: blur(8px);
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease;
    pointer-events: none;
    z-index: 20;
    line-height: 1.5;
    text-shadow: 0 0 5px var(--neon-green);
}

/* Hover တဲ့အခါ ပေါ်လာပုံ */
.book-node:hover .review-popup {
    opacity: 1;
    transform: translateX(0);
}

/* ဖုန်းနဲ့ကြည့်ရင် review ကို အောက်မှာ ပြမယ် */
@media (max-width: 768px) {
    .review-popup {
        left: 0;
        top: 105%;
        width: 100%;
    }
}
