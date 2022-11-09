/**
 * тестовий приклад створення 2 користувачів та монтування таблиці
 */

 let users = new UserCollectionWithDOM();

 users.add(
     new User(
         "Surname",
         "Name",
         "Surname1",
         "Destination",
         "Date",
         "Mass"

     )
 );
 
 users.add(
     new User(
        "Surname2",
        "Name2",
        "Surname12",
        "Destination2",
        "Date2",
        "Mass2"
     )
 );
 
 users.mount(document.getElementById("root"));