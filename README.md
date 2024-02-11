# Aston-project

- Проект представляет собой энциклопедию по вселенной Властелина колец
- Использованное API: [The One API](https://the-one-api.dev/documentation)

---

## Основной функционал

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [ ] Реализованы Требования к функциональности [Частично]
- ~~[ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage~~

#### React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [x] Есть разделение на умные и глупые компоненты: [Глупый](https://github.com/Evangeliont/aston-react/blob/master/src/App.tsx) [Умный](https://github.com/Evangeliont/aston-react/blob/master/src/components/CardList/CardList.tsx)
- [x] Есть рендеринг списков: [CardList](https://github.com/Evangeliont/aston-react/blob/master/src/components/CardList/CardList.tsx)
- ~~[ ] Реализована хотя бы одна форма:~~
- [x] Есть применение Контекст API: [useTheme](https://github.com/Evangeliont/aston-react/blob/master/src/hooks/useTheme.ts)
- [x] Есть применение предохранителя: [https://github.com/Evangeliont/aston-react/blob/master/src/AppRouter/AppRouter.tsx](AppRouter)
- [x] Есть хотя бы один кастомный хук: [useTheme](https://github.com/Evangeliont/aston-react/blob/master/src/hooks/useTheme.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [Button](https://github.com/Evangeliont/aston-react/blob/master/src/components/Button/Button.tsx)
- ~~[ ] Поиск не должен триггерить много запросов к серверу (debounce):~~
- [x] Есть применение lazy + Suspense: [ErrorBoundary](https://github.com/Evangeliont/aston-react/blob/master/src/AppRouter/AppRouter.tsx)

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [Store](https://github.com/Evangeliont/aston-react/blob/master/src/store/store.ts)
- [x] Используем слайсы: [authSlice](https://github.com/Evangeliont/aston-react/blob/master/src/store/slice/authSlice.ts)
- [x] Есть хотя бы одна кастомная мидлвара или `createListenerMiddleware`: [loggerMiddleware](https://github.com/Evangeliont/aston-react/blob/master/src/middleware/loggerMiddleware.ts)
- [x] Используется RTK Query: [getDataOneApi](https://github.com/Evangeliont/aston-react/blob/master/src/store/services/getDataOneApi.ts)
- [x] Используется Transforming Responses: [Serialization](https://github.com/Evangeliont/aston-react/blob/master/src/util/serialization.ts)

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] настроен CI/CD
