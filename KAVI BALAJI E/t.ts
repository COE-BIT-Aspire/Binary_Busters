class Employee{
    empId:number=0;
    empName:string=""
    constructor(empId:number,empName:string)
    {
        this.empId=2;
        this.empName="ravi";
        class Manager extends Employee{
            constructor(empid:number,empname:string)
            super()
        }
    }
}