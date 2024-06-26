import moment from "moment";


export const BASE_URL = 'https://pgpl-backend-services.vercel.app/api/v1';

export const STUDENT = {
    enrollmentUuid: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    semester: "",
    feedback: "",
    collegeName: ""
};

export const ERR_MSG_PREFIX = "The following fields are blank:";
export const ALERT_TIMEOUT = 3000;
export const FACULTY = {
    facultyDesignation: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    collegeName: "",
    feedback:""
  // OrganizationUuid: ""
};


export const GRIEVENCE = {
    enrollmentUuid: "",
    name: "",
    email: "",
    phone: "",
    courseName: "",
    typeOfGrievence: "",
    semester: "",
    description: "",
    collegeName: "",
    feedback:""
};
export const ANTIRAGGING = {
    name: "",
    email:"",
    enrollmentUuid: "",
    courseName: "",
    phone:"",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    witness: [],
    incidentDetails: "",
    collegeName: ""
}

export const VERIFYFORM = {
    enrollmentNumber: "",
    fullName: " ",
    fatherName: "",
    courseName: "",
    year: "",
    semester: "",
    transactionId: "",
    transactionProof: ""
    }


export const ADMIN ='ADMIN'