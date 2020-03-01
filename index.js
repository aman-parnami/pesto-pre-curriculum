const describe = (desc, fn) => {
    console.log(desc)
    fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
    toBe: (assertion) => {
        if(exp === assertion) {
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
})

const expect = (exp) => matchers(exp)

const add = (first, second) => {
    return first + second
}

const subtract = (first, second) => {
    return first - second
}

const multiply = (first, second) => {
    return first * second   
}

const divide = (first, second) => {
    return first / second
}

describe('add', () => {
    it('adds two numbers', () => {
        const result = add(1,2)
        expect(result).toBe(3)
    })
})

describe('subtract', () => {
    it('subtracts two numbers', () => {
        const result = subtract(3,1)
        expect(result).toBe(2)
    })
})

describe('multiply', () => {
    it('multiply two numbers', () => {
        const result = multiply(5,2)
        expect(result).toBe(10)
    })
})

describe('divide', () => {
    it('divide two numbers', () => {
        const result = divide(4,2)
        expect(result).toBe(2)
    })
})

module.exports ={
    describe,
    expect,
    it,
    matchers
}