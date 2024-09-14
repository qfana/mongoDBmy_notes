db.users.insertMany([
  { name: 'name1', age: 16 },
  { name: 'name2', age: 19 },
  { name: 'name3', age: 22 },
]);

/*
Заметки по вызовам БД
*/

db.users.find({ age: { $lt: 12 } });

/*
lt - меньше чем
gt - больше чем
ne - не равно
..e - * или равно (пример lte - меньше или равно чем)
*/

db.users.find().sort({ age: 1 });

/*
При сортировке:

1: Сортировка по возрастанию
-1: Сортировка по убыванию
*/

db.users.find().sort({ age: 1 }).limit(2); // Выставляем лимит по получаемым данным (пример: только первые два)

db.users.findOne({ _id: ObjectId('66e5980081f5d5d8daa46a06') }); // Поиск по ID (имхо указывается ID из ДБ, а не свой)

db.users.findOne({ age: 16 }); // Найти одного челикса подходящего под параметр

/*
Обновление ранее записанных данных:
*/

db.users.update(
  { name: 'name1' }, { // Если один из ключей имеет значение: name1
  $set: { // Изменяем запись в ДБ
    name: 'chavod', age: 16 // Тут пишем какому ключу какое значение установить, если указать только часть ключей - только они и заменятся
  }
}
);

db.users.updateMany(
  {}, // В данном случае объект пустой - т.е. применяться будет ко всем записям в ДБ
  {
    $rename: { // переименовать
      age: 'full_age' // Заменяем название ключа age на full_age
    }
  }
);

db.users.update(
  { nick: 'qfana' },
  {
    $set: {
      posts: [
        { title: 'JavaScript', text: 'JS top lang' },
        { title: 'Mongo', text: 'Mongo is DataBase' },
        { title: 'qfana', text: 'qfana very good person' }
      ]
    }
  }
);


/*
Удаление записи из ДБ
*/

db.users.deleteOne({ age: 22 });


db.users.bulkWrite(
  {
    insertOne: {
      document: { nick: 'Alisa', age: 6 }
    }
  },
  {
    deleteOne: {
      filter: { nick: 'name2' }
    }
  }
);


db.users.find(
  {
    posts: {
      $elemMatch: {
        title: 'javascript'
      }
    }
  }
);

db.users.find({ posts: { $exists: true } });