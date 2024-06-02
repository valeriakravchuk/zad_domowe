# System zarządzania cyfrową biblioteką

## Spis treści
- [Opis projektu](#opis-projektu)
- [Funkcjonalności](#funkcjonalności)
- [Instrukcje obsługi](#instrukcje-obsługi)
- [Struktura projektu](#struktura-projektu)
- [Wymagane pakiety](#wymagane-pakiety)

---

## Opis projektu
Projekt to system zarządzania cyfrową biblioteką, który umożliwia użytkownikom dodawanie, edycję i przeglądanie zadań. Każde zadanie zawiera nazwę, termin wykonania oraz status zakończenia i przeterminowania. Użytkownicy mogą dodawać, edytować i przeglądać swoje zadania poprzez interfejs internetowy.

## Funkcjonalności
- Dodawanie nowych zadań
- Edycja istniejących zadań
- Przeglądanie aktywnych, zakończonych i przeterminowanych zadań
- Oznaczanie zadań jako zakończone

## Instrukcje obsługi

1. **Konfiguracja i uruchomienie bazy danych MySQL**

   - Pobierz i zainstaluj MySQL z oficjalnej strony internetowej: MySQL Downloads.
   - Uruchom serwer MySQL po zainstalowaniu.
   - Zrób execute ./sql/init.sql w bazie danych.
   - wejdź do ./database/config.js i zaznać poprawne dane do połoczenia z bazą danych (w razie potrzeby)

2. **Instalacja zależności**
    - Upewnij się, że masz zainstalowane środowisko Node.js.
    - Uruchom polecenie `npm install` w głównym katalogu projektu, aby zainstalować wymagane pakiety.

3.  **Uruchomienie aplikacji**
    - Uruchom aplikację, wpisując polecenie `node app.js` w konsoli.
    - Aplikacja będzie dostępna pod adresem `http://localhost:3000` w przeglądarce internetowej.

4.  **Interfejs użytkownika**
    - Dalej będziesz mógł dodawać nowe zadania, edytować istniejące zadania oraz przeglądać swoje aktywne, zakończone i przeterminowane zadania.

## Struktura projektu
Projekt składa się z następujących części:
- **controllers**: Kontrolery aplikacji, np. logika uwierzytelniania i obsługi zadań.
- **dataBase**: Moduł obsługujący połączenie z bazą danych i zapytania.
- **models**: Modele danych aplikacji.
- **public**: Zasoby statyczne, takie jak skrypty JavaScript i arkusze stylów CSS.
- **routes**: Trasy aplikacji, definiujące ścieżki do obsługi zapytań HTTP.
- **sql**: Skrypty SQL inicjalizujące bazę danych.
- **views**: Widoki aplikacji, w tym pliki EJS zawierające szablony HTML z wbudowanymi danymi dynamicznymi.

## Wymagane pakiety
- `ejs`: Szablony do generowania stron HTML w aplikacji Express.
- `express`: Framework Node.js do budowy aplikacji internetowych.
- `mysql2`: Klient MySQL do Node.js.
- `sequelize`: ORM dla Node.js do obsługi baz danych relacyjnych.