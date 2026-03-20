// 主题切换功能
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

// 初始化主题
function initTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.documentElement.classList.add('dark');
    }
}

// 搜索功能
function searchContent() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    const sections = document.querySelectorAll('.search-section');
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (query === '' || text.includes(query)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSmoothScroll();
    
    // 绑定搜索事件
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchContent);
    
    // 绑定主题切换按钮
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleDarkMode);
});
