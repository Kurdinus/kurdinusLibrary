export default class Converter {
  constructor() {
   if (this.constructor === Converter) {
     // Error Type 1. Abstract class can not be constructed.
     throw new TypeError("Can not construct abstract class.");
   }
   //else (called from child)
   // Check if all instance methods are implemented.
   if (this.convert === Converter.prototype.convert) {
     // Error Type 4. Child has not implemented this abstract method.
     throw new TypeError("Please implement abstract method convert.");
   }
  }
  // An abstract method.
  convert(text) {
   // Error Type 6. The child has implemented this method but also called `super.foo()`.
   throw new TypeError("Do not call abstract method convert from child.");
  }
}
