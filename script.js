// Show popup when page loads
window.onload = function() {
    setTimeout(() => {
        showPopup();
    }, 1000); // Show after 1 second
};

// Show popup function
function showPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'flex';
    document.body.classList.add('popup-open');
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
}

// Close popup when clicking outside content
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Set cookie to show popup only once per session (optional)
function setPopupCookie() {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 24 hours
    document.cookie = "popupShown=true; expires=" + date.toUTCString() + "; path=/";
}

function checkPopupCookie() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('popupShown='));
}

// Modified window.onload to check cookie
window.onload = function() {
    if (!checkPopupCookie()) {
        setTimeout(() => {
            showPopup();
            setPopupCookie();
        }, 1000);
    }
};

// Auto-fill bug report message
document.addEventListener('DOMContentLoaded', function() {
    const reportBtn = document.querySelector('.report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', function(e) {
            const currentPage = window.location.href;
            const bugMessage = `Hello Ms Edits! I found a bug in your website. Page: ${currentPage}. Problem: `;
            this.href = `https://wa.me/923167364896?text=${encodeURIComponent(bugMessage)}`;
        });
    }
});

// Prevent body scroll when popup is open
function toggleBodyScroll(enable) {
    if (enable) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}