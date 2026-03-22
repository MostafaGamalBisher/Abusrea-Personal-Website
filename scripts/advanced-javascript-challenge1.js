class Laptop {
  constructor(brand, model, batteryPercentage) {
    this.brand = brand;
    this.model = model;
    this.batteryPercentage = Number(batteryPercentage);
  }

  UseSoftware() {
    this.batteryPercentage -= 15;

    if (this.batteryPercentage <= 0) {
      this.batteryPercentage = 0;
    }
    if (this.batteryPercentage <= 10) {
      console.log("charge your battery");
    }
  }

  charge() {
    this.batteryPercentage += 25;
    if (this.batteryPercentage > 100) {
      console.log(this.batteryPercentage);
      this.batteryPercentage = 100;
    }
  }
}

const dell = new Laptop("dell", "inspiron15", 2);
console.log(dell);
dell.UseSoftware();
console.log(dell.batteryPercentage);
// dell.charge();
// console.log(dell.batteryPercentage);

const hp = new Laptop("hp", "batets", 100);
console.log(hp);
hp.UseSoftware();
console.log(hp.batteryPercentage);
hp.charge();
console.log(hp.batteryPercentage);
