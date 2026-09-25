(() => {
    const viewer = document.getElementById('viewer');
    const search = document.getElementById('storeSearch');
    const sort = document.getElementById('catalogSort');
    const count = document.getElementById('catalogCount');
    const tabs = [...document.querySelectorAll('.category-tab')];
    const pidContainer = document.getElementById('PDADetailsContainer');
    const themeToggle = document.getElementById('themeToggle');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const themeStorageKey = 'yash12007-store-theme';
    let activeFilter = 'all';

    const applyTheme = (theme) => {
        const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
        const isDark = normalizedTheme === 'dark';

        document.documentElement.dataset.theme = normalizedTheme;
        document.documentElement.style.colorScheme = normalizedTheme;
        themeColor?.setAttribute('content', isDark ? '#111318' : '#f7f8fa');
        themeToggle?.setAttribute('aria-pressed', String(isDark));
    };

    applyTheme(document.documentElement.dataset.theme);
    themeToggle?.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);

        try {
            localStorage.setItem(themeStorageKey, nextTheme);
        } catch {
            // Theme still applies for the current page when storage is unavailable.
        }
    });

    if (!viewer) return;

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
    if (pidContainer) {
        new MutationObserver(enhancePidDetails).observe(pidContainer, { childList: true });
        enhancePidDetails();
    }
    applyView();
})();
