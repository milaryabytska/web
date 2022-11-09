class User {

  constructor(surname, name, surname1, destination, date, mass) {
    this.surname = surname;
    this.name = name;
    this.surname1 = surname1;
    this.destination = destination;
    this.date = date;
    this.mass = mass;
    this._id = User._idCounter++; // генеруємо унікальний ідентифікатор 0, 1, 2, ...
  }

  get password() {
    return this._password;
  }

  //повертає прихований пароль: кількість * рівна довжині паролю
  get hiddenPassword() {
    return "*".repeat(this._password?.length);
  }

  //Валідація довжини пароля
  set password(value) {
    const MIN_PASSWORD_LENGTH = 3;
    if (value?.length < MIN_PASSWORD_LENGTH) 
        throw `Password to short. Need more ${MIN_PASSWORD_LENGTH - value?.length} symbols`;
    this._password = value;
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

  fromDict(userData){
    this._id = userData["id"];
    this.surname = userData["surname"];
    this.name = userData["name"];
    this.surname1 = userData["surname1"];
    this.destination = userData["destination"];
    this.date = userData["date"];
    this.mass = userData["mass"];
    return this;
  }
}

User._idCounter = 0;

