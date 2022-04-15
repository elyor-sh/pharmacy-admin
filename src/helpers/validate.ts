class ValidationClass {
    email (email: string): boolean {
        const regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        return regexEmail.test(email)
    }

    text (text: string): boolean{
        if(text.trim()){
            return true
        }

        return false
    }

    password (password: string): boolean {
        if(password.trim().length > 5){
            return true
        }

        return false
    }
}

export const Validate = new ValidationClass()