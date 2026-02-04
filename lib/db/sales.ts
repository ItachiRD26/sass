import { db } from '../firebase/client';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import { Sale } from './companies';

const SALES_COLLECTION = 'sales';

export async function getSales(companyId: string): Promise<Sale[]> {
  try {
    const q = query(
      collection(db, SALES_COLLECTION),
      where('companyId', '==', companyId)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    } as Sale));
  } catch (error) {
    console.error('Error fetching sales:', error);
    throw error;
  }
}

export async function getSale(companyId: string, saleId: string): Promise<Sale | null> {
  try {
    const docRef = doc(db, SALES_COLLECTION, saleId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    if (data.companyId !== companyId) {
      throw new Error('Unauthorized');
    }

    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    } as Sale;
  } catch (error) {
    console.error('Error fetching sale:', error);
    throw error;
  }
}

export async function createSale(
  companyId: string,
  sale: Omit<Sale, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Sale> {
  try {
    const docRef = await addDoc(collection(db, SALES_COLLECTION), {
      ...sale,
      companyId,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return {
      id: docRef.id,
      ...sale,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Sale;
  } catch (error) {
    console.error('Error creating sale:', error);
    throw error;
  }
}

export async function updateSale(
  companyId: string,
  saleId: string,
  updates: Partial<Sale>
): Promise<void> {
  try {
    const docRef = doc(db, SALES_COLLECTION, saleId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Sale not found');
    }

    const data = docSnap.data();
    if (data.companyId !== companyId) {
      throw new Error('Unauthorized');
    }

    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Error updating sale:', error);
    throw error;
  }
}
