/*
Роут GET /, который будет возвращать главную HTML страницу со всеми заметками.

    Роут GET /notes, который будет отдавать HTML страницу с формой создания заметки.
    Роут GET /notes/${id}, который будет отдавать HTML страницу детального отображения заметки.
    Роут POST /api/notes для создания заметки.
    Роут PUT /api/notes/${id} для редактирования заметки.
    Роут DELETE /api/notes/${id} для удаления заметки.

    Роут GET /lists, который будет отдавать HTML страницу с формой создания списка.
    Роут GET /lists/${id}, который будет отдавать HTML страницу детального отображения списка.
    Роут GET /api/lists/${id} отображения заметки со списком.
    Роут POST /api/lists для добавления нового списка задач с учетом того, что количество позиций в списке - не ограничено и заранее не известно.
    Роут PUT /api/lists/${id} для редактирования списка задач.
    Роут DELETE /api/lists/${id} для удаления заметки со списком.

    Создать роут и функционал в клиентской части для изменения прикрепленной картинки (замены на другую).
    Созлать роут и функционал в клиентской части для удаления картинки.
    */