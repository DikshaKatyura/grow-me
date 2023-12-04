interface department{
    id: number;
    department : string;
    sub_departments : string[]
}
const Department:department[] = [
	{
        id:0,
  	department: "customer_service",
  	sub_departments: [
    	"support",
    	"customer_success"
  	]
	},
	{
        id:1,
  	department: "design",
  	sub_departments: [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	},
	{
        id:2,
  	department: "Bank",
  	sub_departments: [
    	"Account",
    	"Data Entry",
    	"Manager",
		"Customer Support"
  	]
	},
	{
        id:3,
  	department: "Science",
  	sub_departments: [
    	"Chemistry",
    	"Physics",
    	"Biology"
  	]
	},
	{
        id:4,
  	department: "commerce",
  	sub_departments: [
    	"Social Studies",
    	"Economy",
    	"Accounts"
  	]
	}
  ]

  export default Department;
