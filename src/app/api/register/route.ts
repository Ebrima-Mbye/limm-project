// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebaseConfig";
// import { doc, setDoc, Timestamp } from "firebase/firestore";

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     console.log("Register Request Data:", data);
//     const { email, password, sector, country } = data;

//     const userId = crypto.randomUUID(); // Generate a UUID

//     const createdAt = Timestamp.fromDate(new Date());

//     await setDoc(doc(db, "users", userId), {
//       email,
//       sector,
//       country,
//       createdAt,
//       password, // Store the password (consider security implications)
//     });

//     return NextResponse.json(
//       { message: "User registered successfully" },
//       { status: 201 },
//     );
//   } catch (error: any) {
//     console.error("Firestore Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// route.ts (for registration)
import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import bcrypt from 'bcrypt'; // Import bcrypt

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Register Request Data:", data);
    const { email, password, sector, country } = data;

    // Server-side validation (example)
    if (!email || !password || !sector || !country) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userId = crypto.randomUUID(); // Generate a UUID

    const createdAt = Timestamp.fromDate(new Date());

    await setDoc(doc(db, "users", userId), {
      email,
      sector,
      country,
      createdAt,
      password: hashedPassword, // Store the hashed password
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Firestore Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}


// Login Route (e.g., login/route.ts)
// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";
// import bcrypt from 'bcrypt';

// export async function POST(req: Request) {
//     try {
//         const { email, password } = await req.json();

//         // 1. Find the user by email
//         const usersRef = collection(db, "users"); // Reference to the users collection
//         const q = query(usersRef, where("email", "==", email)); // Create a query to find the user by email

//         const querySnapshot = await getDocs(q); // Execute the query

//         if (querySnapshot.empty) {
//             return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//         }

//         const userDoc = querySnapshot.docs[0]; // Get the first document (assuming email is unique)
//         const userData = userDoc.data();

//         // 2. Compare the provided password with the stored hash
//         const passwordMatch = await bcrypt.compare(password, userData.password);

//         if (!passwordMatch) {
//             return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//         }

//         // 3. If the password matches, you can consider creating a session or JWT here
//         // For this example, we'll just return a success message
//         return NextResponse.json({ message: "Login successful", user: userData }, { status: 200 });

//     } catch (error) {
//         console.error("Login Error:", error);
//         return NextResponse.json({ error: "An error occurred during login" }, { status: 500 });
//     }
// }
