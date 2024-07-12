export interface FundingInterface {
    id: string; 
    title: string;
    description: string;
    type: string;
    idUser: string;
    status: string;
    transferMethod: string;
    imageUrl: string;
    nominal: number;
    applicants: number;
    jenjang: string[];
    isAnonymous: boolean;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    requirements: {
        certificate:boolean,
        cv:boolean,
        identity:boolean,
        kipk:boolean,
        motivationLetter:boolean,
    };
}
