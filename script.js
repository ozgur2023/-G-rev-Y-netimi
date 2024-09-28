function addTask() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;
        taskList.appendChild(listItem);
        taskInput.value = ""; // Giriş kutusunu temizle
        updateStatus();
    } else {
        alert("Lütfen bir görev girin!");
    }
}

function completeTask() {
    const taskList = document.getElementById("task-list");
    const selectedTasks = Array.from(taskList.getElementsByTagName("li")).filter(task => task.style.backgroundColor === "lightblue");
    
    selectedTasks.forEach(task => {
        task.classList.add("completed");
        task.style.backgroundColor = ""; // Seçimi kaldır
    });
    
    updateStatus();
}

function deleteTask() {
    const taskList = document.getElementById("task-list");
    const selectedTasks = Array.from(taskList.getElementsByTagName("li")).filter(task => task.style.backgroundColor === "lightblue");
    
    selectedTasks.forEach(task => {
        taskList.removeChild(task);
    });
    
    updateStatus();
}

function updateStatus() {
    const taskList = document.getElementById("task-list");
    const totalTasks = taskList.children.length;
    const completedTasks = Array.from(taskList.getElementsByClassName("completed")).length;

    const status = document.getElementById("status");
    status.textContent = `Toplam görev: ${totalTasks}, Tamamlanan görev: ${completedTasks}`;
}

function changeTheme() {
    const theme = document.getElementById("theme").value;
    const body = document.body;
    
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

// Görevleri seçmek için arka plan rengi değiştir
document.getElementById("task-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = event.target.style.backgroundColor === "lightblue" ? "" : "lightblue";
    }
});
