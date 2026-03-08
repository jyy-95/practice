/**
 * Vision Pro X - 交互脚本
 * 苹果风格智能眼镜网页
 */

// ========================================
// 滚动动画 - Intersection Observer
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // 观察器选项
    const observerOptions = {
        root: null,
        rootMargin: '-100px',
        threshold: 0.1
    };

    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-up, .fade-left, .fade-right'
    );
    animatedElements.forEach(el => observer.observe(el));

    // 英雄区域标题自动渐入
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 + index * 150);
    });
});

// ========================================
// 导航栏滚动效果
// ========================================
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }

    lastScrollY = currentScrollY;
}, { passive: true });

// ========================================
// 平滑滚动到锚点
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 眼镜镜片视差效果
// ========================================
const glassesSvg = document.querySelector('.glasses-svg');
const heroSection = document.querySelector('.hero');

if (glassesSvg && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;

        glassesSvg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        glassesSvg.style.transform = 'translate(0, 0)';
    });
}

// ========================================
// 数字计数动画
// ========================================
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 16);
}

// ========================================
// 特性卡片悬停效果增强
// ========================================
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    const iconLarge = item.querySelector('.feature-icon-large');

    item.addEventListener('mouseenter', () => {
        if (iconLarge) {
            iconLarge.style.animation = 'none';
            setTimeout(() => {
                iconLarge.style.animation = 'pulse 1s ease-in-out infinite';
            }, 10);
        }
    });

    item.addEventListener('mouseleave', () => {
        if (iconLarge) {
            iconLarge.style.animation = 'pulse 3s ease-in-out infinite';
        }
    });
});

// ========================================
// 价格卡片 3D 倾斜效果
// ========================================
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateX = (0.5 - y) * 10;
        const rotateY = (x - 0.5) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// 购买按钮点击效果
// ========================================
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // 显示确认消息
        setTimeout(() => {
            alert('感谢您的兴趣！Vision Pro X 即将发售，敬请期待。');
        }, 300);
    });
});

// 添加涟漪动画到 CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// 技术规格卡片展开/收起
// ========================================
const specCards = document.querySelectorAll('.spec-card');

specCards.forEach(card => {
    card.addEventListener('click', () => {
        // 可以在这里添加展开/收起逻辑
        card.classList.toggle('expanded');
    });
});

// ========================================
// 页面加载进度条
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// 添加加载样式
const loadStyle = document.createElement('style');
loadStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadStyle);

// ========================================
// 性能优化 - 节流函数
// ========================================
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 键盘导航支持
// ========================================
document.addEventListener('keydown', (e) => {
    // ESC 键回到顶部
    if (e.key === 'Escape') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ========================================
// 控制台欢迎信息
// ========================================
console.log('%c Vision Pro X ', 'background: linear-gradient(135deg, #2997ff, #0077ed); color: white; font-size: 24px; font-weight: bold; padding: 20px 40px; border-radius: 10px;');
console.log('%c 未来已至，看见无限可能 ', 'color: #86868b; font-size: 14px; padding: 10px;');
