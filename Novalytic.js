// Review data with Unsplash images
const reviews = [
    {
        id: 1,
        title: "MacBook Pro M3 Max Review",
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M3_Max/IMG_1008.JPG",
        rating: 4.8,
        category: "Laptops",
        summary: "The new MacBook Pro M3 Max pushes the boundaries of what's possible in a laptop, with unprecedented performance and battery life.",
        date: "nov 15, 2024",
        likes: 342
    },
    {
        id: 2,
        title: "Sony WH-1000XM5 Deep Dive",
        image: "https://cdn.vox-cdn.com/thumbor/VkotuBu10FIR4L4-oF_qe2YZY44=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23614733/DSCF7931.jpg",
        rating: 4.9,
        category: "Headphones",
        summary: "Sony's flagship headphones continue to impress with best-in-class noise cancellation and exceptional sound quality.",
        date: "Mar 12, 2024",
        likes: 285
    },
    {
        id: 3,
        title: "iPhone 15 Pro Max Long-Term Review",
        image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
        rating: 4.7,
        category: "Smartphones",
        summary: "After six months with Apple's flagship, here's how it holds up in daily use and whether it's worth the premium price.",
        date: "Mar 10, 2024",
        likes: 523
    },
    {
        id: 4,
        title: "PS5 Slim vs Original PS5",
        image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/10/PS5-vs-Slim.jpg",
        rating: 4.5,
        category: "Gaming",
        summary: "We compare Sony's new PS5 Slim with the original model to help you decide which version is right for you.",
        date: "Mar 8, 2024",
        likes: 421
    },
    {
        id: 5,
        title: "Canon EOS R5 for Professionals",
        image: "https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt$",
        rating: 4.9,
        category: "Cameras",
        summary: "A professional photographer's perspective on Canon's flagship mirrorless camera after a year of heavy use.",
        date: "Mar 5, 2024",
        likes: 389
    },
    {
        id: 6,
        title: "Rabbit R1",
        image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:3840x2160/2400x1350/filters:focal(1920x1080:1921x1081):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25214892/videoframe_787161.png",
        rating: 4.0,
        category: "Futurstic",
        summary: "A professional photographer's perspective on Canon's flagship mirrorless camera after a year of heavy use.",
        date: "April 3, 2024",
        likes: 509
    },
    {
        id: 7,
        title: "Apple vision Pro",
        image: "https://media.wired.com/photos/647e2a2040f1b0ff578445a2/master/pass/Apple-Vision-Pro-Gear.jpg",
        rating: 4.1,
        category: "Futurstic",
        summary: "A professional photographer's perspective on Canon's flagship mirrorless camera after a year of heavy use.",
        date: "January 3, 2024",
        likes: 805
    },
    {
        id: 8,
        title: "Snap AR Glasses ",
        image: "https://images.ctfassets.net/cbjigzuhgs28/6Jaxe4YPMmOxQjpGFRRGI3/dc2663381118192d838af55210766ce8/Woman_WEB.jpg?fm=avif&q=40&h=1600",
        rating: 5.0,
        category: "Futurstic",
        summary: "A professional photographer's perspective on Canon's flagship mirrorless camera after a year of heavy use.",
        date: "Nov 3, 2024",
        likes: 825
    }
];

// DOM Elements
const reviewsGrid = document.getElementById('reviewsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

// Create review card HTML
function createReviewCard(review) {
    return `
        <div class="review-card">
            <div class="review-image">
                <img src="${review.image}" alt="${review.title}">
                <span class="review-category">${review.category}</span>
            </div>
            <div class="review-content">
                <div class="review-header">
                    <div class="review-rating">
                        ⭐ ${review.rating.toFixed(1)}
                    </div>
                    <div class="review-meta">
                        <div>🕒 ${review.date}</div>
                        <div>👍 ${review.likes}</div>
                    </div>
                </div>
                <h3 class="review-title">${review.title}</h3>
                <p class="review-summary">${review.summary}</p>
                <a href="#" class="read-more">Read Review →</a>
            </div>
        </div>
    `;
}

// Filter and render reviews
function filterAndRenderReviews() {
    const selectedCategory = document.querySelector('.category-button.active').dataset.category;
    const searchQuery = searchInput.value.toLowerCase();

    const filteredReviews = reviews.filter(review => {
        const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
        const matchesSearch = review.title.toLowerCase().includes(searchQuery) ||
                            review.summary.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    reviewsGrid.innerHTML = filteredReviews.map(createReviewCard).join('');
}

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Category filter
categoryFilter.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-button')) {
        document.querySelector('.category-button.active').classList.remove('active');
        e.target.classList.add('active');
        filterAndRenderReviews();
    }
});

// Search functionality
searchInput.addEventListener('input', filterAndRenderReviews);

// Initial render
filterAndRenderReviews();