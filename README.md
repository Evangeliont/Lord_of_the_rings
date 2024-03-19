[Lord](https://therealsujitk-vercel-badge.vercel.app/?app=lord-of-the-rings&style=flat-square)
![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=lord-of-the-rings&style=flat-square)
<img src="https://therealsujitk-vercel-badge.vercel.app/?app=lord-of-the-rings&style=flat-square" alt="Vercel Deploy">

# Lord of the rings

- Проект представляет собой энциклопедию персонажей по вселенной **Властелина колец**
  В данном проекте предоставлены все персонажи данной вселенной.
  В будущем будет добавлен функционал пагинации. Адаптив и локализация сайта.
  Так же в перспективе будет разработано API.

- Использованное API: [The One API](https://the-one-api.dev/documentation)

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**. Глупый - ([CardList](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/CardList/CardList.tsx)), умный - ([SearchableList](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/Header/Search/SearchableList/SearchableList.tsx))
- [x] Есть **рендеринг списков**. ([CardList](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/CardList/CardList.tsx), [CardDetails](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/CardList/Card/CardDetails/CardDetails.tsx))
- [x] Реализована хотя бы одна **форма**. ([AuthForm](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/Auth/AuthForm.tsx) - выполнена при помощи библиотеки React Hook Form)
- [x] Есть применение **Контекст API**. ([ThemeContext](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/context/ThemeContext.tsx))
- [x] Есть применение **предохранителя**. ([App](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/App.tsx))
- [x] Есть хотя бы один **кастомный хук**. ([useAuthUser](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/hooks/useAuthUser.ts)),
- [x] Хотя бы несколько компонентов используют **PropTypes**. ([Button](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/Button/Button.tsx), [Card](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/CardList/Card/Card.tsx), [ThemeContext](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/context/ThemeContext.tsx))
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**). ([useDebounce](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/hooks/useDebounce.ts), [SearchableList](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/components/Header/Search/SearchableList/SearchableList.tsx))
- [x] Есть применение **lazy + Suspense**. ([App](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/App.tsx))

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**. ([store](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/store.ts))
- [x] Используем **слайсы**. ([userSlice](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/slices/userSlice.ts), [favotiteSlice](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/slices/favoriteSlice.ts), [historySlice](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/slices/historySlice.ts))
- [x] Есть хотя бы одна **кастомная мидлвара**. ([middleware](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/middleware/middleware.tsx))
- [x] Используется **RTK Query**. ([dataOneApi](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/store/api/dataOneApi.ts))
- [x] Используется **Transforming Responses**. ([Transforming Response](https://github.com/Evangeliont/Lord_of_the_rings/blob/master/src/utils/TransformedData.ts))

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**.
- [x] Есть CI

**Функциональность проекта**

- Пользователи могут _регистрироваться_ и _авторизироваться_. Для доступа к некоторым страницам необходима авторизация.
- Реализована логика _поиска_. При помощи строки поиска пользователь может найти интересующие его произведения искусства.
- Все _поисковые запросы пользователя хранятся_ в разделе «История».
- Зарегистрированный пользователь может _сохранять в избранное или удалять_ из него.
- Вся информация о пользователе, включая его избранное и историю поиска, хранится в _localStorage_.

**Для запуска проекта, необходимо:**

- Установить пакеты `npm install`
- Запустить приложение `npm dev`
