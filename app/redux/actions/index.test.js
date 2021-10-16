const rewire = require("rewire")
const index = rewire("./index")
const loadConversionData = index.__get__("loadConversionData")
const loadConversionDataSuccess = index.__get__("loadConversionDataSuccess")
const loadConversionDataFailure = index.__get__("loadConversionDataFailure")
// @ponicode
describe("loadConversionData", () => {
    test("0", () => {
        let callFunction = () => {
            loadConversionData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadConversionDataSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            loadConversionDataSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loadConversionDataSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadConversionDataFailure", () => {
    test("0", () => {
        let callFunction = () => {
            loadConversionDataFailure("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loadConversionDataFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loadConversionDataFailure("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loadConversionDataFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loadConversionDataFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loadConversionDataFailure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getCurrencyRates", () => {
    test("0", () => {
        let callFunction = () => {
            index.getCurrencyRates()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setSelected", () => {
    test("0", () => {
        let callFunction = () => {
            index.setSelected("BTC")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setSelected("BCH")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setSelected("BSV")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setSelected("ETH")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.setSelected("LTC")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.setSelected(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.showInput", () => {
    test("0", () => {
        let callFunction = () => {
            index.showInput(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.showInput(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.showInput(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setInr", () => {
    test("0", () => {
        let callFunction = () => {
            index.setInr({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setInr({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setInr({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setInr(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
