function myUtility(target){
    return new Proxy(target,{
        get(obj, prop){
            if(prop === "toJSON"){
                return () => obj
            }
            
            if(!(prop in obj)){
                obj[prop] =  myUtility({})
            }
            return obj[prop]
        },
        
        set(obj, prop, value){
            if(typeof value === "object" && value !== null){
                obj[prop] = myUtility(value)
            }
            else{
                obj[prop] = value
            }
            return true
        },
    })
}

const ProxiedObject = myUtility({x: 10})

ProxiedObject.a = 1

ProxiedObject.b.c.d = 2

console.log(JSON.stringify(ProxiedObject))