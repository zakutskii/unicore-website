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

## Go Back Runtime Fix (2026-02-25)

- [x] Воспроизвести и локализовать причину нерабочего `Go back` после предыдущего пуша
- [x] Добавить runtime-fallback для `Go back` в `privacy-policy/index.html` и `terms-of-use/index.html`
- [x] Убедиться, что переход форсируется на `/index.html` даже при перехвате Framer
- [x] Удалить iframe editor bar из `404/index.html` и `404.html`

### Review

- В legal-страницах добавлен скрипт `#go-back-home-fix`, который:
  - выбирает элементы `[data-framer-name="Go back"]`
  - устанавливает `href` в `/index.html`
  - перехватывает клик и направляет на `/index.html`
- В `404/index.html` и `404.html` удален iframe `#__framer-editorbar`, чтобы edit UI не отображался.

## Bulk Update All Exported Pages (2026-03-05)

- [x] Зафиксировать набор массовых правок для `index`, `404`, `privacy-policy`, `terms-of-use`
- [x] Обновить page-specific SEO metadata (`title`, `description`, `og:title`, `twitter:title`, canonical/og:url)
- [x] Обновить legal `Last updated` до `March 5, 2026`
- [x] Исправить внутренние `Back to Home` ссылки на открытие в текущей вкладке
- [x] Проверить итоговые мета-блоки и ссылки во всех 4 страницах
- [x] Добавить review-результат в `tasks/todo.md`

### Review

- Во всех 4 страницах проставлены/нормализованы `canonical` и `og:url` на `https://unicore.me/...` без дублей.
- Обновлены SEO-поля для отдельных страниц:
  - `404/index.html`: `title`/`description`/`og:*`/`twitter:*`, добавлен `robots: noindex,follow`
  - `privacy-policy/index.html`: `title`/`description`/`og:*`/`twitter:*`
  - `terms-of-use/index.html`: `title`/`description`/`og:*`/`twitter:*`
- На legal-страницах обновлено `Last updated` до `March 5, 2026`.
- Внутренние кнопки `Back to Home` в `404`, `privacy-policy`, `terms-of-use` больше не открывают новую вкладку (`target=\"_blank\"` удален).
- Проверка выполнена через `rg/sed`: подтверждены единичные `canonical`/`og:url` на каждой странице, отсутствие `href=\"../index.html\" target=\"_blank\"`, корректные даты на legal-страницах.

## Replace Pages From Export (2026-03-05)

- [x] Overwrite `index.html` from export
- [x] Overwrite `404/index.html` and sync `404.html`
- [x] Overwrite `privacy-policy/index.html`
- [x] Overwrite `terms-of-use/index.html`
- [x] Verify replaced files are byte-identical to export sources
- [x] Add review notes

### Review

- All target pages were replaced directly from `/Users/bibizan/Downloads/unicore.framer.ai-framer-full-20260305053548` with no manual edits.
- Replaced files:
  - `index.html`
  - `404/index.html`
  - `404.html` (synced from export `404/index.html`)
  - `privacy-policy/index.html`
  - `terms-of-use/index.html`
- Verification with `cmp` passed for all replaced files.
- Verification with `sha256sum` confirmed source and destination hashes are identical.
