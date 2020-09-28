function Candidate(name, age, stream, grad, school) {
  this.name = name;
  this.age = age;
  this.stream = stream;
  this.grad = grad;
  this.display = function(p) {
    console.log("First Name: " + p.name.firstName);
    console.log("Age: " + p.age);
    console.log("Stream: " + p.stream);
    console.log("School: " + p.school.name);
    console.log("Grad: " + p.grad);
  }
}

const ob = new Candidate("Ashley", 21, "Science", "B.Tech", "St.Jones");
console.log(ob.name.lastName)
console.log(ob.name.lastName)
// ob.display(ob);