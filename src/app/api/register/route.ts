// // /api/register/route.ts
// import { auth, db } from "@/lib/firebaseConfig";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { email, password, name, sector, country } = await req.json();

//     if (!name || !email || !password || !sector || !country) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 },
//       );
//     }

//     const [firstName] = name.split(" ");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await updateProfile(user, { displayName: firstName });

//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnapshot = await getDoc(userDocRef);

//       if (userDocSnapshot.exists()) {
//         await setDoc(userDocRef, {
//           name,
//           email,
//           sector,
//           country,
//           createdAt: Timestamp.fromDate(new Date()),
//         }, { merge: true });
//       } else {
//         await setDoc(doc(db, "users", user.uid), {
//           uid: user.uid,
//           name,
//           email,
//           sector,
//           country,
//           createdAt: Timestamp.fromDate(new Date()),
//         });
//       }

//       return NextResponse.json(
//         {
//           message: "User registered successfully",
//           user: {
//             uid: user.uid,
//             name,
//             email,
//             sector,
//             country,
//             displayName: firstName,
//           },
//         },
//         { status: 201 },
//       );
//     } catch (authError: any) {
//       if (authError.code === 'auth/email-already-in-use') {
//         return NextResponse.json({ error: "Email is already in use." }, { status: 400 });
//       } else {
//         console.error("Authentication Error:", authError);
//         return NextResponse.json({ error: authError.message }, { status: 400 });
//       }
//     }
//   } catch (error: any) {
//     console.error("Register Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
