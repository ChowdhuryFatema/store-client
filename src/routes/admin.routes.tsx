
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import CreateProduct from "../pages/products/CreateProduct";
// import AdminProtectedRoute from "./AdminProtectedRoute";

export const adminPaths = [
    // {
    //     name: "Dashboard",
    //     path: "dashboard",
    //     element: <AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>,
            
    // },
    // {
    //     name: "Create Product",
    //     path: "create-product",
    //     element: <AdminProtectedRoute><CreateProduct /></AdminProtectedRoute>,
    // },
    {
        name: "Academic Management",
        children: [
            // {
            //     name: "Create A. Semester",
            //     path: "create-academic-semester",
            //     element: <CreateAcademicSemester />,
            // },
            // {
            //     name: "Academic Semester",
            //     path: "academic-semester",
            //     element: <AcademicSemester />,
            // },
        ]
    },
    {
        name: "User Management",
        children: [
            // {
            //     name: "Create Admin",
            //     path: "create-admin",
            //     element: <CreateAdmin />,
            // },
            // {
            //     name: "Create Faculty",
            //     path: "create-faculty",
            //     element: <CreateFaculty />,
            // },
            // {
            //     path: "student-data/:studentId",
            //     element: <StudentDetails />,
            // },
        ]
    },
]

