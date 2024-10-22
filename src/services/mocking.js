import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService {
    async generateMockingUsers(num){
        const users =[]; 
         
        for (let i = 0; i < num; i++) {
            users.push({
                firs_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.person.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return users;
    }
    
    async generateMockingPets(num){
        const pets = [];

        for (let i = 0; i < num; i++) {
            pets.push({
                name: faker.name.animal.dog(),
                specie: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.past(),
                image: "httpd://via.placeholder.com/150"
            })
        }
        console.log(pets);
        return pets;
    }
}

export default MockingService
