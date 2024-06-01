interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
    name: "akash",
    age: 20
}, {
    name: "singh",
    age: 21
});
console.log(result);