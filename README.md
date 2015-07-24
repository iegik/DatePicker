# DatePicker
*Тестовое задание*

- нужно собрать простой datepicker.
- никаких режимов, переключение только по месяцам
- использовать React для разработки и gulp для сборки
- дизайн любой
- нельзя использовать jQuery
- datepicker должен быть отдельным React-компонентом

Пример того, что должно получиться: http://dbushell.github.io/Pikaday/

---

## План

### Структура

- [–] DateBox
  - [–] l10n
    - [x] Date formats
    - [_] Keyboard gestures
  - [_] i18n
  - [_] Shim
	  - [_] Click
	  - [_] Clear
	  - [_] Next day
	  - [_] Prev day
	  - [_] Next month
	  - [_] Prev month
	  - [_] Next year
	  - [_] Prev year
- [_] CalendarPopup
  - [_] l10n
    - [_] Keyboard gestures
  - [_] i18n
  - [_] Years
    - [_] Next ->
	- [_] Prev <-
  - [_] Months
    - [_] Next ->
	- [_] Prev <-
  - [_] Days
    - [_] Days of prev month
	- [_] Working days
	- [_] Current day
	- [_] Weekends
	- [_] Days of next month
	- [_] Pick a day