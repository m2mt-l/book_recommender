
export class Person {
    gender : string // {"male", "female"}
    country : string // {"Australia", "Brazil", "France", "Other"}
    imageURL : string 
    age : number
    ageRange : string // {"child", "teen". "adult"}

    constructor(gender : string, country : string, imageURL : string, age : number) {
        this.gender = gender,
        this.country = country,
        this.imageURL = imageURL,
        this.ageRange = this.getAgeRange(age);
        this.age = age
    }

    getAgeRange(age: number): string {
        if(age < 13) return 'child';
        else if(age < 20) return 'teen';
        else return 'adult';
    } 

/*     getTopic() : string {

    }
 */
}