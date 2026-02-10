# Синхронизация с GitHub

- **Remote настроен:** `origin` → `https://github.com/MogilaVladik/Project-Dasha.git`
- Первый коммит создан, осталось отправить код на GitHub.

## Если репозиторий Project-Dasha ещё не создан на GitHub

1. Откройте [github.com/new](https://github.com/new).
2. **Repository name:** введите точно **`Project-Dasha`**.
3. **Public** или **Private** — по желанию.
4. **Не добавляйте** README, .gitignore, license.
5. Нажмите **«Create repository»**.

## Если понадобится сменить remote

```bash
git remote set-url origin https://github.com/ВАШ_ЛОГИН_GITHUB/Project-Dasha.git
```

## Отправить код

В терминале в папке проекта:

```bash
cd /Users/akondakova/Desktop/ProjectDasha
git push -u origin main
```

При запросе авторизации используйте **Personal Access Token** (не пароль): GitHub → Settings → Developer settings → Personal access tokens.

## Дальше

- Новые изменения: `git add .` → `git commit -m "описание"` → `git push`.
- Проверить remote: `git remote -v`.
