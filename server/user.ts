"use server"
import { auth } from "@/lib/auth";
import { success } from "better-auth";


export const signInUser = async (email: string, password: string) => {
    try{
        const response = await auth.api.signInEmail({
            body: {
                email,
                password
            },
            asResponse: true
        });
       return{
        success: true,
        message: "User signed in successfully",
       }
    }catch(error){
        const e = error as Error;
        console.error(e);
        return {success: false,message: e.message || "Failed to sign in"};
    }   
    
}

export const signUpUser = async (email: string, password: string,name: string) => {
    try{
        const response = await auth.api.signUpEmail({
            body: {
                email,
                password,
                name
            },
            asResponse: true
        });
        return{
            success: true,
            message: "User signed up successfully",
        }
    }catch(error){
        const e = error as Error;
        console.error(e);
        return {success: false,message: e.message || "Failed to sign up"};
    }
}
