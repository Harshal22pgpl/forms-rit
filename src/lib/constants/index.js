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
    facultyUuid: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    qualification: "",
    typeOfEmployment: "",
    collegeName: "",
    feedback:"test"
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
    collegeName: ""
};
export const ANTIRAGGING = {
    name: "",
    enrollmentUuid: "",
    courseName: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    witness: ["", ""],
    incidentDetails: "",
    collegeName: ""
}



export const ADMIN ='ADMIN'