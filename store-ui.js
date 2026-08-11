(() => {
    const viewer = document.getElementById('viewer');
    const search = document.getElementById('storeSearch');
    const sort = document.getElementById('catalogSort');
    const count = document.getElementById('catalogCount');
    const tabs = [...document.querySelectorAll('.category-tab')];
    const detailContainer = document.getElementById('detailedContainer');
    const detailLogo = document.getElementById('detailAppLogo');
    const pidContainer = document.getElementById('PDADetailsContainer');
    let activeFilter = 'all';

    if (!viewer) return;

    const syncDetailBackdrop = () => {
        const imageUrl = detailLogo?.getAttribute('src');
        if (!detailContainer || !imageUrl) return;
        detailContainer.style.backgroundImage = `linear-gradient(rgba(2, 5, 9, .88), rgba(2, 5, 9, .96)), url("${imageUrl}")`;
    };

    const enhancePidDetails = () => {
        if (!pidContainer || !pidContainer.children.length) return;
        pidContainer.classList.add('pid-detail-enhanced');
        const blocks = [...pidContainer.querySelectorAll(':scope > div')];
        blocks[0]?.classList.add('pid-detail-hero');
        blocks[1]?.classList.add('pid-detail-actions');
        blocks[2]?.classList.add('pid-detail-scan');
        blocks[3]?.classList.add('pid-detail-publisher');
        if (!pidContainer.querySelector('.pid-detail-close')) {
            const close = document.createElement('button');
            close.className = 'pid-detail-close';
            close.type = 'button';
            close.textContent = 'Close';
            close.addEventListener('click', () => {
                window.location.href = window.location.pathname;
            });
            pidContainer.appendChild(close);
        }
    };

    const getCards = () => [...viewer.querySelectorAll('.product-box-card')];
    const categoryFor = (card) => {
        const text = card.textContent.toLowerCase();
        if (/sera|antivirus|security|malware|virus/.test(text)) return 'security';
        if (/metrica|workspace|utility|performance|manager/.test(text)) return 'productivity';
        return 'creative';
    };

    const applyView = () => {
        const query = (search?.value || '').trim().toLowerCase();
        const cards = getCards();
        const visible = cards.filter((card) => {
            const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
            const matchesFilter = activeFilter === 'all' || categoryFor(card) === activeFilter;
            card.classList.toggle('is-hidden', !(matchesSearch && matchesFilter));
            return matchesSearch && matchesFilter;
        });
        if (count) count.innerHTML = `<strong>${visible.length}</strong> ${visible.length === 1 ? 'app' : 'apps'}`;
        let empty = viewer.querySelector('.empty-state');
        if (!visible.length && cards.length) {
            if (!empty) {
                empty = document.createElement('div');
                empty.className = 'empty-state';
                viewer.appendChild(empty);
            }
            empty.textContent = 'No apps match your search yet.';
        } else if (empty) empty.remove();
    };

    const applySort = () => {
        const cards = getCards();
        const value = sort?.value || 'featured';
        if (value !== 'featured') {
            cards.sort((a, b) => {
                if (value === 'name') return a.textContent.localeCompare(b.textContent);
                const price = (card) => Number((card.querySelector('.box-card-price')?.textContent || '').replace(/[^0-9.]/g, '')) || 0;
                return value === 'price-low' ? price(a) - price(b) : price(b) - price(a);
            });
            cards.forEach((card) => viewer.appendChild(card));
        }
        applyView();
    };

    search?.addEventListener('input', applyView);
    sort?.addEventListener('change', applySort);
    tabs.forEach((tab) => tab.addEventListener('click', () => {
        activeFilter = tab.dataset.filter || 'all';
        tabs.forEach((item) => item.classList.toggle('active', item === tab));
        applyView();
    }));

    new MutationObserver(applyView).observe(viewer, { childList: true });
    if (detailContainer) {
        new MutationObserver(syncDetailBackdrop).observe(detailContainer, {
            attributes: true,
            attributeFilter: ['src'],
            childList: true,
            subtree: true
        });
        detailLogo?.addEventListener('load', syncDetailBackdrop);
        syncDetailBackdrop();
    }
    if (pidContainer) {
        new MutationObserver(enhancePidDetails).observe(pidContainer, { childList: true });
        enhancePidDetails();
    }
    applyView();
})();
