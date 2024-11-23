import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expression: "",
    last: "",
}

const WARNING = "DIGIT LIMIT MET";

export const calcSlice = createSlice({
    name: "calculate",
    initialState,
    reducers: {
        // Function: clears expression.
        clear: (state, _) => {
            if (state.last == WARNING) {
                return {...state}
            }
            return {
                expression: "",
                last: "",
            };
        },
        // Function: add an operation "+", "-", "/", "·" to the expression.
        operation: (state, action) => {
            let operation = action.payload
            let expression = state.expression
            let last = state.last
            if (last == WARNING) {
                return {...state}
            }
            let new_last = null
            let new_expression = expression
            let operations = ["+", "-", "/", "·"]
            // If adding operation after clear
            // If operation is / or *, add 0 before, else add operation
            if ( last == "" ) {
                new_last = ["/", "·"].includes(operation) ? "0" + operation : operation
            }
            // If adding operation after operation
            else if ( operations.includes(last[last.length-1]) ) {
                // Remove previous operation
                new_expression = expression.slice(0, expression.length-last.length)
                // If adding substraction
                if ( operation == "-" ) {
                    if ( ["/", "·"].includes(last[last.length-1]) ) {
                        new_last = last + "-"
                    }
                    else {
                        new_last = "-"
                    }
                }
                // If adding +, *, /
                else {
                    // If expression is empty add 0 before * or /
                    if ( new_expression == "" ) {
                        new_last = ["/", "·"].includes(operation) ? "0" + operation : operation
                    }
                    else {
                        new_last = operation
                    }
                }
            }
            else if ( last == "=" ) {
                let index_of_equal = expression.indexOf("=")
                result = expression.slice(index_of_equal+1, expression.length)
                new_expression = result
                new_last = operation
            }
            else if ( last[last.length-1] == "." ) {
                new_expression = expression.slice(0, expression.length-1)
                new_last = operation
            }
            else {
                new_last = operation
            }
            return {
                expression: new_expression + new_last,
                last: new_last,
            }
        },
        dot: (state, _) => {
            let operations = ["+", "-", "/", "·"]
            let expression = state.expression
            let last = state.last
            if (last == WARNING) {
                return {...state}
            }
            let new_last = null
            let new_expression = expression
            if ( last == "" ) {
                new_last = "0."
            }
            else if ( operations.includes(last[last.length-1]) ) {
                new_last = "0."
            }
            else if ( last == "=" ) {
                let index_of_equal = expression.indexOf("=")
                result = expression.slice(index_of_equal+1, expression.length)
                new_expression = ""
                if ( !result.includes(".") ) {
                    new_last = result + "."
                }
                else {
                    new_last = result
                }
            }
            else if ( last[last.length-1] == "." ) {
                new_expression = expression.slice(0, expression.length-1)
                new_last = "."
            }
            else {
                new_expression = expression.slice(0, expression.length-last.length)
                if ( !last.includes(".") ) {
                    new_last = last + "."
                }
                else {
                    new_last = last
                }
            }
            return {
                expression: new_expression + new_last,
                last: new_last,
            }
        },
        number: (state, action) => {
            let number = action.payload
            let operations = ["+", "-", "/", "·"]
            let expression = state.expression
            let last = state.last
            if (last == WARNING) {
                return {...state}
            }
            let new_last = null
            let new_expression = expression
            if ( last == "" ) {
                new_last = number
                new_expression = number
            }
            else if ( operations.includes(last[last.length-1]) ) {
                new_expression += number
                new_last = number
            }
            else if ( last == "=" ) {
                new_last = number
                new_expression = number
            }
            else if ( last[last.length-1] == "." ) {
                new_expression += number
                new_last = last + number
            }
            else {
                new_expression += number
                new_last = last + number
            }
            return {
                expression: new_expression,
                last: new_last,
            }
        },
        equals: (state, _) => {
            let operations = ["+", "-", "/", "·"]
            let expression = state.expression
            let last = state.last
            if (last == WARNING) {
                return {...state}
            }
            let new_expression = expression
            let result = null
            if ( last == "" ) {
                new_expression = "0=0"
            }
            else if ( operations.includes(last[last.length-1]) ) {
                let eval_expression = expression.slice(0, expression.length-last.length)
                result = eval(eval_expression.replace("·", "*")).toString()
                new_expression = eval_expression + "=" + result
            }
            else if ( last == "=" ) {
                new_expression = expression
            }
            else if ( last[last.length-1] == "." ) {
                result = eval(expression.replace("·", "*")).toString()
                new_expression = expression + "=" + result
            }
            else {
                result = eval(expression.replace("·", "*")).toString()
                new_expression = expression + "=" + result
            }
            return {
                expression: new_expression,
                last: "=",
            }
        },
        limitWarning: (state, _) => {
            return {...state, last: WARNING};
        },
        warningTimeout: (state, action) => {
            let last = action.payload;
            return {...state, last: last}
        },
    }
})

export const { clear, operation, dot, number, equals, limitWarning, warningTimeout } = calcSlice.actions;

export default calcSlice.reducer;