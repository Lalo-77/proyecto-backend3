import MockingService from "../services/mocking.js";

const getMockingPets = async (req, res) => {
    const pets = MockingService.generateMockingPets(100);
    res.send({status: "success", payload: pets});
}

const getMockingUsers = async(req, res) => {
    const users = await MockingService.generateMockingUsers(50);
    res.send({status: "success", payload: users});

}

const generateData = async (req, res) => {
    const { users, pets } = req.body;
    
    try {
        // generamos los usuarios falsos:
        const mockingUsers = await MockingService.generateMockingUsers(users);
    
        //generamos las mascotas falsas 
        const mockingPets = await MockingService.generateMockingPets(pets);

        // insertamos los datos nuevos a la BD
        await Promises.all(
            mockingUsers.map(user => usersService.create(user)),
            mockingPets.map(pet => petsService.create(pet))
    );
        
        res.send({
            status: "success",
            message: "ok"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
export default {
     getMockingPets,
     getMockingUsers,
     generateData
}