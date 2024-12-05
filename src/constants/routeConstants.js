

const routeConstants = {
    ROOT: "/",
    HOME: "/",
    PAGE_NOT_FOUND: "*"
}

export default routeConstants;

/*
    
    export default {
        ROOT: "/",
        HOME: "/",
        PAGE_NOT_FOUND: "*"
    }

    The difference between this and the one above is that this one does not have a defined variable or the equal sign. Since we are exporting it directly. But if you want to call this export in another file, we say:

            import routeConstants from './routeConstants';

            console.log(routeConstants.someConstant); 
            routeConstants.someFunction(); 
*/