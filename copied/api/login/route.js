// // /api/login/route.ts
// import { NextResponse } from "next/server";
// import { auth } from "@/lib/firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { db } from "@/lib/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "Email and password are required" },
//         { status: 400 },
//       );
//     }

//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password,
//     );
//     const user = userCredential.user;

//     const userDoc = await getDoc(doc(db, "users", user.uid));

//     if (!userDoc.exists()) {
//       return NextResponse.json(
//         { error: "User data not found" },
//         { status: 404 },
//       );
//     }

//     const userData = userDoc.data();

//     return NextResponse.json(
//       {
//         message: "Login successful",
//         user: {
//           uid: user.uid,
//           name: userData.name,
//           email: user.email,
//           sector: userData.sector,
//           country: userData.country,
//         },
//       },
//       { status: 200 },
//     );
//   } catch (error: any) {
//     console.error("Login Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 401 });
//   }
// }
