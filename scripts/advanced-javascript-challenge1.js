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
    console.log(this.batteryPercentage);
  }

  charge() {
    this.batteryPercentage += 25;
    if (this.batteryPercentage > 100) {
      console.log(this.batteryPercentage);
      this.batteryPercentage = 100;
      console.log(this.batteryPercentage);
    }
  }
}

const dell = new Laptop("dell", "inspiron15", 2);
console.log(dell);
dell.UseSoftware();
// dell.charge();

//------------------------------------------

const hp = new Laptop("hp", "batets", 100);
console.log(hp);
hp.UseSoftware();
hp.charge();
