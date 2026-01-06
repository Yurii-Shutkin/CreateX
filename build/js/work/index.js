document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__tab');
  const panels = document.querySelectorAll('.tabs__panel');

  if (!tabs.length || !panels.length) {
    console.warn('Tabs or panels not found');
    return;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;

      if (!id) {
        console.warn('Tab without data-tab:', tab);
        return;
      }

      tabs.forEach(t => t.classList.remove('tabs__tab--active'));
      panels.forEach(p => p.classList.remove('tabs__panel--active'));

      tab.classList.add('tabs__tab--active');

      const activePanel = document.querySelector(
        `.tabs__panel[data-tab="${id}"]`
      );

      if (!activePanel) {
        console.error(`Panel with data-tab="${id}" not found`);
        return;
      }

      activePanel.classList.add('tabs__panel--active');
    });
  });
});
