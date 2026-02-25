# Todo

## Import Framer Pages + Footer Sync (2026-02-25)

- [x] Зафиксировать план работ
- [x] Импортировать новые страницы из экспорта Framer: `404/index.html`, `privacy-policy/index.html`, `terms-of-use/index.html`
- [x] Синхронизировать `404.html` с новой 404-страницей
- [x] Внедрить правки footer на главной странице в `index.html` из нового экспорта
- [x] Сохранить локальные кастомизации главной (`hide-framer-editorbar`, `cookie-consent` блок и скрипт)
- [x] Проверить ссылки/якоря в footer и работоспособность страниц
- [x] Добавить review-результат в `tasks/todo.md`

# Review

- Статус: выполнено
- Импортированы новые страницы из экспорта Framer:
  - `404/index.html`
  - `privacy-policy/index.html`
  - `terms-of-use/index.html`
- `404.html` синхронизирован с `404/index.html`.
- В `index.html` применены правки footer из нового экспорта (включая кликабельные social/policy ссылки и обновлённую структуру footer).
- В `index.html` сохранены локальные кастомизации:
  - CSS-скрытие Framer editor bar (`#hide-framer-editorbar`)
  - `cookie-consent.css` в `<head>`
  - баннер `#cookie-consent-banner` + `cookie-consent.js` в конце `<body>`
  - дополнительные SEO/meta блоки (`theme-color`, `og:site_name`, `author`, `ld+json`)
- Проверка:
  - `privacy-policy/index.html` и `terms-of-use/index.html` полностью совпадают с новым экспортом.
  - `404/index.html` совпадает с новым экспортом.
  - `404.html` совпадает с `404/index.html`.

## Legal Back Links + 404 Edit Button (2026-02-25)

- [x] Обновить кнопки `Go back` в `privacy-policy` и `terms-of-use` на возврат на главную
- [x] Скрыть Framer Edit button на `404/index.html` и `404.html` безопасным CSS-оверраем
- [x] Проверить ссылки и наличие оверрая

### Review

- В `privacy-policy/index.html` и `terms-of-use/index.html` кнопка `Go back` теперь ведет на `../index.html`.
- В `404/index.html` и `404.html` добавлен блок `#hide-framer-editorbar`, который скрывает Framer edit UI.
