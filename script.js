document.addEventListener('click', e => {
    const container = e.target.closest('.tabs');
    if(!container) {
        return;
    }
    if(!e.target.classList.contains('tab')) {
        return;
    }

    const tabs = [...container.querySelectorAll('.tab')],
        currentTab = e.target,
        index = tabs.indexOf(currentTab),
        activeTab = tabs.find(tab => tab.classList.contains('tab_active')),
        activeIndex = tabs.indexOf(activeTab),
        tabContents = [...container.querySelectorAll('.tab__content')],
        currentTabContent = tabContents[index],
        activeTabContent = tabContents[activeIndex];

    activeTabContent.classList.remove('tab__content_active');
    activeTab.classList.remove('tab_active');
    currentTabContent.classList.add('tab__content_active');
    currentTab.classList.add('tab_active');
});




