    document.body.classList.add('popup-open');
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
}

// Clos