import { IAccess } from "../../../../general/domain";

export const AccessData:IAccess[] | any = [
    {
        name: "Clientes",    
        icon:"pi pi-users",
        path:"/customers",
        permiso: 'vista',
        
    },
    {
        name: "Clientes",    
        icon:"pi pi-users",
        path:"/customers",
        permiso: 'crear',
        
    },
    {
        name: "Clientes",
        icon:"pi pi-users",
        path:"/customers",
        permiso: 'actualizar',
        
    },
    {
        name: "Clientes",
        icon:"pi pi-users",
        path:"/customers",
        permiso: 'eliminar',
        
    },
    
    {
        name: "Recetas",
        icon:"pi pi-book",
        path:"/prescriptions",
        permiso: 'vista',

        
    },
    {
        name: "Recetas",
        icon:"pi pi-book",
        path:"/prescriptions",
        permiso: 'crear',

        
    },
    {
        name: "Recetas",
        icon:"pi pi-book",
        path:"/prescriptions",
        permiso: 'actualizar',

        
    },
    {
        name: "Recetas",
        icon:"pi pi-book",
        path:"/prescriptions",
        permiso: 'eliminar',

        
    },
    {
        name: "Usuarios",
        
        icon:"pi pi-wrench",
        path:"/users",
        permiso: 'vista',
        
    },
    {
        name: "Usuarios",
        
        icon:"pi pi-wrench",
        path:"/users",
        permiso: 'crear',
        
    },
    {
        name: "Usuarios",
        
        icon:"pi pi-wrench",
        path:"/users",
        permiso: 'actualizar',
        
    },
    {
        name: "Usuarios",
        
        icon:"pi pi-wrench",
        path:"/users",
        permiso: 'eliminar',
        
    },
    // {
    //     name: "Configuración",
        
    //     icon:"pi pi-cog",
    //     path:"/configurations",
    //     permisos: [
    //         {
    //             code:1, //codigo del permiso 1 = Create 2 = update 3 = delete
    //             name:"crear",
                
    //         },
    //         {
    //             code:2, //codigo del permiso 1 = Create 2 = update 3 = delete
    //             name:"actualizar",
                
    //         },
    //         {
    //             code:3, //codigo del permiso 1 = Create 2 = update 3 = delete
    //             name:"eliminar",
                
    //         }
    //     ]
    // }
]