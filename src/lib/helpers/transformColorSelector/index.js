export default (obj, type = "hex") => {
    if(type === "rgb"){
        return `rgba(${obj.rgb.r}, ${obj.rgb.g}, ${obj.rgb.b}, ${obj.rgb.a})`
    }
    else if(type === "hex"){
        return obj.hex
    }

    return obj
}