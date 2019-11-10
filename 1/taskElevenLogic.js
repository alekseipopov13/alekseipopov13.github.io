//С помошью класса

class Cylinder {
  constructor(R, H) {
    this.R = R;
    this.h = H;
    this.S = 0;
    this.V = 0;
    this.S0 = 0;
  }

  SBasis() {
    this.S0 = this.R * (2 * Math.PI);
  }

  SAll() {
    this.S = 2 * Math.PI * this.R * (this.h + this.R);
  }

  Volume() {
    this.V = Math.PI * this.R * this.R;
  }

  Cout() {
    alert("площадь основания цилиндра = " + this.S0 + '\n' + "площадь полной поверхности = " + this.S + '\n' + "объём цилиндра = " + this.V);
  }

}

function setIt() {
  let cylinder = new Cylinder(document.getElementById("R11").value, document.getElementById("h11").value);
  cylinder.SBasis();
  cylinder.SAll();
  cylinder.Volume();
  cylinder.Cout();
}



//С помощью объекта

function setItObj() {
  let Clndr = {
    R: document.getElementById("R11").value,
    H: document.getElementById("h11").value,
    S: 0,
    V: 0,
    S0: 0,
  }

  Clndr.S0 = Clndr.R * (2 * Math.PI);
  Clndr.S = 2 * Math.PI * Clndr.R * (Clndr.H + Clndr.R);
  Clndr.V = Math.PI * Clndr.R * Clndr.R;

  alert("площадь основания цилиндра = " + Clndr.S0 + '\n' + "площадь полной поверхности = " + Clndr.S + '\n' + "объём цилиндра = " + Clndr.V);
}
