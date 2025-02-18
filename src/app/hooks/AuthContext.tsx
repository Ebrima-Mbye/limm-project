// AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig"; // Import auth from your config file
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import signOut from firebase/auth
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

interface AuthContextType {
  user: { uid: string; name: string; email: string } | null;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      console.log("onAuthStateChanged triggered");

      if (firebaseUser) {
        console.log("firebaseUser:", firebaseUser);
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            console.log("Firestore data:", userData);
            setUser({
              uid: firebaseUser.uid,
              name: userData.name,
              email: firebaseUser.email || "",
            });
          } else {
            const defaultName = "User";
            setUser({
              uid: firebaseUser.uid,
              name: defaultName,
              email: firebaseUser.email || "",
            });

            try {
              const [firstName] = firebaseUser.displayName?.split(" ") || [
                defaultName,
              ];
              await setDoc(userDocRef, {
                uid: firebaseUser.uid,
                name: firstName,
                email: firebaseUser.email,
                createdAt: Timestamp.fromDate(new Date()),
              });
            } catch (firestoreError) {
              console.error("Error creating user document:", firestoreError);
              await signOut(auth);
              setUser(null);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
