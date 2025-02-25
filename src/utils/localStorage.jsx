// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "pwd": "123",
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Submit project report",
        "description": "Complete and submit the final report for Project A.",
        "date": "2024-11-05",
        "category": "Reports",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Attend team meeting",
        "description": "Participate in the monthly team meeting.",
        "date": "2024-11-06",
        "category": "Meetings",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review code",
        "description": "Review the code submitted by juniors.",
        "date": "2024-11-07",
        "category": "Code Review",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Ananya",
    "email": "employee2@example.com",
    "pwd": "123",
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Prepare presentation",
        "description": "Prepare slides for upcoming client presentation.",
        "date": "2024-11-08",
        "category": "Presentations",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update documentation",
        "description": "Ensure all project documentation is up-to-date.",
        "date": "2024-11-10",
        "category": "Documentation",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Vihaan",
    "email": "employee3@example.com",
    "pwd": "123",
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Design mockups",
        "description": "Create design mockups for the new app interface.",
        "date": "2024-11-09",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client feedback review",
        "description": "Go over client feedback and make necessary adjustments.",
        "date": "2024-11-11",
        "category": "Feedback",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Aditi",
    "email": "employee4@example.com",
    "pwd": "123",
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Database migration",
        "description": "Perform the database migration to the new server.",
        "date": "2024-11-12",
        "category": "Database",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server maintenance",
        "description": "Routine maintenance on the primary server.",
        "date": "2024-11-13",
        "category": "Maintenance",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Dev",
    "email": "employee5@example.com",
    "pwd": "123",
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "title": "User testing",
        "description": "Conduct user testing for new features.",
        "date": "2024-11-14",
        "category": "Testing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Prepare budget",
        "description": "Prepare the budget for next quarter.",
        "date": "2024-11-15",
        "category": "Finance",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

        
    
      
      
    const admin=[{
        "id": 1,
          "email": "admin@nm.com",
          "pwd": "123",    
    }
    ]
    export const setLocalStorage=()=>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
// console.log({employees, admin}, 'local storage set');

    }
    export const getLocalStorage=()=>{

        const employees= JSON.parse(localStorage.getItem('employees'))
        const admin= JSON.parse(localStorage.getItem('admin'))
        // console.log(employees,'employees', admin, 'admin', 'local storage get')
        return {employees, admin}
    }
  