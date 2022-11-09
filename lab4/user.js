class User {

    constructor(surname, name, surname1, destination, date, mass) {
      this.surname = surname;
      this.name = name;
      this.surname1 = surname1;
      this.destination = destination;
      this.date = date;
      this.mass = mass;
      this._id = User._idCounter++; 
    }
    
    get id() {
      return this._id;
    }
  
    //список властивостей класу які можна змінювати
    get settablePropertiesList() {
      return ["surname","name", "surname1", "date", "mass", "destination"];
    }
  
    get gettablePropertiesList() {
      return ["id", ...this.setablePropertisList];
    }
  }

  User._idCounter = 1;