import { PersonalData } from "@/data/interfaces";

export function getEmptyPersonalData(): PersonalData {
    return {
        phone:{
            value:'',
            category: 'Phone'
        }, 
        address:{
            value:'',
            category: 'Address'
        }, website:{
            value:'',
            category: 'Website'
        }, 
        github:{
            value:'',
            category: 'Github'
        }, 
        email:{
            value:'',
            category: 'Email'
        }, 
        birthday:{
            value:'',
            category: 'Birthday'
        }
    };
}
