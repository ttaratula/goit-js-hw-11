// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо елементи форми
const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateRadios = form.querySelectorAll('input[name="state"]');

// Функція для створення промісу
function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

// Обробник сабміту форми
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const delay = parseInt(delayInput.value);
    const state = [...stateRadios].find(radio => radio.checked)?.value;

    if (isNaN(delay) || !state) {
        return; // Якщо немає значення delay або вибраного стану, нічого не робимо
    }

    const promise = createPromise(delay, state);

    promise
        .then((resolvedDelay) => {
            // Якщо проміс виконано успішно
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
                position: 'topRight',
            });
        })
        .catch((rejectedDelay) => {
            // Якщо проміс відхилено
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${rejectedDelay}ms`,
                position: 'topRight',
            });
        });
});
