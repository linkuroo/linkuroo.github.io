// Material 3 Expressive Dynamic Engine
document.addEventListener('DOMContentLoaded', () => {

    // 1. Live Clock (GMT+3)
    const m3Clock = document.getElementById('m3Clock');
    function updateClock() {
        if (!m3Clock) return;
        const now = new Date();
        m3Clock.textContent = now.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Material 3 Dynamic Tone Switching (Coral, Lavender, Mint, Sky)
    const tonePills = document.querySelectorAll('.tone-pill');
    tonePills.forEach(pill => {
        pill.addEventListener('click', () => {
            tonePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const tone = pill.getAttribute('data-tone');
            document.body.setAttribute('data-theme-tone', tone);
        });
    });

});
