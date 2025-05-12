import { Employee } from "./employee";


export interface PaginatedDTOResponse {
    employees: Employee[];
    totalRecords: number;
}
