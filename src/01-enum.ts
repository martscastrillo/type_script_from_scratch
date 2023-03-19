enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer",
}


export type User = {
    username:string;
    role: ROLES;
}


const nicoUser: User = {
    username: 'martcast',
    role: ROLES.SELLER,

}