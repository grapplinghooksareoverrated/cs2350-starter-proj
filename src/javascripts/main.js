//TODO - Your ES6 JavaScript code (if any) goes here
// import "bootstrap"

function getMax(x, y, z) {

    if (x > y & x > z) {
        return x
    }
    else if (y > x & y > z) {
        return y
    }
    else if (z > x & z > y) {
        return z
    }

}

function getMin(x, y, z) { 
    if (x < y & x < z) {
        return x
    }
    else if (y < x & y < z) {
        return y
    }
    else if (z < x & z < y) {
        return z
    }
}

function getMean(x, y, z) {
    return (x+y+z)/3
}

function getCharPerLine(str, indent) {
    let finalValue = ""
    for (let i=0; i<str.length; i++) {
        if (str[i] == " ") continue; 
        if (indent) {
            indenter = ""
            for (let j=0; j<i; j++) indenter += " "
            finalValue += indenter + str[i] + "\n"
        }
        else {
            finalValue += str[i] + "\n"
        }
    }
    return finalValue
}

console.log(getCharPerLine("Hello world", true))

function arrow(size) {
    size = size - 1
    let finalValue = ""
    for (let i=0; i<size; i++) {
        line = ""
        for (let j=0; j<=i; j++) {
            line += "*"
        }
        finalValue += line + "\n"
    }

    for (let i=size; i>=0; i--) {
        line = ""
        for (let j=0; j<=i; j++) {
            line += "*"
        }
        finalValue += line + "\n"
    }

    return finalValue
}

console.log(arrow(3))

console.log(arrow(7))