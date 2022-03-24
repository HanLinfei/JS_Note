function sum1(x, y, z, m) {
    return x + y + z + m
}

var result = sum1(10, 20, 30, 40)
console.log(result);

// 现在将它柯里化

function sum2(x) {
    return function (y) {
        return function (z) {
            return function (m) {
                return x + y + z + m
            }
        }
    }
}

console.log(sum2(10)(20)(30)(40));

// 继续简写 将它变成箭头函数

var sum3 = (x) => {
    return (y) => {
        return (z) => {
            return (m) => {
                return x + y + z + m
            }
        }
    }
}

console.log(sum3(10)(20)(30)(40));

// 简写箭头函数

var sum4 = x => y => z => m => x + y + z + m
console.log(sum4(10)(20)(30)(40));