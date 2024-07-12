export interface ApplicationInterface {
    id: string;
    offerId: string;
    idUser: string;
    description: string;
    status: string;
    createdAt: Date;
    requirements: {
        certificate:string,
        cv:string,
        identity:string,
        kipk:string,
        motivationLetter:string,
    };
}

export interface PersonalInterface {
    id: string;
    name: string;
    phoneNumber: string;
    birthDate: Date;
    occupation: string;
    createdAt: Date;
}