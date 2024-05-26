interface User {
    firstName: string;
    lastName: string;
    email?: string;
    age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}


const user: User = {
    firstName: "akash",
    lastName: "singh",
    email: "email@gmail.com",
    age: 23,
}

console.log(isLegal(user));
