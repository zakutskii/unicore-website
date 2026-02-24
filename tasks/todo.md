# Todo

## Cookie Banner + Consent-Based Analytics (2026-02-24)

- [x] Зафиксировать план внедрения и проверок
- [x] Добавить cookie banner (UI + логика accept/decline) для всего сайта
- [x] Перевести Vercel Analytics/Speed Insights на загрузку только после consent
- [x] Подключить решение на `index.html`, `404.html`, `404/index.html`
- [x] Проверить отсутствие автозагрузки analytics без consent и корректную загрузку после accept
- [x] Закоммитить и запушить изменения

# Review

- Статус: выполнено
- Реализация: добавлены `/cookie-consent.css` и `/cookie-consent.js`; баннер показывает выбор Accept/Decline и сохраняет его в `localStorage` (`unicore_cookie_consent_v1`).
- Поведение: при `accepted` динамически грузятся `/_vercel/insights/script.js` и `/_vercel/speed-insights/script.js`; при `rejected` аналитика не загружается.
- Проверки: во всех 3 HTML-страницах убрана автозагрузка vercel-скриптов из `<head>`, добавены подключения cookie-consent и один экземпляр баннера.
