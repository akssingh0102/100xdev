// interface User {
//     name: string;
//     age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
//     name: "akash",
//     age: 20
// }, {
//     name: "singh",
//     age: 21
// });
// console.log(result);


// PICK
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
// }

// // For a profile display, only pick `name` and `email`
// type UserProfile = Pick<User, 'name' | 'email'>;

// const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
// };


// PARTIAL
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})
