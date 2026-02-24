# Todo

## Analytics + Speed Insights (2026-02-24)

- [x] Зафиксировать план внедрения и проверок
- [x] Добавить Vercel Analytics и Speed Insights в `index.html`
- [x] Добавить Vercel Analytics и Speed Insights в `404.html` и `404/index.html`
- [x] Проверить, что скрипты присутствуют и не дублируются
- [x] Закоммитить и запушить изменения

# Review

- Статус: выполнено
- Подход: так как проект статический HTML (без Next.js layout), интеграция выполнена через Vercel script tags для static sites.
- Проверки: во всех страницах (`index.html`, `404.html`, `404/index.html`) по одному вхождению `/_vercel/insights/script.js` и `/_vercel/speed-insights/script.js`.
