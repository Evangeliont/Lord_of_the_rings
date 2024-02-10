# Aston-project

- Проект представляет собой энциклопедию по вселенной Властелина колец
- Использованное API: [The One API](https://the-one-api.dev/documentation)

---

## Основной функционал

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [ ] Реализованы Требования к функциональности
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage

#### React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [x] Есть разделение на умные и глупые компоненты: [Глупый](https://github.com/Evangeliont/aston-react/blob/master/src/App.tsx) [Умный]
- [x] Есть рендеринг списков: [Список](https://github.com/Evangeliont/aston-react/blob/master/src/components/CardList/CardList.tsx)
- [ ] Реализована хотя бы одна форма:
- [ ] Есть применение Контекст API:
- [ ] Есть применение предохранителя:
- [ ] Есть хотя бы один кастомный хук:
- [ ] Хотя бы несколько компонентов используют PropTypes:
- [ ] Поиск не должен триггерить много запросов к серверу (debounce):
- [ ] Есть применение lazy + Suspense:

#### Redux

- [x] Используем Modern Redux with Redux Toolkit:[Пример](https://github.com/Evangeliont/aston-react/blob/master/src/store/store.ts)
- [x] Используем слайсы:[Пример](https://github.com/Evangeliont/aston-react/blob/master/src/store/slice/authSlice.ts)
- [ ] Есть хотя бы одна кастомная мидлвара или `createListenerMiddleware`:
- [x] Используется RTK Query:[Пример](https://github.com/Evangeliont/aston-react/blob/master/src/store/services/getDataOneApi.ts)
- [x] Используется Transforming Responses:[Пример](https://github.com/Evangeliont/aston-react/blob/master/src/util/serialization.ts)

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] настроен CI/CD
