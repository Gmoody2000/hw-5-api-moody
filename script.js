document.addEventListener("DOMContentLoaded", function () {
    const currentDayEl = document.getElementById("currentDay");
    currentDayEl.textContent = dayjs().format("MMMM D, YYYY");

    const mainEl = document.querySelector("main");

    for (let hour = 9; hour <= 17; hour++) {
        const timeBlockEl = document.createElement("div");
        timeBlockEl.classList.add("time-block");

        const timeEl = document.createElement("div");
        timeEl.classList.add("hour");
        timeEl.textContent = dayjs().hour(hour).format("h A");

        const textareaEl = document.createElement("textarea");
        textareaEl.value = localStorage.getItem(`event-${hour}`);

        const saveBtnEl = document.createElement("button");
        saveBtnEl.textContent = "Save";
        saveBtnEl.addEventListener("click", function () {
            const eventText = textareaEl.value;
            localStorage.setItem(`event-${hour}`, eventText);
        });

        timeBlockEl.appendChild(timeEl);
        timeBlockEl.appendChild(textareaEl);
        timeBlockEl.appendChild(saveBtnEl);

        const currentTime = dayjs().hour();
        timeBlockEl.classList.add(
            hour < currentTime ? "past" : hour === currentTime ? "present" : "future"
        );

        mainEl.appendChild(timeBlockEl);
    }
});
