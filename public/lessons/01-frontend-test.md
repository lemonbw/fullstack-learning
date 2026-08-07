# Тест по Frontend-разработке

## JS

1. **Основные типы данных в JS:**

   - null
   - string
   - boolean
   - undefined
   - object
   - symbol
   - bigint
   - number

2. **Что выведется в консоли?**

   ```js
   const someArray = [1, 2, 3];
   const otherArray = [1, 2, 3];

   console.log(someArray == otherArray);
   console.log(someArray === otherArray);
   ```

   false, false

   Потому что сравнивается не содержимое массивов, а ссылки на них.

3. **Что выведется в консоль?**

   ```js
   const f = () => {};
   const f2 = f.bind(null);
   const f3 = f.bind(null);
   console.log(f2 === f3);
   ```

   false

   Потому что bind создаёт новую функцию со своей ссылкой.

4. **Как получить изменения из удалённой (remote) ветки в git?**

   git pull origin <branch_name>

5. **Как в git перенести один конкретный коммит к себе?**

   git cherry-pick commit_id

6. **Мы находимся в ветке someFeature, в неё необходимо влить ветку master. Какую команду будем использовать?**

   git merge origin/master

7. **Что выведется в консоль?**

   ```
   const getPromise = (number) => new Promise((resolve) => {
   console.log(number);
   resolve();
   });

   getPromise(2).then(() => {
   getPromise(1);
   }).then(() => {
   console.log(3);
   });
   ```

   2, 1, 3

8. **Что выведется в консоли?**

   ```
   const a = [];
   let i = 0;

   while (i !== 10) {
       a[i++] = function(){
           return i;
       };
   }

   console.log(a[3]());
   ```

   10

9. **Написать функцию, которая принимает на вход значение элемента и массив, и возвращает массив без этого элемента.**

   ```
   const list: number[] = [1, 2, 3];

   function removeItemFromList(item: number, list: number[]): number[] {

    return list.filter((el) => el !== item);
   }

   console.log(removeItemFromList(4, list));
   ```

10. **Что выведется в консоли?**

    ```
    const animal = "snake";
    function makeShout() {
        let animal = "cat",
        const shout = function() {
            console.log(animal)
        };
        animal = "dog";
        return shout;
    }

    shout = makeShout();
    shout();

    shout = function() {
        console.log(animal)
    };

    shout();
    ```

    dog, snake

    Потому что функция shout внутри makeShout запоминает переменную, а не её значение. А внешняя функция shout при переопределении обращается к внешней переменной animal.

11. **Как работает transform: translate?**

    Сдвигает элемент относительно своего расположения по осям X и Y на заданную велечину, не влияя на расположение других элементов.

12. **Мы пофиксили баги нашей библиотеки, а также добавили новую, не ломающую обратную совместимость, функциональность. Текущая версия 1.12.1. Какой версии должна быть библиотека, если следовать спецификации семантического версирования?**

    1.13.0

13. **Знаете ли вы, что такое critical rendering path?**

Critical Rendering Path — это последовательность шагов, которую выполняет браузер для конвертации HTML, CSS и JavaScript в пиксели на экране. Оптимизация этого процесса улучшает производительность рендера. Critical Rendering Path включает в себя DOM, CSSOM, дерево рендера и layout.

DOM создаётся как только браузер начинает парсить HTML. Во время парсинга HTML браузер может встретить JavaScript, который будет выполнен и может изменять DOM и CSSOM. HTML может содержать или запрашивать стили, которые преобразуются в CSS Object Model. Браузерный движок комбинирует получившиеся DOM и CSSOM, чтобы создать дерево рендера.

Layout определяет размер и расположение каждого элемента на странице. Как только layout завершён, начинается отрисовка пикселей на экране.

14. **Выберите шаги critical rendering path**

    1. DOM
    2. CSSOM
    3. Render Tree
    4. Layout
    5. Paint

15. **Напишите React Hook, который будет возвращать width, при каждом resize страницы.**

    ```
    "use client";

    import { useState, useEffect } from "react";

    function useResize() {
      const [width, setWidth] = useState(0);

      useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      return { width };
    }

    export default function SomeComponent() {
      const { width } = useResize();

      return <div>{width}</div>;
    }
    ```
